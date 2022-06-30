const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ';
    }
  
    return (
      <div className={classes()} style={{maxWidth: "26rem"}}>
        <div className="card-header make-bold">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
}

function LoginForm(props) {
  return (
    <>
      {props.isNewAccount && (
        <>
          Name: <br/>
          <input
            type="input"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={props.name}
            onChange={props.handleNameChange}
          />
          <br/>
        </>
      )}
      Email Address: <br/>
      <input
        type="input"
        className="form-control"
        id="email"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleEmailChange}
      />
      <br/>
      Password: <br/>
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="Enter password"
        value={props.password}
        onChange={props.handlePasswordChange}
      />
      <br/>
      <div className="text-center">
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={props.handleSubmit}
          disabled={props.isDisabled}
        >
          {props.label}
        </button>
      </div>
      <br/>
    </>
  );
}