import React from "react";
import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Page from "./pages/Page";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Page />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
