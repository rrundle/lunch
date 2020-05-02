import Cookies from 'js-cookie'

import { baseUri } from '../config'

const initializeAuth = () => async (dispatch, getState) => {
  const state = getState()
  console.log('state: ', state)
  if (state.auth)
    return {
      authed: true,
      message: 'already authed',
    }
  const authToken = Cookies.get('lunch-session')
  console.log('authToken: ', authToken)
  if (!authToken) return { authed: false, message: 'no token to auth with' }

  const options = {
    method: 'PUT',
    body: JSON.stringify({
      authToken,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await fetch(`${baseUri}/check-auth`, options)
    console.log('response: ', response)
    if (!response.ok) throw new Error('Failed initializeAuth')
    const body = await response.json()
    console.log('body: ', body)
    if (!body.authed) throw new Error('auth failed')
    return body
  } catch (err) {
    console.error(err)
    return {
      authed: false,
      message: err,
    }
  }
}

export default initializeAuth
