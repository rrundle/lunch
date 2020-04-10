import React, { Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import Custom Componenets
import Breadcrumb from '../common/breadcrumb'

const Toastr = () => {
  return (
    <Fragment>
      <Breadcrumb title="Toastr" parent="Advance" />

      {/*Container-fluid starts*/}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Basic Examples</h5>
              </div>
              <div className="card-body btn-showcase">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => toast.success('Success Notification !')}
                >
                  Success Notification
                </button>

                <button
                  type="button"
                  className="btn btn-info sweet-4"
                  onClick={() => toast.info('Info Notification !')}
                >
                  Info Notification
                </button>

                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => toast.warn('Warning Notification !')}
                >
                  Warning Notification
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => toast.error('Error Notification !')}
                >
                  Danger Notification
                </button>
              </div>

              <ToastContainer />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Custom Directions</h5>
              </div>
              <div className="card-body btn-showcase">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() =>
                    toast.success('Success Notification !', {
                      position: toast.POSITION.TOP_CENTER,
                    })
                  }
                >
                  Top Center
                </button>

                <button
                  type="button"
                  className="btn btn-info sweet-4"
                  onClick={() =>
                    toast.info('Info Notification !', {
                      position: toast.POSITION.BOTTOM_CENTER,
                    })
                  }
                >
                  Bottom Center
                </button>

                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() =>
                    toast.warn('Warning Notification !', {
                      position: toast.POSITION.BOTTOM_LEFT,
                    })
                  }
                >
                  Bottom Left
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() =>
                    toast.error('Error Notification !', {
                      position: toast.POSITION.BOTTOM_RIGHT,
                    })
                  }
                >
                  Right Bottom
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Custom AutoClose</h5>
              </div>
              <div className="card-body btn-showcase">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() =>
                    toast.success('Success Notification !', {
                      autoClose: 15000,
                    })
                  }
                >
                  AutoClose in 15000 Sec
                </button>

                <button
                  type="button"
                  className="btn btn-info sweet-4"
                  onClick={() =>
                    toast.info('Info Notification !', { autoClose: 5000 })
                  }
                >
                  AutoClose in 5000 Sec
                </button>

                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() =>
                    toast.warn('Warning Notification !', { autoClose: 1000 })
                  }
                >
                  AutoClose in 1000 Sec
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() =>
                    toast.error('Error Notification !', { autoClose: 500 })
                  }
                >
                  AutoClose in 500 Sec
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Container-fluid Ends*/}
    </Fragment>
  )
}
export default Toastr
