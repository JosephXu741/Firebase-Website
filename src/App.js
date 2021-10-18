import React from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"
import Landing from "./patterns/views/Landing.js"
import MoreProjects from "./patterns/views/MoreProjects.js";
import RevealButton from "./patterns/atoms/RevealButton.js";

import { ScrollToTop } from "./helpers/helpers.js";


function App() {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route exact path="/more-projects">
                    <MoreProjects />
                </Route>
                <Route exact path="/test">
                    <RevealButton/>
                </Route>
                <Route path="/">
                    <Landing /> 
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
