import React, { Component, Fragment } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

// import Custom Componenets
import Breadcrumb from '../common/breadcrumb'

class RangeSlider extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value: 10,
      nagative: -10,
      horizontal: 10,
      vertical: 50,
      Orientationvalue: 25,
      reverseValue: 8,
    }
  }

  handleChangeStart = () => {}

  handleChange = (value) => {
    this.setState({
      value: value,
    })
  }
  handleNagativeChange = (value) => {
    this.setState({
      nagative: value,
    })
  }

  handleChangeHorizontal = (value) => {
    this.setState({
      horizontal: value,
    })
  }

  handleChangeVertical = (value) => {
    this.setState({
      vertical: value,
    })
  }

  handleOrientationChange = (value) => {
    this.setState({
      Orientationvalue: value,
    })
  }

  handleChangeReverse = (value) => {
    this.setState({
      reverseValue: value,
    })
  }

  handleChangeComplete = () => {}

  componentDidMount() {
    if (document.body.classList.contains('rtl')) {
      return document.querySelectorAll('.rangeslider__fill')
    }
  }

  render() {
    const { horizontal, vertical, Orientationvalue, reverseValue } = this.state
    const horizontalLabels = {
      0: 'Low',
      50: 'Medium',
      100: 'High',
    }

    const verticalLabels = {
      10: 'Getting started',
      50: 'Half way',
      90: 'Almost done',
      100: 'Complete!',
    }

    const formatkg = (value) => value + ' kg'
    const formatPc = (p) => p + '%'

    return (
      <Fragment>
        <Breadcrumb title="Range Slider" parent="Advance" />

        {/*Container-fluid starts*/}
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5>Basic Slider</h5>
                </div>
                <div className="card-body">
                  <form className="theme-form form-label-align-right range-slider">
                    <div className="form-group row mb-0">
                      <label
                        htmlFor="u-range-01"
                        className="col-md-2 col-form-label sm-left-text"
                      >
                        Default
                      </label>
                      <div className="col-md-10">
                        <Slider
                          min={0}
                          max={100}
                          value={this.state.value}
                          onChangeStart={this.handleChangeStart}
                          onChange={this.handleChange}
                          onChangeComplete={this.handleChangeComplete}
                        />
                        <div className="value">{this.state.value}</div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5>Negative Values</h5>
                </div>
                <div className="card-body">
                  <form className="theme-form form-label-align-right range-slider">
                    <div className="form-group row mb-0">
                      <label
                        htmlFor="u-range-01"
                        className="col-md-2 col-form-label sm-left-text"
                      >
                        Default
                      </label>
                      <div className="col-md-10">
                        <div className="slider">
                          <Slider
                            min={-20}
                            max={0}
                            tooltip={false}
                            value={this.state.nagative}
                            onChange={this.handleNagativeChange}
                          />
                          <div className="value">{this.state.nagative}</div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>Custom Labels & Formatting</h5>
                </div>
                <div className="card-body">
                  <form className="theme-form form-label-align-right range-slider">
                    <div className="form-group row mb-0">
                      <label
                        htmlFor="u-range-01"
                        className="col-md-2 col-form-label sm-left-text"
                      >
                        Default
                      </label>
                      <div className="col-md-10">
                        <div className="slider custom-labels">
                          <Slider
                            min={0}
                            max={100}
                            value={horizontal}
                            labels={horizontalLabels}
                            format={formatkg}
                            onChange={this.handleChangeHorizontal}
                          />
                          <div className="value pt-3">
                            {formatkg(horizontal)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>Orientation & Custom Styles</h5>
                </div>
                <div className="card-body">
                  <form className="theme-form form-label-align-right range-slider">
                    <div className="form-group row mb-0">
                      <label
                        htmlFor="u-range-01"
                        className="col-md-2 col-form-label sm-left-text"
                      >
                        Default
                      </label>
                      <div className="col-md-10">
                        <div className="slider orientation-reversed">
                          <div className="slider-group">
                            <div className="slider-vertical">
                              <Slider
                                min={0}
                                max={100}
                                value={Orientationvalue}
                                orientation="vertical"
                                onChange={this.handleOrientationChange}
                              />
                              <div className="value">{Orientationvalue}</div>
                            </div>
                            <div className="slider-horizontal">
                              <Slider
                                min={0}
                                max={10}
                                value={reverseValue}
                                orientation="horizontal"
                                onChange={this.handleChangeReverse}
                              />
                              <div className="value">{reverseValue}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>Vertical Slider</h5>
                </div>
                <div className="card-body vertical-height">
                  <Slider
                    value={vertical}
                    orientation="vertical"
                    labels={verticalLabels}
                    format={formatPc}
                    onChange={this.handleChangeVertical}
                  />
                  <div className="value">{formatPc(vertical)}</div>
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
export default RangeSlider
