import React from 'react'
import { Route, Switch } from 'react-router'
import Home from 'containers/Home'

const routes = (
  <div>
    {/* <NavBar /> */}
    <Switch>
      <Route exact path="/" component={Home} />>
    </Switch>
  </div>
)

export default routes