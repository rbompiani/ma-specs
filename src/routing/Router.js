import React from 'react'
import {
    Switch,
    Route,
} from 'react-router-dom'
import ProjectEditor from '../containers/ProjectEditor'

const Router = () => {
    return (
        <Switch>
            <Route path="/" exact component={ProjectEditor} />
        </Switch>
    )
}

export default Router;