import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import qs from 'qs'
import { Redirect } from 'react-router-dom'

import { baseUri } from '../config'
import Loader from '../components/loader'
import { ADD_USER } from '../constant/actionTypes'

const SlackAuth = ({ addUser }) => {
  console.log('baseUri: ', baseUri)
  const [working, setWorking] = useState(true)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    const authUser = async (parsed) => {
      console.log('in auth user: ', parsed)
      const { code, state } = parsed

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
        addUser(body)
        setWorking(false)
        setRedirect(true)
      } catch (err) {
        setWorking(false)
        console.error(err)
      }
    }

    const query = window.location.search.substring(1)
    console.log('query: ', query)
    const parsed = qs.parse(query)
    console.log('parsed: ', parsed)
    if (Object.keys(parsed).length) authUser(parsed)
  }, [addUser])

  return (
    <>
      <Loader show={working} />
      <>{redirect ? <Redirect to="/welcome" /> : <div>UH OH PROBLEMO!</div>}</>
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (value) => dispatch({ type: ADD_USER, value }),
})

export default connect(null, mapDispatchToProps)(SlackAuth)
