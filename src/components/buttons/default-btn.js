import React, { Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb'

const DefaultBtn = () => {
  return (
    <Fragment>
      <Breadcrumb title="Default Style" parent="Buttons" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card" id="default">
              <div className="card-header">
                <h5>Default buttons</h5>
                <span>Bootstrap state buttons</span>
              </div>
              <div className="card-body btn-showcase">
                <button className="btn btn-primary" type="button">
                  Primary Button
                </button>
                <button className="btn btn-secondary" type="button">
                  Secondary Button
                </button>
                <button className="btn btn-success" type="button">
                  Success Button
                </button>
                <button className="btn btn-info" type="button">
                  Info Button
                </button>
                <button className="btn btn-warning" type="button">
                  Warning Button
                </button>
                <button className="btn btn-danger" type="button">
                  Danger Button
                </button>
                <button className="btn btn-light" type="button">
                  Light Button
                </button>
              </div>
            </div>
            <div className="card" id="large-btn">
              <div className="card-header">
                <h5>Large buttons</h5>
                <span>
                  Add <code>.btn-lg</code> class for large size buttons
                </span>
              </div>
              <div className="card-body btn-showcase">
                <button className="btn btn-primary btn-lg" type="button">
                  Primary Button
                </button>
                <button className="btn btn-secondary btn-lg" type="button">
                  Secondary Button
                </button>
                <button className="btn btn-success btn-lg" type="button">
                  Success Button
                </button>
                <button className="btn btn-info btn-lg" type="button">
                  Info Button
                </button>
                <button className="btn btn-warning btn-lg" type="button">
                  Warning Button
                </button>
                <button className="btn btn-danger btn-lg" type="button">
                  Danger Button
                </button>
                <button className="btn btn-light btn-lg" type="button">
                  Light Button
                </button>
              </div>
            </div>
            <div className="card" id="small-btn">
              <div className="card-header">
                <h5>Small buttons</h5>
                <span>
                  Add <code>.btn-sm</code> class for small size buttons
                </span>
              </div>
              <div className="card-body btn-showcase">
                <button className="btn btn-primary btn-sm" type="button">
                  Primary Button
                </button>
                <button className="btn btn-secondary btn-sm" type="button">
                  Secondary Button
                </button>
                <button className="btn btn-success btn-sm" type="button">
                  Success Button
                </button>
                <button className="btn btn-info btn-sm" type="button">
                  Info Button
                </button>
                <button className="btn btn-warning btn-sm" type="button">
                  Warning Button
                </button>
                <button className="btn btn-danger btn-sm" type="button">
                  Danger Button
                </button>
                <button className="btn btn-light btn-sm" type="button">
                  Light Button
                </button>
              </div>
            </div>
            <div className="card" id="ex-small-btn">
              <div className="card-header">
                <h5>Extra Small buttons</h5>
                <span>
                  Add <code>.btn-xs</code> class for extra small size buttons
                </span>
              </div>
              <div className="card-body btn-showcase">
                <button className="btn btn-primary btn-xs" type="button">
                  Primary Button
                </button>
                <button className="btn btn-secondary btn-xs" type="button">
                  Secondary Button
                </button>
                <button className="btn btn-success btn-xs" type="button">
                  Success Button
                </button>
                <button className="btn btn-info btn-xs" type="button">
                  Info Button
                </button>
                <button className="btn btn-warning btn-xs" type="button">
                  Warning Button
                </button>
                <button className="btn btn-danger btn-xs" type="button">
                  Danger Button
                </button>
                <button className="btn btn-light btn-xs" type="button">
                  Light Button
                </button>
              </div>
            </div>
            <div className="card" id="active-btn">
              <div className="card-header">
                <h5>Active Buttons</h5>
                <span>
                  Add <code>.active</code> class for active state
                </span>
              </div>
              <div className="card-body btn-showcase">
                <button className="btn btn-primary active" type="button">
                  Active
                </button>
                <button className="btn btn-secondary active" type="button">
                  Active
                </button>
                <button className="btn btn-success active" type="button">
                  Active
                </button>
                <button className="btn btn-info active" type="button">
                  Active
                </button>
                <button className="btn btn-warning active" type="button">
                  Active
                </button>
                <button className="btn btn-danger active" type="button">
                  Active
                </button>
                <button className="btn btn-light active txt-dark" type="button">
                  Active
                </button>
              </div>
            </div>
            <div className="card" id="disabled-btn">
              <div className="card-header">
                <h5>Disabled buttons</h5>
                <span>
                  Add <code>.disabled</code> class or{' '}
                  <code>disabled="disabled"</code> attribute for disabled button
                </span>
              </div>
              <div className="card-body btn-showcase">
                <button className="btn btn-primary disabled" type="button">
                  Disabled
                </button>
                <button className="btn btn-secondary disabled" type="button">
                  Disabled
                </button>
                <button className="btn btn-success disabled" type="button">
                  Disabled
                </button>
                <button className="btn btn-info disabled" type="button">
                  Disabled
                </button>
                <button className="btn btn-warning disabled" type="button">
                  Disabled
                </button>
                <button className="btn btn-danger disabled" type="button">
                  Disabled
                </button>
                <button className="btn btn-light disabled" type="button">
                  Disabled
                </button>
              </div>
            </div>
            <div className="card" id="custom-state-button">
              <div className="card-header">
                <h5>Custom state buttons</h5>
                <span>
                  The <code>.btn</code> class used with{' '}
                  <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code> and{' '}
                  <code>&lt;input&gt;</code> elements.
                </span>
              </div>
              <div className="card-body btn-showcase">
                <a
                  className="btn btn-primary"
                  href="#javascript"
                  data-toggle="tooltip"
                  title="btn btn-primary"
                  role="button"
                >
                  Link
                </a>
                <input
                  className="btn btn-secondary"
                  type="button"
                  value="Input"
                  data-toggle="tooltip"
                  title="btn btn-secondary"
                />
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Submit"
                  data-toggle="tooltip"
                  title="btn btn-success"
                />
                <button className="btn btn-info" type="submit">
                  Button
                </button>
              </div>
            </div>
            <div className="card" id="outline-button">
              <div className="card-header">
                <h5>outline buttons</h5>
                <span>
                  Add <code>.btn-outline-*</code> class for border button
                </span>
              </div>
              <div className="card-body btn-showcase">
                <button className="btn btn-outline-primary" type="button">
                  Primary Button
                </button>
                <button className="btn btn-outline-secondary" type="button">
                  Secondary Button
                </button>
                <button className="btn btn-outline-success" type="button">
                  Success Button
                </button>
                <button className="btn btn-outline-info" type="button">
                  Info Button
                </button>
                <button className="btn btn-outline-warning" type="button">
                  Warning Button
                </button>
                <button className="btn btn-outline-danger" type="button">
                  Danger Button
                </button>
                <button
                  className="btn btn-outline-light txt-dark"
                  type="button"
                >
                  Light Button
                </button>
              </div>
            </div>
            <div className="card" id="outline-bold-button">
              <div className="card-header">
                <h5>bold Border outline buttons</h5>
                <span>
                  Add <code>.btn-outline-*-2x</code> class for bold outline
                </span>
              </div>
              <div className="card-body btn-showcase">
                <button className="btn btn-outline-primary-2x" type="button">
                  Primary Button
                </button>
                <button className="btn btn-outline-secondary-2x" type="button">
                  Secondary Button
                </button>
                <button className="btn btn-outline-success-2x" type="button">
                  Success Button
                </button>
                <button className="btn btn-outline-info-2x" type="button">
                  Info Button
                </button>
                <button className="btn btn-outline-warning-2x" type="button">
                  Warning Button
                </button>
                <button className="btn btn-outline-danger-2x" type="button">
                  Danger Button
                </button>
                <button
                  className="btn btn-outline-light-2x txt-dark"
                  type="button"
                >
                  Light Button
                </button>
              </div>
            </div>
            <div className="card" id="outline-large-button">
              <div className="card-header">
                <h5>outline Large buttons</h5>
                <span>
                  Add <code>.btn-outline-*</code> class for outline and{' '}
                  <code>.btn-lg</code> class for large button
                </span>
              </div>
              <div className="card-body btn-showcase">
                <button
                  className="btn btn-outline-primary btn-lg"
                  type="button"
                >
                  Primary Button
                </button>
                <button
                  className="btn btn-outline-secondary btn-lg"
                  type="button"
                >
                  Secondary Button
                </button>
                <button
                  className="btn btn-outline-success btn-lg"
                  type="button"
                >
                  Success Button
                </button>
                <button className="btn btn-outline-info btn-lg" type="button">
                  Info Button
                </button>
                <button
                  className="btn btn-outline-warning btn-lg"
                  type="button"
                >
                  Warning Button
                </button>
                <button className="btn btn-outline-danger btn-lg" type="button">
                  Danger Button
                </button>
                <button
                  className="btn btn-outline-light btn-lg txt-dark"
                  type="button"
                >
                  Light Button
                </button>
              </div>
            </div>
            <div className="card" id="outline-small-button">
              <div className="card-header">
                <h5>outline small buttons</h5>
                <span>
                  Add <code>.btn-outline-*</code> class for outline and{' '}
                  <code>.btn-sm</code> class for small button
                </span>
              </div>
              <div className="card-body btn-showcase">
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="button"
                >
                  Primary Button
                </button>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  type="button"
                >
                  Secondary Button
                </button>
                <button
                  className="btn btn-outline-success btn-sm"
                  type="button"
                >
                  Success Button
                </button>
                <button className="btn btn-outline-info btn-sm" type="button">
                  Info Button
                </button>
                <button
                  className="btn btn-outline-warning btn-sm"
                  type="button"
                >
                  Warning Button
                </button>
                <button className="btn btn-outline-danger btn-sm" type="button">
                  Danger Button
                </button>
                <button
                  className="btn btn-outline-light btn-sm txt-dark"
                  type="button"
                >
                  Light Button
                </button>
              </div>
            </div>
            <div className="card" id="ex-outline-small-button">
              <div className="card-header">
                <h5>Outline extra small buttons</h5>
                <span>
                  Add <code>.btn-outline-*</code> class for outline and{' '}
                  <code>.btn-xs</code> class for extra small button
                </span>
              </div>
              <div className="card-body btn-showcase">
                <button
                  className="btn btn-outline-primary btn-xs"
                  type="button"
                >
                  Primary Button
                </button>
                <button
                  className="btn btn-outline-secondary btn-xs"
                  type="button"
                >
                  Secondary Button
                </button>
                <button
                  className="btn btn-outline-success btn-xs"
                  type="button"
                >
                  Success Button
                </button>
                <button className="btn btn-outline-info btn-xs" type="button">
                  Info Button
                </button>
                <button
                  className="btn btn-outline-warning btn-xs"
                  type="button"
                >
                  Warning Button
                </button>
                <button className="btn btn-outline-danger btn-xs" type="button">
                  Danger Button
                </button>
                <button
                  className="btn btn-outline-light btn-xs txt-dark"
                  type="button"
                >
                  Light Button
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>Disabled outline buttons</h5>
                <span>
                  Add <code>.disabled</code> class or{' '}
                  <code>disabled="disabled"</code> attribute for disabled state
                </span>
              </div>
              <div className="card-body btn-showcase">
                <button
                  className="btn btn-outline-primary disabled"
                  type="button"
                >
                  Disabled
                </button>
                <button
                  className="btn btn-outline-secondary disabled"
                  type="button"
                >
                  Disabled
                </button>
                <button
                  className="btn btn-outline-success disabled"
                  type="button"
                >
                  Disabled
                </button>
                <button className="btn btn-outline-info disabled" type="button">
                  Disabled
                </button>
                <button
                  className="btn btn-outline-warning disabled"
                  type="button"
                >
                  Disabled
                </button>
                <button
                  className="btn btn-outline-danger disabled"
                  type="button"
                >
                  Disabled
                </button>
                <button
                  className="btn btn-outline-light txt-dark disabled"
                  type="button"
                >
                  Disabled
                </button>
              </div>
            </div>
            <div className="card" id="gradiant">
              <div className="card-header">
                <h5>Gradien buttons</h5>
                <span>
                  Add <code>.btn-*-gradien</code> class for gradien button
                </span>
              </div>
              <div className="card-body btn-showcase">
                <button className="btn btn-primary-gradien" type="button">
                  Primary Button
                </button>
                <button className="btn btn-secondary-gradien" type="button">
                  Secondary Button
                </button>
                <button className="btn btn-success-gradien" type="button">
                  Success Button
                </button>
                <button className="btn btn-info-gradien" type="button">
                  Info Button
                </button>
                <button className="btn btn-warning-gradien" type="button">
                  Warning Button
                </button>
                <button className="btn btn-danger-gradien" type="button">
                  Danger Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default DefaultBtn
