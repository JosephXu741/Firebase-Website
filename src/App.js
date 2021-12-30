import React, { Suspense } from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"
import Loading from "./patterns/views/Loading"
import { ScrollToTop } from "./helpers/helpers.js";
import ProjectDetail from "./patterns/views/ProjectDetail"

const Landing = React.lazy(() => import("./patterns/views/Landing.js"))
const MoreProjects = React.lazy(() => import("./patterns/views/MoreProjects.js"))

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
