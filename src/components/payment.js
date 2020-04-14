import React, { Fragment } from 'react'
import PageTitle from './pageTitle'
import card from '../assets/images/ecommerce/card.png'
import masterCard from '../assets/images/ecommerce/mastercard.png'
import visa from '../assets/images/ecommerce/visa.png'
import paypal from '../assets/images/ecommerce/paypal.png'

const Payment = () => {
  return (
    <Fragment>
      <div>
        <h3>Payment Details</h3>
      </div>
      <div className="container-fluid credit-card">
        <div className="row">
          {/* <!-- Individual column searching (text inputs) Starts--> */}
          <div className="col-xl-8">
            <div className="card height-equal">
              <div className="card-header">
                <h5>Credit card </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 text-center">
                    <img className="img-fluid" src={card} alt="" />
                  </div>
                  <div className="col-md-8">
                    <form className="theme-form mega-form">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Card number"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="form-group">
                        <input className="form-control" type="date" />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Full Name"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Individual column searching (text inputs) Ends-->
              <!-- Debit Card Starts--> */}
          <div className="col-xl-4 col-lg-6 debit-card">
            <div className="card height-equal">
              <div className="card-header">
                <h5>Debit card </h5>
              </div>
              <div className="card-body">
                <form className="theme-form e-commerce-form row">
                  <div className="form-group col-6 p-r-0">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Full name here"
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Card number"
                    />
                  </div>
                  <div className="form-group col-6 p-r-0">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="CVV number"
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="CVC"
                    />
                  </div>
                  <div className="col-12">
                    <label className="col-form-label p-t-0">
                      Expiration Date
                    </label>
                  </div>
                  <div className="form-group col-6 p-r-0">
                    <select className="form-control" size="1">
                      <option>Select Month</option>
                      <option>Jan</option>
                      <option>Fab</option>
                      <option>March</option>
                      <option>April</option>
                    </select>
                  </div>
                  <div className="form-group col-6">
                    <select className="form-control" size="1">
                      <option>Select Year</option>
                      <option>2015</option>
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary-gradien btn-block"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- Debit Card Ends-->
              <!-- COD Starts--> */}
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h5>COD</h5>
              </div>
              <div className="card-body">
                <form className="theme-form row">
                  <div className="form-group col-6 p-r-0">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="form-group col-6 p-r-0">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Pincode"
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div className="form-group col-6 p-r-0">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="State"
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="City"
                    />
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Address"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary-gradien btn-block"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- COD Ends-->
              <!-- EMI Starts--> */}
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h5>EMI</h5>
              </div>
              <div className="card-body">
                <form className="theme-form row">
                  <div className="form-group col-6 p-r-0">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group col-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="form-group col-6 p-r-0">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Pincode"
                    />
                  </div>
                  <div className="form-group col-6">
                    <select className="form-control" size="1">
                      <option>Bank Name</option>
                      <option>SBI</option>
                      <option>ICICI</option>
                      <option>KOTAK</option>
                      <option>BOB</option>
                    </select>
                  </div>
                  <div className="form-group col-12">
                    <select className="form-control" size="1">
                      <option>Select Card</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group col-12">
                    <select className="form-control" size="1">
                      <option>Select Duration</option>
                      <option>2015-2016</option>
                      <option>2016-2017</option>
                      <option>2017-2018</option>
                      <option>2018-2019</option>
                    </select>
                  </div>
                  <div className="form-group col-12">
                    <ul className="payment-opt">
                      <li>
                        <img src={masterCard} alt="" />
                      </li>
                      <li>
                        <img src={visa} alt="" />
                      </li>
                      <li>
                        <img src={paypal} alt="" />
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary-gradien btn-block"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- EMI Ends-->
              <!-- EMI Starts--> */}
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h5>Net Banking</h5>
              </div>
              <div className="card-body">
                <form className="theme-form row">
                  <div className="form-group col-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="AC Holder name"
                    />
                  </div>
                  <div className="form-group col-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Account number"
                    />
                  </div>
                  <div className="form-group col-6 p-r-0">
                    <select className="form-control" size="1">
                      <option>Select Bank</option>
                      <option>SBI</option>
                      <option>ICICI</option>
                      <option>KOTAK</option>
                      <option>BOB</option>
                    </select>
                  </div>
                  <div className="form-group col-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="ICFC code"
                    />
                  </div>
                  <div className="form-group col-12">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div className="form-group col-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Other Details"
                    />
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary-gradien btn-block"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- EMI Ends--> */}
        </div>
      </div>
    </Fragment>
  )
}

export default Payment
