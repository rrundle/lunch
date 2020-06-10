import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'

import Button from '../components/button'
import SvgSpinner from '../components/svg-spinner'
import { baseUri } from '../config'
import { COMPANY_SIGNUP_INFO } from '../constants/actionTypes'

const Welcome = ({ addCompanyInfo }) => {
  const [working, setAppWorking] = useState(true)
  const [companyInfo, setCompanyInfo] = useState({})
  const [redirect, setRedirect] = useState({ status: false, to: '' })

  useEffect(() => {
    const getCompanyInfo = async () => {
      const userCookie = Cookies.get('lunch-session')
      console.log('userCookie: ', userCookie)
      const options = {
        method: 'POST',
        body: JSON.stringify({
          code: userCookie,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }

      try {
        const response = await fetch(`${baseUri}/company/get`, options)
        console.log('response: ', response)
        const body = await response.json()
        console.log('body: ', body)
        setCompanyInfo(body)
        addCompanyInfo(body)
      } catch (err) {
        console.log('err: ', err)
      } finally {
        setAppWorking(false)
      }
    }
    getCompanyInfo()
  }, [addCompanyInfo])

  const yesClick = async (e) => {
    const {
      access_token: accessToken = '',
      incoming_webhook: { channel_id: channelId = '' } = {},
    } = companyInfo
    console.log('say hello')
    console.log('accessToken: ', accessToken)
    console.log('channelId: ', channelId)
    // TODO WE NEED TO ADD THE APP AS A USER FIRST TO THE CHANNEL

    const options = {
      method: 'PUT',
      body: JSON.stringify({
        accessToken,
        channelId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const response = await fetch(`${baseUri}/welcome`, options)
      console.log('response: ', response)
      if (!response.ok) throw new Error('No slack Auth')
      const body = await response.json()
      console.log('body: ', body)
    } catch (err) {
      console.error(err)
    } finally {
      // TODO this should be moved to the try block? Dont think we want to progress them on any outcome
      setRedirect({
        status: true,
        to: '/signup/payment',
      })
    }
  }

  const noClick = () => {
    console.log('no problem lets move on')
    setRedirect({
      status: true,
      to: '/signup/payment',
    })
  }

  return working ? (
    <SvgSpinner show />
  ) : redirect.status ? (
    <Redirect to={redirect.to} />
  ) : (
    <>
      <div>Welcome!!</div>
      <div>Can we say hello to the team</div>
      <Button label="Yes" onClick={() => yesClick()} />
      <Button label="No" onClick={() => noClick()} />
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addCompanyInfo: (value) => dispatch({ type: COMPANY_SIGNUP_INFO, value }),
})

export default connect(null, mapDispatchToProps)(Welcome)
