import React, { Fragment, useState } from 'react'
import Breadcrumb from '../../common/breadcrumb'
import { Alert, UncontrolledAlert } from 'reactstrap'

const AlertComponent = () => {
  const [visible, setVisible] = useState(true)
  const onDismiss = () => {
    setVisible(!visible)
  }
  return (
    <Fragment>
      <Breadcrumb title="Alert" parent="Base" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>Theme Color Alerts</h5>
                <span>
                  Theme color Archive just adding class <code>.dark</code>
                </span>
              </div>
              <div className="card-body">
                <Alert color="primary" className="dark">
                  This is a primary alert — check it out!
                </Alert>
                <Alert color="secondary" className="dark">
                  This is a secondary alert — check it out!
                </Alert>
                <Alert color="success" className="dark">
                  This is a success alert — check it out!
                </Alert>
                <Alert color="danger" className="dark">
                  This is a danger alert — check it out!
                </Alert>
                <Alert color="warning" className="dark">
                  This is a warning alert — check it out!
                </Alert>
                <Alert color="info" className="dark">
                  This is a info alert — check it out!
                </Alert>
                <Alert color="light" className="dark">
                  This is a light alert — check it out!
                </Alert>
                <Alert color="dark" className="dark">
                  This is a dark alert — check it out!
                </Alert>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>Link color in theme-color</h5>
                <span>
                  Use the <code>.alert-link</code> utility class to quickly
                  provide matching colored links within any alert
                </span>
              </div>
              <div className="card-body">
                <Alert color="primary">
                  This is a primary alert with{' '}
                  <a href="#javascript" className="alert-link">
                    an example link
                  </a>
                  . Give it a click if you like.
                </Alert>
                <Alert color="secondary">
                  This is a secondary alert with{' '}
                  <a href="#javascript" className="alert-link">
                    an example link
                  </a>
                  . Give it a click if you like.
                </Alert>
                <Alert color="success">
                  This is a success alert with{' '}
                  <a href="#javascript" className="alert-link">
                    an example link
                  </a>
                  . Give it a click if you like.
                </Alert>
                <Alert color="danger">
                  This is a danger alert with{' '}
                  <a href="#javascript" className="alert-link">
                    an example link
                  </a>
                  . Give it a click if you like.
                </Alert>
                <Alert color="warning">
                  This is a warning alert with{' '}
                  <a href="#javascript" className="alert-link">
                    an example link
                  </a>
                  . Give it a click if you like.
                </Alert>
                <Alert color="info">
                  This is a info alert with{' '}
                  <a href="#javascript" className="alert-link">
                    an example link
                  </a>
                  . Give it a click if you like.
                </Alert>
                <Alert color="light">
                  This is a light alert with{' '}
                  <a href="#javascript" className="alert-link">
                    an example link
                  </a>
                  . Give it a click if you like.
                </Alert>
                <Alert color="dark">
                  This is a dark alert with{' '}
                  <a href="#javascript" className="alert-link">
                    an example link
                  </a>
                  . Give it a click if you like.
                </Alert>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card height-equal">
              <div className="card-header">
                <h5>Dismissing</h5>
                <span>
                  To animate alerts when dismissing them, be sure to add the
                  .fade and .show classes.
                </span>
              </div>
              <div className="card-body">
                <Alert color="info" isOpen={visible} toggle={onDismiss}>
                  I am an alert and I can be dismissed!
                </Alert>
                <UncontrolledAlert color="success" fade={false}>
                  I am an alert and I can be dismissed without animating!
                </UncontrolledAlert>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card height-equal">
              <div className="card-header">
                <h5>Alerts without fade</h5>
              </div>
              <div className="card-body">
                <UncontrolledAlert color="info" fade={false}>
                  I am an alert and I can be dismissed without animating!
                </UncontrolledAlert>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Additional content</h5>
              </div>
              <div className="card-body">
                <Alert color="primary">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>
                    Aww yeah, you successfully read this important alert
                    message. This example text is going to run a bit longer so
                    that you can see how spacing within an alert works with this
                    kind of content.
                  </p>
                  <hr />
                  <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to
                    keep things nice and tidy.
                  </p>
                </Alert>
                <Alert color="secondary">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>
                    Aww yeah, you successfully read this important alert
                    message. This example text is going to run a bit longer so
                    that you can see how spacing within an alert works with this
                    kind of content.
                  </p>
                  <hr />
                  <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to
                    keep things nice and tidy.
                  </p>
                </Alert>
                <Alert color="success">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>
                    Aww yeah, you successfully read this important alert
                    message. This example text is going to run a bit longer so
                    that you can see how spacing within an alert works with this
                    kind of content.
                  </p>
                  <hr />
                  <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to
                    keep things nice and tidy.
                  </p>
                </Alert>
                <Alert color="danger">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>
                    Aww yeah, you successfully read this important alert
                    message. This example text is going to run a bit longer so
                    that you can see how spacing within an alert works with this
                    kind of content.
                  </p>
                  <hr />
                  <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to
                    keep things nice and tidy.
                  </p>
                </Alert>
                <Alert color="info">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>
                    Aww yeah, you successfully read this important alert
                    message. This example text is going to run a bit longer so
                    that you can see how spacing within an alert works with this
                    kind of content.
                  </p>
                  <hr />
                  <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to
                    keep things nice and tidy.
                  </p>
                </Alert>
                <Alert color="light">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>
                    Aww yeah, you successfully read this important alert
                    message. This example text is going to run a bit longer so
                    that you can see how spacing within an alert works with this
                    kind of content.
                  </p>
                  <hr />
                  <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to
                    keep things nice and tidy.
                  </p>
                </Alert>
                <Alert color="dark">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>
                    Aww yeah, you successfully read this important alert
                    message. This example text is going to run a bit longer so
                    that you can see how spacing within an alert works with this
                    kind of content.
                  </p>
                  <hr />
                  <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to
                    keep things nice and tidy.
                  </p>
                </Alert>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AlertComponent
