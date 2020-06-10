import React, { useState } from 'react'
import { connect } from 'react-redux'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Redirect } from 'react-router-dom'

import { baseUri, config } from '../../config'
import Button from '../button'

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      // iconColor: '#44454A',
      color: '#fff',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#44454A',
      },
    },
    invalid: {
      iconColor: '#BE915B',
      color: '#BE915B',
    },
  },
}

const CardField = ({ onChange }) => (
  <div className="FormRow">
    <CardElement options={CARD_OPTIONS} />
  </div>
)

const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => (
  <div className="FormRow">
    <label htmlFor={id} className="FormRowLabel">
      {label}
    </label>
    <input
      className="FormRowInput"
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </div>
)

const SubmitButton = ({ processing, error, children, disabled }) => (
  <button
    className={`SubmitButton ${error ? 'SubmitButton--error' : ''}`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? 'Processing...' : children}
  </button>
)

const ErrorMessage = ({ children }) => (
  <div className="ErrorMessage" role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {children}
  </div>
)

const ResetButton = ({ onClick }) => (
  <button type="button" className="ResetButton" onClick={onClick}>
    <svg width="32px" height="32px" viewBox="0 0 32 32">
      <path
        fill="#FFF"
        d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"
      />
    </svg>
  </button>
)

const PaymentForm = ({
  authData: {
    stripeId = '',
    teamId = '',
    status = '',
    trialPeriodStart = null,
  } = {},
}) => {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState(null)
  const [cardComplete, setCardComplete] = useState(false)
  const [subscriptionComplete, setSubscriptionComplete] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [billingDetails, setBillingDetails] = useState({
    email: '',
    phone: '',
    name: '',
  })
  const [redirect, setRedirect] = useState({ status: false, to: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('handling submit!: ', stripe)
    console.log('billingDetails: ', billingDetails)
    console.log('cardComplete: ', cardComplete)
    if (!stripe || !elements) return

    if (error) {
      elements.getElement('card').focus()
      return
    }

    if (cardComplete) {
      setProcessing(true)
    }

    const {
      error: createPaymentError,
      paymentMethod: paymentMethodValue,
    } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: billingDetails,
    })

    console.log('createPaymentError: ', createPaymentError)
    console.log('paymentMethodValue: ', paymentMethodValue)

    setProcessing(false)

    if (createPaymentError) {
      setError(createPaymentError)
    } else {
      setPaymentMethod(paymentMethodValue)
      try {
        createSubscription(paymentMethodValue.id)
      } catch (err) {
        console.log('err: ', err)
      }
    }
  }

  const createSubscription = async (paymentMethodId) => {
    try {
      const response = await fetch(`${baseUri}/payment/create-subscription`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          customerId: stripeId,
          paymentMethodId: paymentMethodId,
          priceId: config.get('stripeProductId'), // TODO should be in state fetch from stripe
          teamId,
          status,
          trialPeriodStart,
        }),
      })
      const result = await response.json()
      if (result.error) throw new Error(result)
      console.log('result!!: ', result)
      if (result.status === 'active') {
        setSubscriptionComplete(true)
      } else {
        /*
        // Some payment methods require a customer to be on session
        // to complete the payment process. Check the status of the
        // payment intent to handle these actions.
        .then(handlePaymentThatRequiresCustomerAction)
        // If attaching this card to a Customer object succeeds,
        // but attempts to charge the customer fail, you
        // get a requires_payment_method error.
        .then(handleRequiresPaymentMethod)
        // No more actions required. Provision your service for the user.
        .then(onSubscriptionComplete)
        */
      }
    } catch (err) {
      // An error has happened. Display the failure to the user here.
      // We utilize the HTML element we created.
      setError(err)
    }
  }

  const reset = () => {
    setError(null)
    setProcessing(false)
    setPaymentMethod(null)
    setBillingDetails({
      email: '',
      phone: '',
      name: '',
    })
  }

  const done = () => {
    setRedirect({
      status: true,
      to: '/app/dashboard/default',
    })
  }

  return subscriptionComplete ? (
    redirect.status ? (
      <Redirect to={redirect.to} />
    ) : (
      <div className="Result">
        <div className="ResultTitle" role="alert">
          Payment successful
        </div>
        <div className="ResultMessage">
          Your subscription id is: {paymentMethod.id}
        </div>
        <Button label="Done" onClick={done} />
      </div>
    )
  ) : (
    <form className="Form" onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
        <Field
          label="Name"
          id="name"
          type="text"
          placeholder="Jane Doe"
          required
          autoComplete="name"
          value={billingDetails.name}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, name: e.target.value })
          }}
        />
        <Field
          label="Email"
          id="email"
          type="email"
          placeholder="janedoe@gmail.com"
          required
          autoComplete="email"
          value={billingDetails.email}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, email: e.target.value })
          }}
        />
        <Field
          label="Phone"
          id="phone"
          type="tel"
          placeholder="(941) 555-0123"
          required
          autoComplete="tel"
          value={billingDetails.phone}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, phone: e.target.value })
          }}
        />
      </fieldset>
      <fieldset className="FormGroup">
        <CardField
          onChange={(e) => {
            setError(e.error)
            setCardComplete(e.complete)
          }}
        />
      </fieldset>
      {error && (
        <>
          <ErrorMessage>{error.message}</ErrorMessage>
          <ResetButton onClick={reset} />
        </>
      )}
      <SubmitButton processing={processing} error={error} disabled={!stripe}>
        Save
      </SubmitButton>
    </form>
  )
}

const mapStateToProps = ({ lunchPollAdmin: { authData = {} } = {} }) => ({
  authData,
})

export default connect(mapStateToProps)(PaymentForm)
