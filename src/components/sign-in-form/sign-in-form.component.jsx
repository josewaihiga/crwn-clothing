import "./sign-in-form.style.scss";

import { useState } from "react";

import { 
  createUserDocumentFromAuth, 
  signInAuthWithEmailAndPassword, 
  signInWithGooglePopup 
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";



const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;



  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();

    } catch (error) {
      console.log(error);
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      if(error.code === "auth/invalid-login-credentials"){
        alert('Invalid login details')
      }
      console.log(error);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email" value={email} 
        />
        
        <FormInput 
          label="Password" 
          type="password" 
          required onChange={handleChange} 
          name="password" 
          value={password} 
        />
        <div className="buttons-container">
        <Button type="submit">Sign in</Button>
        <Button type="button" buttonType="google" onClick={signInWithGoogle}>Sign in with Google</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
