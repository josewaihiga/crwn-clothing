import "./sign-up-form.style.scss";
import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // Form validation criteria
  const passwordLength = 8;
  // This works, though I don't think it's good UX to have the submit button disabled without showing clear warnings as to why.
  // const validated = password.length >= passwordLength;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // confirm that the password matches
    if (password !== confirmPassword) alert("Passwords do not match.");

    // Authenticate then create userDoc with additional information (displayName)
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Cannot create user, email already in use");
          break;
        default:
          console.error(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" type="password" minLength={passwordLength} required onChange={handleChange} name="password" value={password} />
        <FormInput label= "Confirm Password" type="password" minLength={passwordLength} required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

        {/* <button disabled={!validated} type="submit">Submit</button> */}
        <Button type="submit">Sign-up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;