import React from "react";
import { Switch, Route } from "react-router";
import SignUp from "../../components/SignUp";

import "./LandingPage.scss";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="hero">
        <div className="hero__content">
          <h2 className="hero__content__title">Simple Time Tracking.</h2>
          <p className="hero__content__body">
            Turn yourself into productivity and make smarter choice.
          </p>
        </div>
      </div>
      <div className="auth-form">
        <Switch>
          <Route>
            <SignUp />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default LandingPage;
