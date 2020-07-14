import React from "react";
import { ReactComponent as RefreshIcon } from "assets/icons/refresh.svg";

import "./AuthForm.scss";

interface Props {
  loadingText: string;
  isLoading: boolean;
  submitBtnText: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  authLink: React.ReactNode;
}

const AuthForm: React.FC<Props> = ({
  isLoading,
  loadingText,
  submitBtnText,
  onSubmit,
  children,
  authLink,
}) => {
  return (
    <form
      action="#"
      method="post"
      className="auth-form"
      onSubmit={onSubmit}
      noValidate
    >
      <div className="form-fields">{children}</div>
      {isLoading && (
        <div className="loading-indicator">
          <RefreshIcon className="loading-indcator__icon" />
          <span className="loading-indicator__text">{loadingText}</span>
        </div>
      )}
      <button
        type="submit"
        className={isLoading ? "submit-btn submit-btn--disabled" : "submit-btn"}
        disabled={isLoading ? true : false}
      >
        {submitBtnText}
      </button>
      {authLink}
    </form>
  );
};

export default AuthForm;
