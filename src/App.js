import React from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"
import Landing from "./patterns/views/Landing.js"
import MoreProjects from "./patterns/views/MoreProjects.js";
import ProjectDetail from "./patterns/views/ProjectDetail.js";

import { ScrollToTop } from "./helpers/helpers.js";


function App() {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route exact path="/more-projects" component={MoreProjects} />
                <Route exact path="/:id" component={ProjectDetail} />
                <Route path="/" component={Landing} />
            </Switch>
        </Router>
    );
}

export default App;
