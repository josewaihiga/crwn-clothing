import "./sign-up-form.style.scss";
import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    // TODO confirm that the password matches
    if(password !== confirmPassword) alert(`${password} != ${confirmPassword}`)

    // TODO Check if the user is authenticated with email and password

    // 

    const test = await createAuthUserWithEmailAndPassword(email, password);
    console.log(test);
  

    // TODO create a user document from the return (don't forget to include the displayName when creating the user)


    // console.log("submitted", formFields);
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>

      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>

        <label>Email</label>
        <input type="email" required onChange={handleChange} name="email" value={email}/>

        <label>Password</label>
        <input type="password" minlength="6" required onChange={handleChange} name="password" value={password}/>

        <label>Confirmed Password</label>
        <input type="password" minlength="6" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

        <button disabled={password.length >= 8 ? "false" : "true"} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
