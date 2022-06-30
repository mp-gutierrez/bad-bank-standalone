function Withdraw(){
  const ctx                           = React.useContext(UserContext);
  const [show, setShow]               = React.useState(true);
  const [status, setStatus]           = React.useState('');
  const [balance, setBalance]         = React.useState(ctx.users[0].balance);
  const [disabled, setDisabled]       = React.useState(true);
  const [withdrawal, setWithdrawal]   = React.useState('');

  const validate = amount => {
    if (!amount) {
      setStatus('Please enter a value');
      return false;
    }
    if (amount <= 0) {
      setStatus('Cannot withdraw 0 or negative amounts');
      return false;
    }
    if (isNaN(amount)) {
      setStatus('Only numbers permitted');
      return false;
    }
    if(amount > balance){
      setStatus('Cannot overdraft account');
      return false;
    }
    return true;
  }

  const withdraw = amount => {
    if (!validate(amount)) return;
    setBalance(Number(balance) - Number(amount));
    setShow(false);
    setStatus('');
    ctx.users.push(Number(balance) - Number(amount));
  }

  function clearForm(){
    setWithdrawal('');
    setShow(true);
  }

  React.useEffect(() => {
    !withdrawal ? setDisabled(true) : setDisabled(false);
  }, [withdrawal]);

  return (
    <Card
      header="Withdraw"
      status={status}
      body={show ? (
        <>
          <h4>Balance: ${balance}</h4>
          Withdrawal amount
          <br/>
          <input  
            className="form-control" 
            id="withdrawal" 
            placeholder="0" 
            value={withdrawal}
            onChange={e => setWithdrawal(e.currentTarget.value)}
          />
          <br/>
          <div className="text-center">
            <button
              type="submit" 
              className="btn btn-secondary" 
              onClick={() => withdraw(withdrawal)} 
              disabled={disabled}>
                Withdraw
            </button>
          </div>
          <br/>
        </>
      ):(
        <>
          <h5>Withdrawal completed successfully</h5>
          <br/>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={clearForm}>
                Make another withdrawal
            </button>
          </div>
          <br/>
        </>
      )}
    />
  )
}
