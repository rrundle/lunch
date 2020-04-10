import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../common/breadcrumb'
import { connect } from 'react-redux'
import { removeFromWishlist } from '../../../actions/ecommerce.actions'
import { XCircle } from 'react-feather'
import { useSelector } from 'react-redux'

const WishlistComponent = ({ removeFromWishlist }) => {
  const list = useSelector((content) => content.WishlistApp.list)
  return (
    <Fragment>
      <Breadcrumb title="Wishlist" parent="Ecommerce" />
      {list ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>Wishlist</h5>
                </div>
                <div className="card-body">
                  <div className="order-history table-responsive wishlist">
                    <table className="table table-bordernone">
                      <thead>
                        <tr>
                          <th>Prdouct</th>
                          <th>Prdouct Name</th>
                          <th>Price</th>
                          <th>Availability</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="title-orders">
                          <td colSpan="12">New Orders</td>
                        </tr>
                        {list.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <img
                                  className="img-fluid img-60"
                                  src={item.img}
                                  alt="#"
                                />
                              </td>
                              <td>
                                <div className="product-name">
                                  <a href="#javascript">{item.name}</a>
                                </div>
                              </td>
                              <td>{item.price}</td>
                              <td>{item.stock}</td>
                              <td>
                                <a
                                  href="#javascript"
                                  onClick={() => removeFromWishlist(item)}
                                >
                                  <XCircle />
                                </a>
                              </td>
                            </tr>
                          )
                        })}
                        <tr>
                          <td colSpan="5">
                            <Link
                              className="btn btn-primary cart-btn-transform"
                              to={`${process.env.PUBLIC_URL}/ecommerce/product`}
                            >
                              continue shopping
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
      ) : (
        <div>
          <h1>Error</h1>
        </div>
      )}
    </Fragment>
  )
}

const mapStateToProps = ({ WishlistApp }) => {
  return { WishlistApp }
}

export default connect(mapStateToProps, { removeFromWishlist })(
  WishlistComponent,
)
