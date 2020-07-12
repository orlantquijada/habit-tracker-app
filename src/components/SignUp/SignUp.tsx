import React, { useState, useRef } from "react";
import InputFormField from "components/InputFormField";
import AuthLink from "components/AuthLink";

import { ReactComponent as RefreshIcon } from "assets/icons/refresh.svg";

import "./SignUp.scss";

const SignUp: React.FC = () => {
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

    usernameInputRef.current?.focus();
  };
  return (
    <div className="signup">
      <h5 className="title">Count your seconds</h5>
      <form
        action="#"
        method="post"
        className="signup-form"
        onSubmit={formOnSubmit}
      >
        <div className="form-fields">
          <InputFormField
            inputType="text"
            name="full-name"
            id="full-name"
            labelText="Name"
            isLoading={isLoading}
          />
          <InputFormField
            inputType="text"
            name="username"
            id="username"
            labelText="Username"
            inputRef={usernameInputRef}
            isLoading={isLoading}
            isRequired
          />
          <InputFormField
            inputType="password"
            name="password"
            id="password"
            labelText="Password"
            isLoading={isLoading}
            inputRef={passwordInputRef}
            isRequired
          />
        </div>
        {isLoading && (
          <div className="loading-indicator">
            <RefreshIcon />
            <span>Creating Account</span>
          </div>
        )}
        <button
          type="submit"
          className={
            isLoading ? "submit-btn submit-btn--disabled" : "submit-btn"
          }
          disabled={isLoading ? true : false}
        >
          Create Account
        </button>
        <AuthLink
          labelText="Already have an account?"
          linkText="Sign In"
          link="/signin"
        />
      </form>
    </div>
  );
};

export default SignUp;
