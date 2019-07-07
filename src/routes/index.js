import React from 'react'
import { Route, Switch } from 'react-router'
import NavBar from 'components/NavBar';
import Home from 'containers/Home';
import Login from 'containers/Login';
import DashboardHome from 'containers/DashboardHome';
import StreamClient from 'containers/StreamClient';
import PrivateRoute from 'components/PrivateRoute';

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <PrivateRoute path="/dashboard" component={ DashboardHome } />
      {/* <Route exact path="/skybot-command" */}
      <Route exact path="/stream-client/:userId" component={ StreamClient } />
    </Switch>
  </div>
)

export default routes