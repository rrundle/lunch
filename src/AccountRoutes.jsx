import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.scss'
import App from './components/app'
import initializeAuth from './actions/initializeAuth'
import { cookieExpiration } from './config'

// Import custom Components
import Default from './components/dashboard/defaultCompo/default'
import Payment from './components/payment'
import Pricing from './components/price/pricing'
import SvgSpinner from './components/svg-spinner'
import DataTableComponent from './components/tables/dataTableComponent'
import UserEdit from './components/userEdit'

const AccountRoutes = ({ auth, authData, initializeAuth }) => {
  console.log('HELLO????')
  const [loggedIn, setLoggedInState] = useState(true) // TODO CHANGE!!
  const [checkingAuth, setCheckingAuth] = useState(false) // TODO CHANGE!!

  console.log('auth: ', auth)

  useEffect(() => {
    // checkAuth()
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
      setLoggedInState(false)
      return setCheckingAuth(false)
    }
    Cookies.set('lunch-session', authStatus.token, {
      expires: cookieExpiration,
    })
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
          {loggedIn ? (
            <>
              <App>
                {/* dashboard menu */}
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/app`}
                  render={() => (
                    <Redirect
                      to={`${process.env.PUBLIC_URL}/app/dashboard/default`}
                    />
                  )}
                />
                {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={Default} /> */}
                <Route
                  path={`${process.env.PUBLIC_URL}/app/dashboard/default`}
                  component={Default}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/app/table/datatable`}
                  component={DataTableComponent}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/app/users/userEdit`}
                  component={UserEdit}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/app/account/payment`}
                  component={Payment}
                />

                {/* Pricing */}
                <Route
                  path={`${process.env.PUBLIC_URL}/app/price/pricing`}
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
