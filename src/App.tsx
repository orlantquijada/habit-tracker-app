import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LandingPage from "screens/LandingPage";

import "./App.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <LandingPage />
        <Switch>
          <Route path="/">
            <Redirect to="/signup" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
