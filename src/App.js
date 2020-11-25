import React from "react";
import "./App.css";
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from './views/LandingPage';
import Login from './components/layout/Login';
import NotFound from './views/NotFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
export default App;
