import React, { Fragment } from 'react'
import Breadcrumb from '../../common/breadcrumb'
import one from '../../../assets/images/product/1.png'
import thirteen from '../../../assets/images/product/13.png'
import four from '../../../assets/images/product/4.png'
import ten from '../../../assets/images/product/10.png'
import twelve from '../../../assets/images/product/12.png'
import three from '../../../assets/images/product/3.png'
import two from '../../../assets/images/product/2.png'
import fifteen from '../../../assets/images/product/15.png'
import fourteen from '../../../assets/images/product/14.png'
import eleven from '../../../assets/images/product/11.png'

const History = () => {
  return (
    <Fragment>
      <Breadcrumb title="Order History" parent="Ecommerce" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Orders History</h5>
              </div>
              <div className="card-body">
                <div className="order-history table-responsive">
                  <table className="table table-bordernone">
                    <thead>
                      <tr>
                        <th scope="col">Prdouct</th>
                        <th scope="col">Prdouct name</th>
                        <th scope="col">Size</th>
                        <th scope="col">Color</th>
                        <th scope="col">Article number</th>
                        <th scope="col">Units</th>
                        <th scope="col">Price</th>
                        <th scope="col">
                          <i className="fa fa-angle-down"></i>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="title-orders">
                        <td>New Orders</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <img className="img-fluid img-60" src={one} alt="#" />
                        </td>
                        <td>
                          <div className="product-name">
                            <a href="#javascript">Long Top</a>
                            <div className="order-process">
                              <span className="order-process-circle"></span>{' '}
                              Processing
                            </div>
                          </div>
                        </td>
                        <td>M</td>
                        <td>Lavander</td>
                        <td>4215738</td>
                        <td>1</td>
                        <td>$21</td>
                        <td>
                          <i data-feather="more-vertical"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="img-fluid img-60"
                            src={thirteen}
                            alt="#"
                          />
                        </td>
                        <td>
                          <div className="product-name">
                            <a href="#javascript">Fancy watch</a>
                            <div className="order-process">
                              <span className="order-process-circle"></span>{' '}
                              Processing
                            </div>
                          </div>
                        </td>
                        <td>35mm</td>
                        <td>Blue</td>
                        <td>5476182</td>
                        <td>1</td>
                        <td>$10</td>
                        <td>
                          <i data-feather="more-vertical"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="img-fluid img-60"
                            src={four}
                            alt="#"
                          />
                        </td>
                        <td>
                          <div className="product-name">
                            <a href="#javascript">Man shoes</a>
                            <div className="order-process">
                              <span className="order-process-circle"></span>{' '}
                              Processing
                            </div>
                          </div>
                        </td>
                        <td>8</td>
                        <td>Black & white</td>
                        <td>1756457</td>
                        <td>1</td>
                        <td>$18</td>
                        <td>
                          <i data-feather="more-vertical"></i>
                        </td>
                      </tr>
                      <tr className="title-orders">
                        <td>Shipped Orders</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <img className="img-fluid img-60" src={ten} alt="#" />
                        </td>
                        <td>
                          <div className="product-name">
                            <a href="#javascript">Ledis side bag</a>
                            <div className="order-process">
                              <span className="order-process-circle shipped-order"></span>{' '}
                              Shipped
                            </div>
                          </div>
                        </td>
                        <td>22cm x 18cm</td>
                        <td>Brown</td>
                        <td>7451725</td>
                        <td>1</td>
                        <td>$13</td>
                        <td>
                          <i data-feather="more-vertical"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="img-fluid img-60"
                            src={twelve}
                            alt="#"
                          />
                        </td>
                        <td>
                          <div className="product-name">
                            <a href="#javascript">Ledis Slipper</a>
                            <div className="order-process">
                              <span className="order-process-circle shipped-order"></span>{' '}
                              Shipped
                            </div>
                          </div>
                        </td>
                        <td>6</td>
                        <td>Brown & white</td>
                        <td>4127421</td>
                        <td>1</td>
                        <td>$6</td>
                        <td>
                          <i data-feather="more-vertical"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="img-fluid img-60"
                            src={three}
                            alt="#"
                          />
                        </td>
                        <td>
                          <div className="product-name">
                            <a href="#javascript">Fancy ledis Jacket</a>
                            <div className="order-process">
                              <span className="order-process-circle shipped-order"></span>{' '}
                              Shipped
                            </div>
                          </div>
                        </td>
                        <td>Xl</td>
                        <td>Light gray</td>
                        <td>3581714</td>
                        <td>1</td>
                        <td>$24</td>
                        <td>
                          <i data-feather="more-vertical"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img className="img-fluid img-60" src={two} alt="#" />
                        </td>
                        <td>
                          <div className="product-name">
                            <a href="#javascript">Ledis Handbag</a>
                            <div className="order-process">
                              <span className="order-process-circle shipped-order"></span>{' '}
                              Shipped
                            </div>
                          </div>
                        </td>
                        <td>25cm x 20cm</td>
                        <td>Black</td>
                        <td>6748142</td>
                        <td>1</td>
                        <td>$14</td>
                        <td>
                          <i data-feather="more-vertical"></i>
                        </td>
                      </tr>
                      <tr className="title-orders">
                        <td>Cancelled Orders</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="img-fluid img-60"
                            src={fifteen}
                            alt="#"
                          />
                        </td>
                        <td>
                          <div className="product-name">
                            <a href="#javascript">Iphone6 mobile</a>
                            <div className="order-process">
                              <span className="order-process-circle cancel-order"></span>{' '}
                              Cancelled
                            </div>
                          </div>
                        </td>
                        <td>10cm x 15cm</td>
                        <td>Black</td>
                        <td>5748214</td>
                        <td>1</td>
                        <td>$25</td>
                        <td>
                          <i data-feather="more-vertical"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="img-fluid img-60"
                            src={fourteen}
                            alt="#"
                          />
                        </td>
                        <td>
                          <div className="product-name">
                            <a href="#javascript">Watch</a>
                            <div className="order-process">
                              <span className="order-process-circle cancel-order"></span>{' '}
                              Cancelled
                            </div>
                          </div>
                        </td>
                        <td>27mm</td>
                        <td>Brown</td>
                        <td>2471254</td>
                        <td>1</td>
                        <td>$12</td>
                        <td>
                          <i data-feather="more-vertical"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="img-fluid img-60"
                            src={eleven}
                            alt="#"
                          />
                        </td>
                        <td>
                          <div className="product-name">
                            <a href="#javascript">Slipper</a>
                            <div className="order-process">
                              <span className="order-process-circle cancel-order"></span>{' '}
                              Cancelled
                            </div>
                          </div>
                        </td>
                        <td>6</td>
                        <td>Blue</td>
                        <td>8475112</td>
                        <td>1</td>
                        <td>$6</td>
                        <td>
                          <i data-feather="more-vertical"></i>
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
    </Fragment>
  )
}

export default History
