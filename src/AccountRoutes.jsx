import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.scss'
import App from './components/app'
import initializeAuth from './actions/initializeAuth'

// Import custom Components
import Default from './components/dashboard/defaultCompo/default'
import ResetPwd from './pages/resetPwd'
import Payment from './components/payment'
import Pricing from './components/price/pricing'
import SvgSpinner from './components/svg-spinner'
import DataTableComponent from './components/tables/dataTableComponent'
import UserEdit from './components/userEdit'

const AccountRoutes = ({ auth, authData, initializeAuth }) => {
  const [loggedIn, setLoggedInState] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(true)
  const [redirectNoAuth, setRedirectNoAuth] = useState(false)

  console.log('auth: ', auth)
  console.log('initializeAuth: ', initializeAuth)

  useEffect(() => {
    checkAuth()
    // only want to run this on mount
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const checkAuth = async () => {
    setCheckingAuth(true)
    // user is already logged in
    if (auth && Object.keys(authData).length) {
      setLoggedInState(true)
      return setCheckingAuth(false)
    }
    // no auth in state, check if user has jwt
    const authStatus = await initializeAuth()
    console.log('authStatus: ', authStatus)
    if (!authStatus.authed) {
      console.log('no auth')
      setRedirectNoAuth(true)
      setLoggedInState(false)
      return setCheckingAuth(false)
    }
    Cookies.set('lunch-session', authStatus.token)
    setLoggedInState(true)
    return setCheckingAuth(false)
  }

  return (
    <>
      {checkingAuth ? (
        <>
          <SvgSpinner show />
        </>
      ) : (
        <>
          {redirectNoAuth ? (
            <Route
              path={`${process.env.PUBLIC_URL}/login`}
              component={ResetPwd}
            />
          ) : loggedIn ? (
            <>
              <App>
                {/* dashboard menu */}
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/`}
                  render={() => (
                    <Redirect
                      to={`${process.env.PUBLIC_URL}/dashboard/default`}
                    />
                  )}
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
            </>
          ) : (
            <Redirect to={`${process.env.PUBLIC_URL}/login`} />
          )}
        </>
      )}
    </>
  )
}

const mapStateToProps = ({ auth = false, authData = {} }) => ({
  auth,
  authData,
})

export default connect(mapStateToProps, { initializeAuth })(AccountRoutes)
