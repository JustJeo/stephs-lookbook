import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import Home from "../pages/Home"
import Monochrome from "../pages/Monochrome"
import Cheetah from "../pages/Cheetah"
import Holidays from "../pages/Holidays"
import Shoes from "../pages/Shoes"

const Routes = (props) => (
  <Switch>
    <Route exact path = "/" component = { Home } />
    <Route exact path = "/monochrome" component = { Monochrome } />
    <Route exact path = "/cheetah" component = { Cheetah } />
    <Route exact path = "/holidays" component = { Holidays } />
    <Route exact path = "/shoes" component = { Shoes } />
  </Switch>
)

export default Routes