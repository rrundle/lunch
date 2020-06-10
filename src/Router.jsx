import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './index.scss'
import AccountRoutes from './AccountRoutes'
import SignupRoutes from './SignupRoutes'

// Import custom Components
import ForgetPwd from './pages/forgetPwd'
import ResetPwd from './pages/resetPwd'

// Auth
import SlackAuth from './auth/slackAuth'
import Signin from './auth/signin'

//Home Page
import HomePage from './homepage/HomePage'

const Router = () => {
  return (
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />

      <Route path={`${process.env.PUBLIC_URL}/app`} component={AccountRoutes} />

      <Route
        exact
        path={`${process.env.PUBLIC_URL}/slack-auth`}
        component={SlackAuth}
      />

      <Route
        path={`${process.env.PUBLIC_URL}/signup`}
        component={SignupRoutes}
      />

      <Route path={`${process.env.PUBLIC_URL}/login`} component={Signin} />

      <Route
        path={`${process.env.PUBLIC_URL}/pages/forgetPwd`}
        component={ForgetPwd}
      />
      <Route
        path={`${process.env.PUBLIC_URL}/pages/resetPwd`}
        component={ResetPwd}
      />
    </Switch>
  )
}

export default Router
