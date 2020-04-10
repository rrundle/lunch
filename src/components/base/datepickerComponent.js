import React, { Component, Fragment } from 'react'
import DatePicker from 'react-datepicker'
import Breadcrumb from '../common/breadcrumb'

import 'react-datepicker/dist/react-datepicker.css'

class DatepickerComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startDate: new Date(),
      endDate: new Date(),
    }
  }
  handleChange = (date) => {
    this.setState({
      startDate: date,
    })
  }
  addDays = (date) => {
    this.setState({
      startDate: (date, 4),
    })
  }

  setEndDate = (date) => {
    this.setState({
      endDate: date,
    })
  }

  render() {
    const { startDate, endDate } = this.state
    return (
      <Fragment>
        <Breadcrumb title="Datepicker" parent="Base" />
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h5>Date Picker</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="date-picker">
                    <form className="theme-form">
                      <div className="form-group form-row">
                        <label className="col-sm-3 col-form-label text-right">
                          Default
                        </label>
                        <div className="col-xl-5 col-sm-9">
                          <div className="input-group">
                            <DatePicker
                              className="form-control digits"
                              selected={startDate}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group form-row">
                        <label className="col-sm-3 col-form-label text-right">
                          Select Date with Time
                        </label>
                        <div className="col-xl-5 col-sm-9">
                          <DatePicker
                            className="form-control digits"
                            showPopperArrow={false}
                            selected={startDate}
                            showTimeSelect
                            dateFormat="Pp"
                          />
                        </div>
                      </div>
                      <div className="form-group form-row">
                        <label className="col-sm-3 col-form-label text-right">
                          Select Time Only
                        </label>
                        <div className="col-xl-5 col-sm-9">
                          <DatePicker
                            className="form-control digits"
                            selected={startDate}
                            onChange={this.handleChange}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                          />
                        </div>
                      </div>
                      <div className="form-group form-row">
                        <label className="col-sm-3 col-form-label text-right">
                          Custom date format
                        </label>
                        <div className="col-xl-5 col-sm-9">
                          <DatePicker
                            className="form-control digits"
                            dateFormat="yyyy/MM/dd"
                            selected={startDate}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group form-row">
                        <label className="col-sm-3 col-form-label text-right">
                          Today button
                        </label>
                        <div className="col-xl-5 col-sm-9">
                          <DatePicker
                            className="form-control digits"
                            todayButton="Vandaag"
                            selected={startDate}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group form-row">
                        <label className="col-sm-3 col-form-label text-right">
                          Disable days of week
                        </label>
                        <div className="col-xl-5 col-sm-9">
                          <DatePicker
                            className="form-control digits"
                            placeholderText="Click to select a date"
                          />
                        </div>
                      </div>
                      <div className="form-group form-row">
                        <label className="col-sm-3 col-form-label text-right">
                          Specific date range
                        </label>
                        <div className="col-xl-5 col-sm-9">
                          <div className="form-row min-date">
                            <div className="col-md-12 mb-2">
                              <DatePicker
                                className="form-control digits"
                                selected={startDate}
                                onChange={this.handleChange}
                                minDate={new Date()}
                                maxDate={this.addDays}
                                placeholderText="Select a date between today and 5 days in the future"
                              />
                            </div>
                            <div className="col-md-12 mb-2">
                              <label className="col-sm-3 col-form-label text-right">
                                Min date
                              </label>
                              <DatePicker
                                className="form-control digits"
                                selected={startDate}
                                onChange={this.handleChange}
                                minDate={new Date()}
                                placeholderText="Select a date after 5 days ago"
                              />
                            </div>
                            <div className="col-md-12 mb-2">
                              <label className="col-sm-3 col-form-label text-right">
                                Max date
                              </label>
                              <DatePicker
                                className="form-control digits"
                                selected={startDate}
                                onChange={this.handleChange}
                                maxDate={new Date()}
                                placeholderText="Select a date after 5 days ago"
                              />
                            </div>
                            <div className="col-md-12 date-range">
                              <label className="col-sm-3 col-form-label text-right">
                                Date Range
                              </label>
                              <DatePicker
                                className="form-control digits"
                                selected={startDate}
                                onChange={this.handleChange}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                              />
                              <DatePicker
                                className="form-control digits ml-2"
                                selected={endDate}
                                onChange={this.selected}
                                selectsEnd
                                endDate={endDate}
                                minDate={startDate}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group form-row">
                        <label className="col-sm-3 col-form-label text-right">
                          Disable Datepicker
                        </label>
                        <div className="col-sm-3">
                          <div className="datepicker-here" data-language="en">
                            <DatePicker
                              className="form-control digits"
                              selected={startDate}
                              onChange={this.handleChange}
                              disabled
                              placeholderText="This is disabled"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group form-row mb-0">
                        <label className="col-sm-3 col-form-label text-right">
                          Inline version
                        </label>
                        <div className="col-sm-3">
                          <div className="datepicker-here" data-language="en">
                            <DatePicker
                              className="form-control digits"
                              selected={startDate}
                              onChange={this.handleChange}
                              inline
                            />
                          </div>
                        </div>
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
}

export default DatepickerComponent
