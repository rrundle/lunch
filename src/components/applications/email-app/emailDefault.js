import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Custom Import
import Email from './email'

const EmailDefault = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'GET_ALL_EMAILS' })
  })

  return (
    <Fragment>
      <Email />
    </Fragment>
  )
}

export default EmailDefault
