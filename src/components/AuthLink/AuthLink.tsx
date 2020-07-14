import React from "react";
import { Link } from "react-router-dom";

import "./AuthLink.scss";

interface Props {
  labelText: string;
  linkText: string;
  link: string;
}

const AuthLink: React.FC<Props> = ({ labelText, linkText, link }) => {
  return (
    <div>
      <span>{labelText}</span>{" "}
      <Link to={link} className="link">
        {linkText}
      </Link>
    </div>
  );
};

export default AuthLink;
