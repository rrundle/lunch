import React, { useEffect, useState, Fragment } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { ScrollContext } from 'react-router-scroll-4'
import * as serviceWorker from './serviceWorker'

// ** Import custom components for redux**
import { Provider } from 'react-redux'

import store from './store/index'
import App from './components/app'

// Import custom Components
import Default from './components/dashboard/defaultCompo/default'
import ForgetPwd from './pages/forgetPwd'
import ResetPwd from './pages/resetPwd'
import Signin from './auth/signin'
import Payment from './components/payment'
import Pricing from './components/price/pricing'
import Loader from './components/loader'
import DataTableComponent from './components/tables/dataTableComponent'
import UserEdit from './components/userEdit'

// Auth
import SlackAuth from './auth/slackAuth'
import Welcome from './auth/welcome'

//firebase Auth only then un-comment this current User code
function Root() {
  const [loggedIn, setLoggedInState] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(true)

  useEffect(() => {
    console.log('running auth check')
    setLoggedInState(true)
    setCheckingAuth(false)
    // setTimeout(() => {
    //   console.log('finished auth check');
    //   setLoggedInState(true)
    //   setCheckingAuth(false)
    // }, 2000)
  }, [])

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter basename={`/`}>
          <ScrollContext>
            <Switch>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/slack-auth`}
                component={SlackAuth}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/welcome`}
                component={Welcome}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/login`}
                component={Signin}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/pages/forgetPwd`}
                component={ForgetPwd}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/pages/resetPwd`}
                component={ResetPwd}
              />

              {/* NOTE :- If u want login with firebase only then uncomment this currentUser condition*/}
              {console.log('loggedIn?: ', loggedIn)}
              {checkingAuth ? (
                <Fragment>
                  <Loader show />
                </Fragment>
              ) : (
                <Fragment>
                  {loggedIn ? (
                    <Fragment>
                      <App>
                        {/* dashboard menu */}
                        <Route
                          exact
                          path={`${process.env.PUBLIC_URL}/`}
                          render={() => {
                            console.log('logged in render: ')
                            return (
                              <Redirect
                                to={`${process.env.PUBLIC_URL}/dashboard/default`}
                              />
                            )
                          }}
                        />
                        {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={Default} /> */}
                        <Route
                          path={`${process.env.PUBLIC_URL}/dashboard/default`}
                          component={Default}
                        />
                        <Route
                          path={`${process.env.PUBLIC_URL}/table/datatable`}
                          component={DataTableComponent}
                        />
                        <Route
                          path={`${process.env.PUBLIC_URL}/users/userEdit`}
                          component={UserEdit}
                        />
                        <Route
                          path={`${process.env.PUBLIC_URL}/ecommerce/payment`}
                          component={Payment}
                        />

                        {/* Pricing */}
                        <Route
                          path={`${process.env.PUBLIC_URL}/price/pricing`}
                          component={Pricing}
                        />
                      </App>
                    </Fragment>
                  ) : (
                    <Redirect to={`${process.env.PUBLIC_URL}/login`} />
                  )}
                </Fragment>
              )}
            </Switch>
          </ScrollContext>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.unregister()
