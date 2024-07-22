import { useState, FormEvent, ChangeEvent } from "react";

import { AuthError, AuthErrorCodes} from "firebase/auth"

import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

// Components
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

// Styles
import { Container } from "./sign-up-form.style";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const dispatch = useDispatch();

  // Form validation criteria
  const passwordLength = 8;
  // This works, though I don't think it's good UX to have the submit button disabled without showing clear warnings as to why.
  // const validated = password.length >= passwordLength;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // confirm that the password matches
    if (password !== confirmPassword) alert("Passwords do not match.");

    // Authenticate then create userDoc with additional information (displayName)
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      
      if((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user, email already in use");
      } else {
        console.error("user creation error: ",error);
      }

    }
  };

  return (
    <Container>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" type="password" minLength={passwordLength} required onChange={handleChange} name="password" value={password} />
        <FormInput label="Confirm Password" type="password" minLength={passwordLength} required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

        {/* <button disabled={!validated} type="submit">Submit</button> */}
        <Button type="submit">Sign-up</Button>
      </form>
    </Container>
  );
};

export default SignUpForm;
