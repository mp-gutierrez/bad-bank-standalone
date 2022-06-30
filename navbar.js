function NavBar(){
  const navTabs = [
    {id: "#/"}, 
    {id: "#/CreateAccount/"}, 
    {id: "#/login/"}, 
    {id: "#/deposit/"}, 
    {id: "#/withdraw/"}, 
    {id: "#/alldata/"}
  ];

  function handleActiveLink(e) {
    for (let i = 0; i < navTabs.length; i++) {
      if (e.target.hash === navTabs[i]['id']) {
        document.getElementById(navTabs[i]['id']).className = "nav-link active current-page";
      } else if (e.target.hash !== navTabs[i]['id']) {
        document.getElementById(navTabs[i]['id']).className = "nav-link";
      };
    };
  }

  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item" onClick={handleActiveLink} title="Go to home page">
            <a className="nav-link" id="#/" aria-current="page" href="#/">Home</a>
          </li>
          <li className="nav-item" onClick={handleActiveLink}>
            <a className="nav-link" id="#/CreateAccount/" href="#/CreateAccount/" title="Create a new account">Create Account</a>
          </li>
          <li className="nav-item" onClick={handleActiveLink}>
            <a className="nav-link" id="#/login/" href="#/login/" title="Access your account">Login</a>
          </li>
          <li className="nav-item" onClick={handleActiveLink}>
            <a className="nav-link" id="#/deposit/" href="#/deposit/" title="Make a deposit">Deposit</a>
          </li>
          <li className="nav-item" onClick={handleActiveLink}>
            <a className="nav-link" id="#/withdraw/" href="#/withdraw/" title="Make a withdrawal">Withdraw</a>
          </li>
          <li className="nav-item" onClick={handleActiveLink}>
            <a className="nav-link" id="#/alldata/" href="#/alldata/" title="Review login information of every account">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}