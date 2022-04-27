import React, { useState } from "react";
import validator from 'validator';


const styles = {
  color: {
    color: "#3A7759",
    backgroundColor: "#8CAB9B",
  },
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }
};

//form needs to include the following: name, an email address, and a message
// formit 

export default function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }

  function onBlurRequire(e){
    const {name, value} = e.target;
    if(!value){
      setErrorMessage(`${name} is required!`);
    }else{
      setErrorMessage("");
    }
  }

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    const handler = {
      "firstName": setFirstName,
      "lastName": setLastName,
      "email": setEmail
    }
    handler[name](value);

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    // return name === "firstName" ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName} ${email}`);
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  // export default function Contact() {
  return (
    <div style={styles.color} className="title_contact">
      <div style={styles.containerStyle} id="CONTACT" className="contactrow">
        <div className="col-md-3 contactBuffer"></div>
        <div  className="col-2">
          <p>
            Hello {firstName} {lastName}
          </p>
          <form className="form">
            <input
              value={firstName}
              name="firstName"
              onChange={handleInputChange}
              type="text"
              onBlur={onBlurRequire}
              placeholder="First Name"
            />
            <input
              value={lastName}
              name="lastName"
              onChange={handleInputChange}
              type="text"
              placeholder="Last Name"
              onBlur={onBlurRequire}

            />
            <span>Enter Email: </span><input type="text" id="userEmail" 
                  onChange={(e) => validateEmail(e)}></input> <br />
                  <span style={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}>{emailError}</span>
              <input
              onBlur={onBlurRequire}
              value={email}
              name="email"
              onChange={handleInputChange}
              type="text"
              placeholder="Email"
            />
            {/* <div style={{
                margin: 'auto',
                marginLeft: '300px',
              }}>
                <pre>
                  <h2>Validating Email in ReactJS</h2>
                  <span>Enter Email: </span><input type="text" id="userEmail" 
                  onChange={(e) => validateEmail(e)}></input> <br />
                  <span style={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}>{emailError}</span>
                </pre>
              </div> */}
            <p style={{
              color: 'red'
            }} className="error-message">{errorMessage}</p>
            <button disabled={errorMessage !== ""} type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  // }
}
