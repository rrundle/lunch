import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../common/breadcrumb'
import { connect } from 'react-redux'
import { getCartTotal } from '../../../services/index'
import {
  removeFromCart,
  decrementQty,
} from '../../../actions/ecommerce.actions'
import emptyCart from '../../../assets/images/icon-empty-cart.png'
import { useSelector, useDispatch } from 'react-redux'
import { XCircle } from 'react-feather'

const AddToCart = ({ decrementQty, removeFromCart }) => {
  const cart = useSelector((content) => content.data.cart)
  const symbol = useSelector((content) => content.data.symbol)
  const dispatch = useDispatch()
  const incrementQty = (product, quantity) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })
  }

  return (
    <Fragment>
      <Breadcrumb title="Add To Cart" parent="Ecommerce" />
      {cart ? (
        <section className="cart-section section-b-space">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5>Cart</h5>
                  </div>
                  <div className="card-body cart">
                    <div className="order-history table-responsive wishlist">
                      <table className="table table-bordernone">
                        <thead>
                          <tr>
                            <th>Prdouct</th>
                            <th>Prdouct Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                            <th>Total</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr className="title-orders">
                            <td colSpan="12">New Orders</td>
                          </tr>
                          {cart.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <img
                                    className="img-fluid img-60"
                                    src={item.img}
                                    alt=""
                                  />
                                </td>
                                <td>
                                  <div className="product-name">
                                    <a href="#javascript">{item.category}</a>
                                  </div>
                                </td>
                                <td>
                                  {symbol}
                                  {item.price}
                                </td>
                                <td>
                                  <fieldset className="qty-box">
                                    <div className="input-group">
                                      <span className="input-group-prepend">
                                        <button
                                          type="button"
                                          className="btn quantity-left-minus"
                                          onClick={() => decrementQty(item.id)}
                                          data-type="minus"
                                          data-field=""
                                        >
                                          <i className="fa fa-angle-left"></i>
                                        </button>
                                      </span>
                                      <input
                                        type="text"
                                        name="quantity"
                                        value={item.qty}
                                        readOnly={true}
                                        className="form-control input-number"
                                      />
                                      <span className="input-group-append">
                                        <button
                                          type="button"
                                          className="btn quantity-right-plus"
                                          onClick={() => incrementQty(item, 1)}
                                          data-type="plus"
                                          data-field=""
                                        >
                                          <i className="fa fa-angle-right"></i>
                                        </button>
                                      </span>
                                    </div>
                                  </fieldset>
                                </td>
                                <td>
                                  <a
                                    href="#javascript"
                                    onClick={() => removeFromCart(item)}
                                  >
                                    <XCircle />
                                  </a>
                                </td>
                                <td>
                                  {symbol} {item.price * item.qty}
                                </td>
                              </tr>
                            )
                          })}
                          <tr>
                            <td colSpan="5" className="total-amount">
                              <h6 className="mb-0 f-w-600">Total Price :</h6>
                            </td>
                            <td>
                              <span>
                                {symbol} {getCartTotal(cart)}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="5">
                              <Link
                                className="btn btn-primary cart-btn-transform"
                                to={`${process.env.PUBLIC_URL}/ecommerce/product`}
                              >
                                continue shopping
                              </Link>
                            </td>
                            <td>
                              <Link
                                className="btn btn-primary cart-btn-transform"
                                to={`${process.env.PUBLIC_URL}/ecommerce/checkout/${cart.id}`}
                              >
                                check out
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="cart-section section-b-space">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div>
                  <div className="col-sm-12 empty-cart-cls text-center">
                    <img src={emptyCart} className="img-fluid mb-4" alt="" />
                    <h3>
                      <strong>Your Cart is Empty</strong>
                    </h3>
                    <h4>Explore more shortlist some items.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, { removeFromCart, decrementQty })(
  AddToCart,
)
