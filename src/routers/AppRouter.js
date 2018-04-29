import React, { createElement } from 'react'
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import TeamListPage from '../components/TeamListPage'
import TeamPage from '../components/TeamPage'
import EventPage from '../components/EventPage'


export const history = createHistory()

const AppRouter = () => (
  <Router history={history} >
  <div>    
    <Switch>  
      <PublicRoute path="/" component={LoginPage} exact={true} />
      <PrivateRoute path="/dashboard" component={DashboardPage} />
      <PrivateRoute path="/teams" component={TeamListPage} exact={true} />
      <PrivateRoute path="/teams/:team" component={TeamPage} />
      <PrivateRoute path="/events/:event" component={EventPage} />
      <Route component={NotFoundPage} />
    </Switch>     
  </div>   
  </Router>

)

export default AppRouter