import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../../common/breadcrumb'
import { connect } from 'react-redux'
import Tablet from './tabset'
import { getSingleItem, addToCart } from '../../../../actions/ecommerce.actions'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Ratings from 'react-ratings-declarative'

class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
      nav1: null,
      nav2: null,
    }
  }

  componentWillMount() {
    this.props.getSingleItem(this.props.match.params.id)
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }

  addcart = (product, qty) => {
    this.props.addToCart(product, qty)
    this.props.history.push(
      `${process.env.PUBLIC_URL}/ecommerce/cart/${product.id}`,
    )
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating,
    })
  }

  buyProduct = (product, qty) => {
    this.props.addToCart(product, qty)
    this.props.history.push(
      `${process.env.PUBLIC_URL}/ecommerce/checkout/${product}`,
    )
  }

  render() {
    const { quantity } = this.state
    const { singleItem, symbol } = this.props

    return (
      <Fragment>
        <Breadcrumb title="Product Detail" parent="Ecommerce" />
        <div className="container-fluid">
          <div className="card">
            <div className="row product-page-main">
              <div className="col-xl-4">
                <Slider
                  asNavFor={this.state.nav2}
                  ref={(slider) => (this.slider1 = slider)}
                  className="product-slider"
                >
                  {singleItem.variants ? (
                    singleItem.variants.map((item, i) => {
                      return (
                        <div className="item" key={i}>
                          <img src={item.images} alt="" className="img-fluid" />
                        </div>
                      )
                    })
                  ) : (
                    <img src={singleItem.img} alt="" className="img-fluid" />
                  )}
                </Slider>

                <Slider
                  asNavFor={this.state.nav1}
                  ref={(slider) => (this.slider2 = slider)}
                  slidesToShow={4}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  infinite={true}
                  className="small-slick"
                >
                  {singleItem.variants
                    ? singleItem.variants.map((item, i) => {
                        return (
                          <div className="item" key={i}>
                            <img
                              src={item.images}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        )
                      })
                    : ''}
                </Slider>
              </div>
              <div className="col-xl-8">
                <div className="product-page-details">
                  <h5>{singleItem.name}</h5>
                  <div className="d-flex">
                    <Ratings
                      rating={this.state.rating}
                      widgetRatedColors="blue"
                      changeRating={this.changeRating}
                    >
                      <Ratings.Widget />
                      <Ratings.Widget />
                      <Ratings.Widget />
                      <Ratings.Widget />
                      <Ratings.Widget />
                    </Ratings>
                    <span>(250 review)</span>
                  </div>
                </div>
                <hr />
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,It is a long established fact
                  that a reader will be distracted by the readable content of a
                  page when looking at its layout. The point of using Lorem
                  Ipsum is that it has a more-or-less normal distribution of
                  letters
                </p>
                <div className="product-price digits">
                  <del>
                    {symbol}
                    {singleItem.discountPrice}{' '}
                  </del>
                  {symbol}
                  {singleItem.price}
                </div>
                <hr />
                <div>
                  <table className="product-page-width">
                    <tbody>
                      <tr>
                        <td>Brand :</td>
                        <td>{singleItem.tags}</td>
                      </tr>
                      <tr>
                        <td>Availability :</td>
                        <td className="in-stock">{singleItem.stock}</td>
                        <td
                          className="out-of-stock"
                          style={{ display: 'none' }}
                        >
                          Out Of stock
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr />
                <ul className="product-color m-t-15">
                  <li className="bg-primary"></li>
                  <li className="bg-secondary"></li>
                  <li className="bg-success"></li>
                  <li className="bg-info"></li>
                  <li className="bg-warning"></li>
                </ul>
                <div className="m-t-15">
                  <button
                    className="btn btn-primary-gradien m-r-10"
                    type="button"
                    data-original-title="btn btn-info-gradien"
                    title=""
                    onClick={() => this.addcart(singleItem, quantity)}
                  >
                    Add To Cart
                  </button>
                  <button
                    className="btn btn-success-gradien m-r-10"
                    type="button"
                    data-original-title="btn btn-info-gradien"
                    title=""
                    onClick={() => this.buyProduct(singleItem, quantity)}
                  >
                    Buy Now
                  </button>
                  <Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}>
                    <button
                      className="btn btn-secondary-gradien"
                      type="button"
                      data-original-title="btn btn-info-gradien"
                      title=""
                    >
                      continue shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Tablet />
        </div>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  products: state.data.productItems,
  singleItem: state.data.singleItem,
  symbol: state.data.symbol,
})

export default connect(mapStateToProps, { getSingleItem, addToCart })(
  ProductDetail,
)
