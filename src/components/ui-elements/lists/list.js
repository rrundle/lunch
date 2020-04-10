import React from 'react'
import Breadcrumb from '../../common/breadcrumb'
import TabVertical from './tab-list'

const List = () => {
  return (
    <div>
      <Breadcrumb parent="UI-Element" title="List" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-xl-12">
            <div className="card">
              <div className="card-header">
                <h5>Default list</h5>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-12">
            <div className="card">
              <div className="card-header">
                <h5>Links and buttons</h5>
              </div>
              <div className="card-body">
                <div className="list-group">
                  <a
                    className="list-group-item list-group-item-action active"
                    href="#javascript"
                  >
                    Cras justo odio
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#javascript"
                  >
                    Dapibus ac facilisis in
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#javascript"
                  >
                    Morbi leo risus
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#javascript"
                  >
                    Porta ac consectetur ac
                  </a>
                  <a
                    className="list-group-item list-group-item-action disabled"
                    href="#javascript"
                  >
                    Vestibulum at eros
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-12">
            <div className="card">
              <div className="card-header">
                <h5>Flush Style</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-12">
            <div className="card">
              <div className="card-header">
                <h5>Contextual className</h5>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item list-group-item-primary">
                    This is a primary list group item
                  </li>
                  <li className="list-group-item list-group-item-secondary">
                    This is a secondary list group item
                  </li>
                  <li className="list-group-item list-group-item-success">
                    This is a success list group item
                  </li>
                  <li className="list-group-item list-group-item-danger">
                    This is a danger list group item
                  </li>
                  <li className="list-group-item list-group-item-warning">
                    This is a warning list group item
                  </li>
                  <li className="list-group-item list-group-item-info">
                    This is a info list group item
                  </li>
                  <li className="list-group-item list-group-item-light">
                    This is a light list group item
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    This is a dark list group item
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-12">
            <div className="card">
              <div className="card-header">
                <h5>With badges</h5>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <span className="badge badge-primary counter digits">
                      14
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span className="badge badge-secondary counter digits">
                      2
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span className="badge badge-success badge-pill counter digits">
                      1
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span className="badge badge-info badge-pill digits">
                      100%
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span className="badge badge-warning counter digits">
                      2
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span className="badge badge-danger badge-pill digits">
                      sale
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <span className="badge badge-light counter digits">14</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-12">
            <div className="card">
              <div className="card-header">
                <h5>Custom content</h5>
              </div>
              <div className="card-body">
                <div className="list-group">
                  <a
                    className="list-group-item list-group-item-action flex-column align-items-start active"
                    href="#javascript"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small>3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small>Donec id elit non mi porta.</small>
                  </a>
                  <a
                    className="list-group-item list-group-item-action flex-column align-items-start"
                    href="#javascript"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-muted">
                      Donec id elit non mi porta.
                    </small>
                  </a>
                  <a
                    className="list-group-item list-group-item-action flex-column align-items-start"
                    href="#javascript"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-muted">
                      Donec id elit non mi porta.
                    </small>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-12">
            <div className="card">
              <div className="card-header">
                <h5>JavaScript behavior</h5>
              </div>
              <div className="card-body">
                <TabVertical />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-12">
            <div className="card">
              <div className="card-header">
                <h5>With Icon</h5>
              </div>
              <div className="card-body">
                <div className="list-group">
                  <a
                    className="list-group-item list-group-item-action"
                    href="#javascript"
                  >
                    <i className="icon-save-alt"></i>Cras justo odio
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#javascript"
                  >
                    <i className="icon-target"></i>Dapibus ac facilisis in
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#javascript"
                  >
                    <i className="icon-mobile"></i>Morbi leo risus
                  </a>
                  <a
                    className="list-group-item list-group-item-action disabled"
                    href="#javascript"
                  >
                    <i className="icon-shopping-cart-full"></i>Vestibulum at
                    eros
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-12">
            <div className="card">
              <div className="card-header">
                <h5>With Images</h5>
              </div>
              <div className="card-body">
                <div className="list-group">
                  <a
                    className="list-group-item list-group-item-action"
                    href="#javascript"
                  >
                    <img src="../assets/images/user/1.jpg" alt="" />
                    Cras justo odio
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#javascript"
                  >
                    <img src="../assets/images/user/1.jpg" alt="" />
                    Dapibus ac facilisis in
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#javascript"
                  >
                    <img src="../assets/images/user/1.jpg" alt="" />
                    Morbi leo risus
                  </a>
                  <a
                    className="list-group-item list-group-item-action disabled"
                    href="#javascript"
                  >
                    <img src="../assets/images/user/1.jpg" alt="" />
                    Vestibulum at eros
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-12">
            <div className="card">
              <div className="card-header">
                <h5>With Image Rounded</h5>
              </div>
              <div className="card-body">
                <div className="list-group">
                  <a
                    className="list-group-item list-group-item-action"
                    href="#javascript"
                  >
                    <img
                      className="rounded-circle"
                      src="../assets/images/user/1.jpg"
                      alt=""
                    />
                    Cras justo odio
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#javascript"
                  >
                    <img
                      className="rounded-circle"
                      src="../assets/images/user/1.jpg"
                      alt=""
                    />
                    Dapibus ac facilisis in
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#javascript"
                  >
                    <img
                      className="rounded-circle"
                      src="../assets/images/user/1.jpg"
                      alt=""
                    />
                    Morbi leo risus
                  </a>
                  <a
                    className="list-group-item list-group-item-action disabled"
                    href="#javascript"
                  >
                    <img
                      className="rounded-circle"
                      src="../assets/images/user/1.jpg"
                      alt=""
                    />
                    Vestibulum at eros
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
