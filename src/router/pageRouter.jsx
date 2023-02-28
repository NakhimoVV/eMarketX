import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MainPage from '../components/pages/layouts/main'

const PageRouter = () => {
    return (
        <Switch>
            <Route path="/" exact component={MainPage} />
            <Redirect to="/" />
        </Switch>
    )
}

export default PageRouter
