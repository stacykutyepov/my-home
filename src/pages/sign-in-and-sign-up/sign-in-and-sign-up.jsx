import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import { SignInSignUpContainer } from "./sign-in-and-sign-up.styles";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <SignInSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInSignUpContainer>
);

export default SignInAndSignUpPage;
