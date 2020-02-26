import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Films } from './pages/Films'
import { FilmDetail } from './pages/FilmDetail'
import { CreateFilm } from './pages/CreateFilm'

export const useRoutes = () => (
    <Switch>
        <Route exact path="/">
            <Films />
        </Route>
        <Route exact path="/film/new">
            <CreateFilm />
        </Route>
        <Route path="/film/:id">
            <FilmDetail />
        </Route>
        <Redirect to="/" />
    </Switch>
)
