import "../banner.css";

function Banner() {
  let myName = "Arjit Verma";

  let companyDetails = {
    name: "Google",
    location: "USA",
    noOfEmployees: 10000,
  };

  let friends = ["Jack", "Jason", "David"];

  function handleButtonClick(){
    console.log("Button Was Clicked")
  }

  return (
    <section className="banner">
      Hey! My name is {myName}
      <br></br>
      Company Name : {companyDetails.name}
      <br />
      Location :{companyDetails.location}
      <br />
      No Of Employees : {companyDetails.noOfEmployees}
      <br />
      My friends:
      {friends[0]},{friends[1]},{friends[2]}
      <br />
    console.log("something")
     <button onClick={handleButtonClick}>Click Me</button>

    </section>
  );
}

export default Banner;
