import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './index.scss'
import AccountRoutes from './AccountRoutes'
import SignupRoutes from './SignupRoutes'

// Import custom Components
import ForgetPwd from './pages/forgetPwd'
import ResetPwd from './pages/resetPwd'
import Signin from './auth/signin'
import Signup from './auth/signup'

// Auth
import SlackAuth from './auth/slackAuth'

const Router = () => (
  <Switch>
    <Route
      exact
      path={`${process.env.PUBLIC_URL}/slack-auth`}
      component={SlackAuth}
    />

    <SignupRoutes />

    <AccountRoutes />

    <Route path={`${process.env.PUBLIC_URL}/login`} component={Signin} />
    <Route path={`${process.env.PUBLIC_URL}/signup`} component={Signup} />
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

export default Router
