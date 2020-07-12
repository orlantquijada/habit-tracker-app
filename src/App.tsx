import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "screens/LandingPage";

import "./App.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <LandingPage />
      </div>
    </Router>
  );
};

export default App;
