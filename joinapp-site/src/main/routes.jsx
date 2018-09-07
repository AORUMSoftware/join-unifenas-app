import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

// Features
import Calendar from '../features/calendar/calendar'
import About from '../features/about/about'
import Theme from '../features/theme/theme'
import Sponsors from '../features/sponsors/sponsors'

export default props => (
    <Router history={hashHistory}>
        <Route path = '/' component = { Calendar } />
        <Route path = '/calendar' component = { Calendar } />
        <Route path = '/about' component = { About } />
        <Route path = '/sponsors' component = { Sponsors } />
        <Route path = '/theme' component = { Theme } />
        <Redirect from = '*' to='/' />
    </Router>
)