import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import qs from 'qs'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

import { baseUri, cookieExpiration } from '../config'
import SvgSpinner from '../components/svg-spinner'
import { ADD_USER, COMPANY_SIGNUP_INFO } from '../constants/actionTypes'

const SlackAuth = ({ addCompanyInfo, addUser }) => {
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
          to: '/signup',
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
        if (state === 'login.signup') {
          console.log('should have jwt now, set cookie and redirect')
          Cookies.set('lunch-session', body.token, {
            expires: cookieExpiration,
          })
          await addUser(body)
          setRedirect({
            status: true,
            to: '/welcome',
          })
        } else {
          await addCompanyInfo(body)
          setRedirect({
            status: true,
            to: '/is-admin',
          })
        }
        setWorking(false)
      } catch (err) {
        // TODO show error toast
        setRedirect({
          status: true,
          to: '/signup',
        })
        setWorking(false)
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
        to: '/signup',
      })
    }
  }, [addCompanyInfo, addUser])

  return (
    <>
      {working ? (
        <SvgSpinner show />
      ) : redirect.status ? (
        <Redirect to={redirect.to} />
      ) : (
        <div>UH OH PROBLEMO!</div>
      )}
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addCompanyInfo: (value) => dispatch({ type: COMPANY_SIGNUP_INFO, value }),
  addUser: (value) => dispatch({ type: ADD_USER, value }),
})

export default connect(null, mapDispatchToProps)(SlackAuth)
