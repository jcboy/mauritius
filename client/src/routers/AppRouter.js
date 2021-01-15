import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Home} from "../pages/home/home";
import ActivityList from "../pages/activities/ActivityList";
import Actualities from "../pages/actualities/Actualities";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/activities" component={ActivityList}/>
                    <Route to="/actualities" component={Actualities}/>
                </Switch>
            </div>
        </Router>
    )
}