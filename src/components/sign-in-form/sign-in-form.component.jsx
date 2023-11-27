import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { createUserDocumentFromAuth, signInWithEmailAndPasswordFirebase, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (error) {
      console.log(error);
    }
  };

  const resetFormFields = ()=>{
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const {user} = await signInWithEmailAndPasswordFirebase(email, password);
      console.log(user)
      // resetFormFields();
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <span>Already have an account?</span>

      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
        <Button>Sign in</Button>
        <Button buttonType="google" onClick={logGoogleUser}>
          Sign in with Google
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
