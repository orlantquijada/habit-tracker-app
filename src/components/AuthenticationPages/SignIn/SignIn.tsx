import React, { useState, useRef } from "react";
import AuthForm from "components/AuthForm";
import InputFormField from "components/InputFormField/InputFormField";
import AuthLink from "components/AuthLink";

import "../AuthPage.scss";

const SignIn: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const formOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // temporarily replicating async api call
    setIsLoading(true);
    setTimeout(() => {
      console.log("loading");
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div className="auth-page">
      <h5 className="auth-page__title">Sign in to your account</h5>
      <AuthForm
        isLoading={isLoading}
        loadingText="Creating Account"
        submitBtnText="Create Account"
        authLink={
          <AuthLink
            labelText="Sign in to your account"
            linkText="Sign Up"
            link="/signup"
          />
        }
        onSubmit={formOnSubmit}
      >
        <InputFormField
          inputType="text"
          name="username"
          id="username"
          labelText="Username"
          value={username}
          setValue={setUsername}
          inputRef={usernameInputRef}
          isLoading={isLoading}
          isRequired
        />
        <InputFormField
          inputType="password"
          name="password"
          id="password"
          labelText="Password"
          value={password}
          setValue={setPassword}
          isLoading={isLoading}
          inputRef={passwordInputRef}
          isRequired
          isSignIn
        />
      </AuthForm>
    </div>
  );
};

export default SignIn;
