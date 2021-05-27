import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Landing from "./pages/Landing.js"
import About from "./pages/About.js"
import Login from "./pages/Login.js"
import {AuthProvider} from "./Auth"

function App() {
  return (
    <AuthProvider>
      <Router>
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Landing} />
      </Router>
    </AuthProvider>
  );
}

export default App;
