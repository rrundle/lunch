import React, { useEffect, useState } from 'react'
import qs from 'qs'
import { baseUri } from '../config'

const SlackAuth = () => {
  console.log('baseUri: ', baseUri)
  const [working, setWorking] = useState(true)

  useEffect(() => {
    const authUser = async (parsed) => {
      console.log('in auth user: ', parsed)
      const { code } = parsed

      const options = {
        method: 'POST',
        body: JSON.stringify({
          code,
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
        setWorking(false)
      } catch (err) {
        setWorking(false)
        console.error(err)
      }
    }

    const query = window.location.search.substring(1)
    console.log('query: ', query)
    const parsed = qs.parse(query)
    console.log('parsed: ', parsed)
    if (parsed) authUser(parsed)
  }, [])

  return working ? <div>Doing Auth...</div> : <div>DONE!</div>
}

export default SlackAuth
