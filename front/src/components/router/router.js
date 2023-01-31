import React from "react";

import { BrowserRouter as Router,
 	 Route,
  	 Switch,} from "react-router-dom";

import Login from "../login/login"

export default function AppRouter(){
  return(
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login}/>
      </Switch>
    </Router>
  )
}
