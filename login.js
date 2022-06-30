function Login() {
  const [show, setShow]         = React.useState(true);
  const [email, setEmail]       = React.useState("");
  const [name, setName]         = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus]     = React.useState("");
  const ctx                     = React.useContext(UserContext);
  const { useEffect }            = React;

  function validate(field, label) {
    if (!field) {
      setStatus(`Error: ${label} is required `);
      return false;
    }

    if (
      label === "email" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(field)
    ) {
      const errorMessage = "Error: Invalid format";
      setStatus(errorMessage);
      return false;
      
    }
    return true;
  }

  function handleLogin() {
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    let isValidUser = findUser(email, password);
    if (isValidUser) {
      setShow(false);
    } else {
      setStatus("Invalid username or password");
    }
  }

  function findUser(email, password) {
    let isValid = false;
    ctx.users.forEach((user) => {

      if (user.email === email && user.password === password) {
        user.isLogged = "true";
        setName(user.name);
        isValid = true;
      }
    });

    return isValid;
  }

  useEffect(() => {
    let isMounted = true;
    if (status !== "") {
      setTimeout(() => {
        if (isMounted) setStatus("");
      }, 3000);
    }

    return () => isMounted = false;
  }, [status]);

  const loginForm = (
    <LoginForm
      email={email}
      handleEmailChange={(e) => setEmail(e.currentTarget.value)}
      password={password}
      handlePasswordChange={(e) => setPassword(e.currentTarget.value)}
      handleSubmit={handleLogin}
      isDisabled={false}
      isNewAccount={false}
      label="Login"
    />
  );

  return (
    <>
      <Card
        header="Login"
        status={status}
        txtcolor="black"
        body={
          show ? (
            loginForm
          ) : (
            <>
              <h5>Welcome, {name}!</h5>
            </>
          )
        }
      />
    </>
  );
}