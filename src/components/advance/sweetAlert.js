import React, { Component, Fragment } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

// import Custom Componenets
import Breadcrumb from '../common/breadcrumb'

class SweetAlerts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      alert: null,
      show: false,
      basicTitle: '',
      basicType: 'default',
    }
  }

  closeAlert = () => {
    this.setState({
      show: false,
    })
  }

  onRecieveInput = (value) => {
    this.setState({
      alert: (
        <SweetAlert success title="Nice!" onConfirm={this.hideAlert}>
          You wrote: {value}
        </SweetAlert>
      ),
    })
  }

  buttonExample = (type) => {
    switch (type) {
      case 'custom':
        this.setState({
          alert: (
            <SweetAlert
              custom
              showCancel
              confirmBtnText="Yes"
              cancelBtnText="No"
              confirmBtnBsStyle="primary"
              cancelBtnBsStyle="default"
              customIcon="thumbs-up.jpg"
              title="Do you like thumbs?"
              onConfirm={this.hideAlert}
              onCancel={this.hideAlert}
            >
              You will find they are up!
            </SweetAlert>
          ),
        })
        break
      case 'input':
        this.setState({
          alert: (
            <SweetAlert
              input
              showCancel
              cancelBtnBsStyle="default"
              title="An input!"
              placeHolder="Write something"
              onConfirm={this.onRecieveInput}
              onCancel={this.hideAlert}
            >
              Write something interesting:
            </SweetAlert>
          ),
        })
        break
      case 'password':
        this.setState({
          alert: (
            <SweetAlert
              input
              required
              inputType="password"
              title="Enter Password"
              validationMsg="You must enter your password!"
              onConfirm={this.hideAlert}
            >
              Write something interesting:
            </SweetAlert>
          ),
        })
        break
      default:
        this.setState({
          alert: (
            <SweetAlert
              showCancel
              confirmBtnText="Continue"
              confirmBtnBsStyle={type}
              type={type}
              title="Are you sure?"
              onCancel={this.hideAlert}
              onConfirm={this.hideAlert}
            >
              You will not be able to recover this imaginary file!
            </SweetAlert>
          ),
        })
        break
    }
  }

  hideAlert = () => {
    this.setState({
      alert: null,
    })
  }

  render() {
    return (
      <Fragment>
        <Breadcrumb title="Sweet Alert" parent="Advance" />
        {/*Container-fluid starts*/}
        <SweetAlert
          show={this.state.show}
          type={this.state.basicType}
          title={this.state.basicTitle}
          onConfirm={this.closeAlert}
        >
          I did it!
        </SweetAlert>

        {this.state.alert}
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>Alert State</h5>
                </div>
                <div className="card-body btn-showcase">
                  <button
                    type="button"
                    className="btn btn-info sweet-2"
                    onClick={() =>
                      this.setState({
                        show: true,
                        basicType: 'info',
                        basicTitle: 'Information Alert',
                      })
                    }
                  >
                    With Title alert
                  </button>

                  <button
                    type="button"
                    className="btn btn-success sweet-3"
                    onClick={() =>
                      this.setState({
                        show: true,
                        basicType: 'success',
                        basicTitle: 'Success Alert',
                      })
                    }
                  >
                    Success alert
                  </button>

                  <button
                    type="button"
                    className="btn btn-warning sweet-4"
                    onClick={() =>
                      this.setState({
                        show: true,
                        basicType: 'warning',
                        basicTitle: 'Warning Alert',
                      })
                    }
                  >
                    Warning alert
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger sweet-5"
                    onClick={() =>
                      this.setState({
                        show: true,
                        basicType: 'danger',
                        basicTitle: 'Danger Alert',
                      })
                    }
                  >
                    Danger alert
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>Advanced State</h5>
                </div>
                <div className="card-body btn-showcase">
                  <button
                    type="button"
                    className="btn btn-success sweet-8"
                    onClick={() => this.buttonExample('custom')}
                  >
                    Custom Alert
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger sweet-7"
                    onClick={() => this.buttonExample('input')}
                  >
                    Input Alert
                  </button>
                  <button
                    type="button"
                    className="btn btn-info sweet-9"
                    onClick={() => this.buttonExample('password')}
                  >
                    Password Alert
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning sweet-6"
                    onClick={() => this.buttonExample()}
                  >
                    Default Alert
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
}
export default SweetAlerts
