import React, { Component, Fragment } from 'react'
import { addToCart } from '../../../actions/ecommerce.actions'
import { connect } from 'react-redux'
import { getCartTotal } from '../../../services/index'
import ReactToPrint from 'react-to-print'
import paypal from '../../../assets/images/other-images/paypal.png'
import Breadcrumb from '../../common/breadcrumb'
import logo from '../../../assets/images/other-images/logo-login.png'
import user from '../../../assets/images/user/1.jpg'

class Invoice extends Component {
  render() {
    const { cart, symbol } = this.props.data

    return (
      <div>
        <Breadcrumb title="Invoice" parent="Ecommerce" />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="invoice">
                    <div>
                      <div>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="media">
                              <div className="media-left">
                                <img
                                  className="media-object img-60"
                                  src={logo}
                                  alt=""
                                />
                              </div>
                              <div className="media-body m-l-20">
                                <h4 className="media-heading">Endless</h4>
                                <p>
                                  hello@endless.in
                                  <br />
                                  <span className="digits">289-335-6503</span>
                                </p>
                              </div>
                            </div>
                            {/* <!-- End Info--> */}
                          </div>
                          <div className="col-sm-6">
                            <div className="text-md-right">
                              <h3>
                                Invoice #
                                <span className="digits counter">1069</span>
                              </h3>
                              <p>
                                Issued: May
                                <span className="digits"> 27, 2015</span>
                                <br /> Payment Due: June{' '}
                                <span className="digits">27, 2015</span>
                              </p>
                            </div>
                            {/* <!-- End Title--> */}
                          </div>
                        </div>
                      </div>
                      <hr />
                      {/* <!-- End InvoiceTop--> */}
                      <div className="row">
                        <div className="col-md-4">
                          <div className="media">
                            <div className="media-left">
                              <img
                                className="media-object rounded-circle img-60"
                                src={user}
                                alt=""
                              />
                            </div>
                            <div className="media-body m-l-20">
                              <h4 className="media-heading">Johan Deo</h4>
                              <p>
                                JohanDeo@gmail.com
                                <br />
                                <span className="digits">555-555-5555</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="text-md-right" id="project">
                            <h6>Project Description</h6>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.It is a long established
                              fact that a reader will be distracted by the
                              readable content of a page when looking at its
                              layout.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Invoice Mid--> */}
                      <div>
                        <div
                          className="table-responsive invoice-table"
                          id="table"
                        >
                          <table className="table table-bordered table-striped">
                            <tbody>
                              <tr>
                                <td className="item">
                                  <h6 className="p-2 mb-0">Product Name</h6>
                                </td>
                                <td className="quantity">
                                  <h6 className="p-2 mb-0">Quantity</h6>
                                </td>
                                <td className="Rate">
                                  <h6 className="p-2 mb-0">Price</h6>
                                </td>
                                <td className="subtotal">
                                  <h6 className="p-2 mb-0">Sub-total</h6>
                                </td>
                              </tr>
                              {cart.map((item, index) => {
                                return (
                                  <tr key={index}>
                                    <td>
                                      <label>{item.name}</label>
                                    </td>
                                    <td>
                                      <p className="itemtext digits">
                                        {item.qty}
                                      </p>
                                    </td>
                                    <td>
                                      <p className="itemtext digits">
                                        {symbol}
                                        {item.price}
                                      </p>
                                    </td>
                                  </tr>
                                )
                              })}
                              <tr>
                                <td className="payment digits">
                                  <p className="itemtext digits">
                                    {symbol}
                                    {getCartTotal(cart)}
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* <!-- End Table--> */}
                        <div className="row">
                          <div className="col-md-8">
                            <div>
                              <p className="legal">
                                <strong>Thank you for your business!</strong> 
                                Payment is expected within 31 days; please
                                process this invoice within that time. There
                                will be a 5% interest charge per month on late
                                invoices.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <form className="text-right">
                              <input
                                type="image"
                                src={paypal}
                                name="submit"
                                alt="PayPal - The safer, easier way to pay online!"
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End InvoiceBot--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class PrintComponent extends Component {
  renderLink = () => {
    this.props.history.push(`${process.env.PUBLIC_URL}/ecommerce/checkout`)
  }
  render() {
    return (
      <Fragment>
        <Invoice
          data={this.props.data}
          ref={(el) => (this.componentRef = el)}
        />
        <div className="col-sm-12 text-center mt-3">
          <ReactToPrint
            trigger={() => (
              <button className="btn btn btn-primary mr-2" type="button">
                Print
              </button>
            )}
            content={() => this.componentRef}
          />
          <button
            className="btn btn-secondary"
            type="button"
            onClick={this.renderLink}
          >
            Cancel
          </button>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ data }) => {
  return { data }
}

export default connect(mapStateToProps, { addToCart })(PrintComponent)
