import React from 'react'
import { Route, Switch } from 'react-router'
import Home from 'containers/Home';
import Login from 'containers/Login';
import DashboardHome from 'containers/DashboardHome';
import StreamClient from 'containers/StreamClient';
import VoiceCommand from 'containers/VoiceCommand';
import PrivateRoute from 'components/PrivateRoute';
import Authentication from 'containers/Authentication';

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/authentication" component={ Authentication } />
      <PrivateRoute path="/dashboard" component={ DashboardHome } />
      <PrivateRoute path="/voice" component={ VoiceCommand } />
      <Route exact path="/stream-client/:userId" component={ StreamClient } />
    </Switch>
  </div>
)

export default routes