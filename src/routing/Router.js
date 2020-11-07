import React from 'react'
import {
    Switch,
    Route,
} from 'react-router-dom'
import SpecEditor from '../containers/SpecEditor'

const Router = () => {
    return (
        <Switch>
            <Route path="/" exact component={SpecEditor} />
        </Switch>
    )
}

export default Router;