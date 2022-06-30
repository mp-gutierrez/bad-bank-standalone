function AllData(){
  const ctx = React.useContext(UserContext);

  return (
    <Card
      txtcolor="black"
      header="All Data in Store"
      body={
        <>
          <table className="table-all-data">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {ctx.users.map((user, i) => 
                <tr key={i}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.balance}</td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      }
    />
  );  
}

