import React from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"
import Landing from "./patterns/views/Landing.js"
import MoreProjects from "./patterns/views/MoreProjects.js";
import ExpandAnimation from "./patterns/components/ExpandAnimation.js";

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
                    <div className="w-80 h-80 bg-red-100">
                        <ExpandAnimation />
                    </div>
                </Route>
                <Route path="/">
                    <Landing /> 
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
