import React, { useState } from 'react'

import PaymentForm from '../components/payment/PaymentForm'
import Button from '../components/button'

const SignupPayment = ({ addCompanyInfo }) => {
  const [working, setAppWorking] = useState(true)

  const noClick = () => {
    console.log('no problem lets move on')
  }

  return (
    <>
      <h4>Save your payment so you don't have to do it later</h4>
      <PaymentForm />
      <Button label="I'll do this later" onClick={() => noClick()} />
    </>
  )
}

// const mapDispatchToProps = (dispatch) => ({
//   addCompanyInfo: (value) => dispatch({ type: COMPANY_SIGNUP_INFO, value }),
// })

// export default connect(null, mapDispatchToProps)(SignupPayment)
export default SignupPayment
