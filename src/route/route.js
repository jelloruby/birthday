import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../component/Home'
import BirthDay from '../component/BirthDay'
import Gift from '../component/Gift'

function routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/birthday" component={BirthDay} />
                <Route exact path="/gift" component={Gift} />
            </Switch>
        </Router>
    )
}

export default routes
