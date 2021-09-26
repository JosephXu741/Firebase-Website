import React from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"
import Landing from "./patterns/views/Landing.js"
import MoreProjects from "./patterns/views/MoreProjects.js";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/more-projects">
                    <MoreProjects />
                </Route>
                <Route path="/">
                    <Landing /> 
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
