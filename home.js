function Home(){
  return (
    <Card
      txtcolor="black"
      header="BadBank Home Page"
      title="Welcome to the bank"
      text="Your money, our lack of security"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
