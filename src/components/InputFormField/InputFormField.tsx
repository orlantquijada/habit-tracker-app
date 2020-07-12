import React, { useState } from "react";
import { ReactComponent as ErrorIcon } from "assets/icons/error.svg";

import "./InputFormField.scss";

interface Props {
  inputType: string;
  name: string;
  id: string;
  labelText: string;
  errorMessage?: string;
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
  isLoading?: boolean;
  isRequired?: boolean;
}

const InputFormField: React.FC<Props> = ({
  inputType,
  name,
  id,
  labelText,
  errorMessage,
  inputRef,
  isLoading = false,
  isRequired = false,
}) => {
  const [value, setValue] = useState("");
  const [type, setType] = useState(inputType);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [errMessage, setErrMessage] = useState(errorMessage);

  const isPasswordType = inputType === "password";

  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    if (isRequired && val === "") {
      setErrMessage(`${labelText} is required`);
    } else {
      setErrMessage("");
    }

    setValue(event.target.value);
  };

  const spanOnClick = () => {
    setIsPasswordShown((prevIsPasswordShown) => !prevIsPasswordShown);
    setType(isPasswordShown ? "password" : "text");
  };

  return (
    <div className="field">
      <label htmlFor={id} className="field__label">
        {labelText}
      </label>
      <div className="field__input">
        <input
          disabled={isLoading}
          type={type}
          name={name}
          id={id}
          onChange={inputOnChange}
          value={value}
          ref={inputRef}
        />
        {isPasswordType && (
          <span className="show-password" onClick={spanOnClick}>
            {isPasswordShown ? "Hide" : "Show"}
          </span>
        )}
      </div>
      {errMessage && (
        <div className="error">
          <ErrorIcon />
          <span className="caption">{errMessage}</span>
        </div>
      )}
    </div>
  );
};

export default InputFormField;
