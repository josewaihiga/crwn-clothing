import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {AuthenticatorContainer} from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthenticatorContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticatorContainer>
  );
};

export default Authentication;
