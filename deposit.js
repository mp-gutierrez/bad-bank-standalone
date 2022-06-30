function Deposit(){
  const ctx                     = React.useContext(UserContext);
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState('');
  const [balance, setBalance]   = React.useState(ctx.users[0].balance);
  const [disabled, setDisabled] = React.useState(true);

  const validate = amount => {
    if (!amount) {
      setStatus('Please enter a value');
      return false;
    }
    if (amount <= 0) {
      setStatus('Cannot deposit 0 or negative amounts');
      return false;
    }
    if (isNaN(amount)) {
      setStatus('Only numbers permitted');
      return false;
    }
    return true;
  }

  const makeDeposit = amount => {
    if (!validate(amount)) return;
    setBalance(Number(balance) + Number(amount));
    setShow(false);
    setStatus('');
    ctx.users[0].balance += Number(amount));
  }

  function clearForm(){
    setDeposit('');
    setShow(true);
  }

  React.useEffect(() => {
    !deposit ? setDisabled(true) : setDisabled(false);
  }, [deposit]);

  return (
    <Card
      header="Deposit"
      status={status}
      body={show ? (
        <>
          <h4>Balance: ${balance}</h4>
          Deposit amount
          <br/>
          <input 
            type="deposit" 
            className="form-control" 
            id="deposit" 
            placeholder="0" 
            value={deposit}
            onChange={e => setDeposit(e.currentTarget.value)}
          />
          <br/>
          <div className="text-center">
            <button
              type="submit" 
              className="btn btn-secondary" 
              onClick={() => makeDeposit(deposit)} 
              disabled={disabled}>
                Deposit
            </button>
          </div>
          <br/>
        </>
      ):(
        <>
          <h5>Deposit completed successfully</h5>
          <br/>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={clearForm}>
                Make another deposit
            </button>
          </div>
          <br/>
        </>
      )}
    />
  )
}
