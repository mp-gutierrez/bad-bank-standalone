function Balance(){
  const ctx = React.useContext(UserContext); 
  return (
    <h1>
      Balance:
      <br/>
      {JSON.stringify(ctx.users[ctx.users.length-1].balance)}
    </h1>
  )
}
