import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Landing from "./pages/Landing.js"
import About from "./pages/About.js"

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/about">
          <About/>
        </Route>

        <Route path="/">
          <Landing />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
