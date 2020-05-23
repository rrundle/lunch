import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.scss'
import SvgSpinner from './components/svg-spinner'

// Signup Components
import UserIsAdmin from './auth/userIsAdmin'
import Welcome from './auth/welcome'

const SignupRoutes = () => {
  const [verifiedSignup, setVerifiedSignup] = useState(false)
  const [checkingSignupStatus, setCheckingSignupStatus] = useState(true)
  console.log('checkingSignupStatus: ', checkingSignupStatus)
  console.log('verifiedSignup: ', verifiedSignup)

  useEffect(() => {
    checkSignupStatus()
    // only want to run this on mount
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const checkSignupStatus = async () => {
    const signupCookie = Cookies.get('signup-process')
    console.log('signupCookie: ', signupCookie)
    if (!signupCookie) {
      setVerifiedSignup(false)
      return setCheckingSignupStatus(false)
    }
    // user is rightfully in the signup process
    setVerifiedSignup(true)
    return setCheckingSignupStatus(false)
  }

  return (
    <>
      {checkingSignupStatus ? (
        <SvgSpinner />
      ) : verifiedSignup ? (
        <>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/signup/is-admin`}
            component={UserIsAdmin}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/signup/welcome`}
            component={Welcome}
          />
        </>
      ) : (
        <Redirect to={`${process.env.PUBLIC_URL}/new/signup`} />
      )}
    </>
  )
}

export default SignupRoutes
