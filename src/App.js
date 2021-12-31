import React, { Suspense } from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"
import Loading from "./patterns/views/Loading"
import { ScrollToTop } from "./helpers/helpers.js";
import ProjectDetail from "./patterns/views/ProjectDetail"
import pMinDelay from 'p-min-delay';

const Landing = React.lazy(() => pMinDelay(import("./patterns/views/Landing.js"), 500))
const MoreProjects = React.lazy(() => pMinDelay(import("./patterns/views/MoreProjects.js"), 500))

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path="/more-projects" component={MoreProjects} />
                    <Route exact path="/test" component={Loading} />
                    <Route exact path="/:id" component={ProjectDetail} />
                    <Route path="/" component={Landing} />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
