import { useState } from "react";
import "./App.css";

export default function App() {
  
  //TODO: Add your state fields here

  const [userData, setUserData] = useState({
    fullName: "",
    address: "",
    phone: "",
    email: "",
    textarea: "",
    contact: "Phone",
    agree: false,
  })

  function handleChange(event) {
    const inputName = event.target.name
    const inputValue = event.target.value
    const inputType = event.target.type

    console.log(inputName, inputValue, inputType);

    if (inputName === "fullName") {
      setUserData({...userData, fullName: inputValue})
    }
    if (inputName === "address") {
      setUserData({...userData, address: inputValue})
    }
    if (inputName === "phone") {
      setUserData({...userData, phone: inputValue})
    }
    if (inputName === "email") {
      setUserData({...userData, email: inputValue})
    }
    if (inputName === "contact") {
      setUserData({...userData, contact: inputValue})
    }
    if (inputName === "complaint") {
      setUserData({...userData, textarea: inputValue})
    }
    if (inputType === "checkbox" && inputName === "consent" ) {
      setUserData({...userData, agree: event.target.checked})
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    
    setUserData({
      fullName: "",
      address: "",
      phone: "",
      email: "",
      textarea: "",
      contact: "Phone",
      agree: false,
    })
  }

  console.log(userData)

  return (
    <>
      <form className="form" onSubmit={handleSubmit} >
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label htmlFor="fullName">
            Full name
            <input id="fullName" type="text" name="fullName" required onChange={handleChange} value={userData.fullName} />
          </label>
          <label>
            Address
            <input type="text" name="address" onChange={handleChange} value={userData.address} />
          </label>
          <label>
            Phone Number
            <input type="telephone" name="phone" onChange={handleChange} value={userData.phone}/>
          </label>

          <label>
            Email
            <input type="email" name="email" onChange={handleChange} value={userData.email} />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handleChange}
              value={userData.textarea}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" onChange={handleChange} checked={userData.contact === 'phone'} />
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" onChange={handleChange} checked={userData.contact === 'email'}/>
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" onChange={handleChange} checked={userData.contact === 'post'}/>
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" onChange={handleChange} checked={userData.contact === 'none'}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" onChange={handleChange} checked={userData.agree}/>
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
