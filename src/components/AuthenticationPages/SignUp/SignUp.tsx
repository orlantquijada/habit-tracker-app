import React, { useState, useRef } from "react";
import AuthForm from "components/AuthForm";
import InputFormField from "components/InputFormField/InputFormField";
import AuthLink from "components/AuthLink";

import "../AuthPage.scss";

const SignUp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      <h5 className="auth-page__title">Count your seconds</h5>
      <AuthForm
        isLoading={isLoading}
        loadingText="Creating Account"
        submitBtnText="Create Account"
        authLink={
          <AuthLink
            labelText="Already have an account?"
            linkText="Sign In"
            link="/signin"
          />
        }
        onSubmit={formOnSubmit}
      >
        <InputFormField
          inputType="text"
          name="full-name"
          id="full-name"
          labelText="Name"
          value={name}
          setValue={setName}
          isLoading={isLoading}
        />
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
        />
      </AuthForm>
    </div>
  );
};

export default SignUp;
