function CreateAccount(){
  const [show, setShow]                 = React.useState(true);
  const [status, setStatus]             = React.useState('');
  const [name, setName]                 = React.useState('');
  const [email, setEmail]               = React.useState('');
  const [password, setPassword]         = React.useState('');
  const ctx                             = React.useContext(UserContext);
  const [disabled, setDisabled]         = React.useState(true); 

  function validate(field){
      if (!field) {
        setStatus('Error: field(s) left empty');
        setDisabled(true);
        setTimeout(() => setStatus(''),3000);
        return false;
      }

      if (password.length < 8 && password.length > 0) {
        setStatus('Password must contain 8 or more characters.');
        return false;
      }
      setStatus();
      setDisabled(false);
      return true;
  }

  function handleCreate(){
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    setDisabled(true);
  }

  React.useEffect(() => {
    !name && !email && !password ? setDisabled(true) : setDisabled(false);
  }, [name, email, password]);

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} />
              <br/>
              Email address
              <br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
              <br/>
              Password
              <br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
              <br/>
              <div className="text-center">
                <button type="submit" className="btn btn-secondary" onClick={handleCreate} disabled={disabled}>Create Account</button>
              </div>
              <br/>
              </>
            ):(
              <>
              <h5>Account successfully created!</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}