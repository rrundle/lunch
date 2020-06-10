import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import qs from 'qs'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

import { baseUri, cookieExpiration } from '../config'
import SvgSpinner from '../components/svg-spinner'
import { ADD_USER, SET_AUTH } from '../constants/actionTypes'

const SlackAuth = ({ addUser, setAuth }) => {
  console.log('baseUri: ', baseUri)
  const [working, setWorking] = useState(true)
  const [redirect, setRedirect] = useState({ status: false, to: '' })

  useEffect(() => {
    const authUser = async (parsed) => {
      console.log('in auth user: ', parsed)
      const { code, state } = parsed
      // invalid query params
      if (!code && !state) {
        setRedirect({
          status: true,
          to: '/signup/new',
        })
      }

      const options = {
        method: 'POST',
        body: JSON.stringify({
          code,
          state,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }

      try {
        const response = await fetch(`${baseUri}/oauth`, options)
        console.log('response: ', response)
        if (!response.ok) throw new Error('No slack Auth')
        const body = await response.json()
        console.log('body: ', body)
        if (body.status === 403) throw new Error('Stripe Error')
        if (state === 'login.signup') {
          console.log('should have jwt now, set cookie and redirect')
          Cookies.set('lunch-session', body.token, {
            expires: cookieExpiration,
          })
          console.log('first parse the jwt')
          const decodedJwt = jwtDecode(body.token)
          console.log('decodedJwt: ', decodedJwt)
          addUser({ token: body.token, ...decodedJwt })
          setAuth(true)
          setWorking(false)
          setRedirect({
            status: true,
            to: '/signup/welcome',
          })
        } else {
          // initial signup, get user permissions
          window.location =
            'https://slack.com/oauth/authorize?scope=identity.basic,identity.avatar,identity.email,&client_id=224182028598.1018140415783&state=login.signup'
        }
      } catch (err) {
        // TODO show error toast
        setWorking(false)
        setRedirect({
          status: true,
          to: '/signup/new',
        })
        console.error(err)
      }
    }

    const query = window.location.search.substring(1)
    console.log('query: ', query)
    const parsed = qs.parse(query)
    console.log('parsed: ', parsed)
    if (Object.keys(parsed).length) {
      authUser(parsed)
    } else {
      console.log('no query')
      setRedirect({
        status: true,
        to: '/signup/new',
      })
    }
  }, [addUser, setAuth])

  return (
    <>
      {working ? (
        <SvgSpinner show />
      ) : (
        redirect.status && <Redirect to={redirect.to} />
      )}
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (value) => dispatch({ type: ADD_USER, value }),
  setAuth: (value) => dispatch({ type: SET_AUTH, value }),
})

export default connect(null, mapDispatchToProps)(SlackAuth)
