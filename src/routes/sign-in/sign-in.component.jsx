import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  return (
    <div>
      <h1>Sign In Page</h1>

      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
