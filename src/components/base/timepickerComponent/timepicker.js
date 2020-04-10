import React, { Fragment } from 'react'

import Breadcrumb from '../../common/breadcrumb'
import TimePickerTwo from './timepicker-two'
import TimePickerOne from './timepicker-one'
import TimePickerThree from './timepicker-three'
import TimePickerFour from './timepicker-four'

const TimePickerWrapper = (props) => {
  return (
    <Fragment>
      <Breadcrumb title="Timepicker" parent="Base" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>Default:</h5>
              </div>
              <div className="card-body">
                <form className="theme-form">
                  <div className="form-group mb-0">
                    <TimePickerTwo />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>Time Picker with Dark Theme</h5>
              </div>
              <div className="card-body">
                <form className="theme-form">
                  <div className="form-group mb-0">
                    <TimePickerOne />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-6 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>Set Classic Theme</h5>
              </div>
              <div className="card-body">
                <form className="theme-form">
                  <div className="form-group mb-0">
                    <TimePickerFour />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-6 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>Set Multiple Timepicker</h5>
              </div>
              <div className="card-body">
                <div className="clearfix">
                  <form className="theme-form">
                    <div className="form-group mb-0">
                      <TimePickerThree />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default TimePickerWrapper
