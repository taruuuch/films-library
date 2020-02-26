import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export const useRoutes = () => (
    <Switch>
        <Route exact path="/">

        </Route>
        <Route path="/film/:id">

        </Route>
        <Route exact path="/film/new">

        </Route>
        <Redirect to="/" />
    </Switch>
)
