import React, { Fragment } from 'react'
import Breadcrumb from '../../common/breadcrumb'

const RadioCheckbox = () => {
  return (
    <Fragment>
      <Breadcrumb title="Checkbox & Radio" parent="Form" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5>Custom Radio</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12">
                    <h5>Custom Radio</h5>
                  </div>
                  <div className="col">
                    <div className="form-group m-t-15 custom-radio-ml">
                      <div className="radio radio-primary">
                        <input
                          id="radio1"
                          type="radio"
                          name="radio1"
                          value="option1"
                        />
                        <label for="radio1">
                          Option<span className="digits"> 1</span>
                        </label>
                      </div>
                      <div className="radio radio-primary">
                        <input
                          id="radio3"
                          type="radio"
                          name="radio1"
                          value="option1"
                          disabled
                        />
                        <label for="radio3">Disabled</label>
                      </div>
                      <div className="radio radio-primary">
                        <input
                          id="radio4"
                          type="radio"
                          name="radio1"
                          value="option1"
                          defaultChecked
                        />
                        <label for="radio4">Checked</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <h5>Radio states</h5>
                  </div>
                  <div className="col">
                    <div className="form-group m-t-15 custom-radio-ml">
                      <div className="radio radio-primary">
                        <input
                          id="radio11"
                          type="radio"
                          name="radio2"
                          value="option1"
                        />
                        <label for="radio11">
                          Option<span className="digits"> 1</span>
                        </label>
                      </div>
                      <div className="radio radio-secondary">
                        <input
                          id="radio22"
                          type="radio"
                          name="radio2"
                          value="option1"
                        />
                        <label for="radio22">
                          Option<span className="digits"> 2</span>
                        </label>
                      </div>
                      <div className="radio radio-success">
                        <input
                          id="radio55"
                          type="radio"
                          name="radio2"
                          value="option1"
                        />
                        <label for="radio55">
                          Option<span className="digits"> 3</span>
                        </label>
                      </div>
                      <div className="radio radio-info">
                        <input
                          id="radio33"
                          type="radio"
                          name="radio2"
                          value="option1"
                          disabled
                        />
                        <label for="radio33">
                          Option<span className="digits"> 4</span>
                        </label>
                      </div>
                      <div className="radio radio-warning">
                        <input
                          id="radio44"
                          type="radio"
                          name="radio2"
                          value="option1"
                        />
                        <label for="radio44">
                          Option<span className="digits"> 5</span>
                        </label>
                      </div>
                      <div className="radio radio-danger">
                        <input
                          id="radio66"
                          type="radio"
                          name="radio2"
                          value="option1"
                          defaultChecked
                        />
                        <label for="radio66">
                          Option<span className="digits"> 6</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <h5>Inline checkbox</h5>
                  </div>
                  <div className="col">
                    <div className="form-group m-t-15 m-checkbox-inline mb-0 custom-radio-ml">
                      <div className="radio radio-primary">
                        <input
                          id="radioinline1"
                          type="radio"
                          name="radio3"
                          value="option1"
                        />
                        <label className="mb-0" for="radioinline1">
                          Option<span className="digits"> 1</span>
                        </label>
                      </div>
                      <div className="radio radio-primary">
                        <input
                          id="radioinline2"
                          type="radio"
                          name="radio3"
                          value="option1"
                        />
                        <label className="mb-0" for="radioinline2">
                          Option<span className="digits"> 2</span>
                        </label>
                      </div>
                      <div className="radio radio-primary">
                        <input
                          id="radioinline3"
                          type="radio"
                          name="radio3"
                          value="option1"
                          defaultChecked
                        />
                        <label className="mb-0" for="radioinline3">
                          Option<span className="digits"> 3</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5>Custom checkbox</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12">
                    <h5>Custom checkbox</h5>
                  </div>
                  <div className="col">
                    <div className="form-group m-t-15 ml-1">
                      <div className="checkbox">
                        <input id="checkbox1" type="checkbox" />
                        <label for="checkbox1">Default</label>
                      </div>
                      <div className="checkbox">
                        <input id="checkbox2" type="checkbox" disabled />
                        <label for="checkbox2">Disabled</label>
                      </div>
                      <div className="checkbox">
                        <input id="checkbox3" type="checkbox" defaultChecked />
                        <label for="checkbox3">Checked</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <h5>Checkbox states</h5>
                  </div>
                  <div className="col">
                    <div className="form-group m-t-15 ml-1">
                      <div className="checkbox checkbox-primary">
                        <input id="checkbox-primary-1" type="checkbox" />
                        <label for="checkbox-primary-1">Success state</label>
                      </div>
                      <div className="checkbox checkbox-secondary">
                        <input id="checkbox-dark" type="checkbox" disabled />
                        <label for="checkbox-dark">Brand state</label>
                      </div>
                      <div className="checkbox checkbox-success">
                        <input id="checkbox-primary" type="checkbox" />
                        <label for="checkbox-primary">primary state</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <h5>Inline checkbox</h5>
                  </div>
                  <div className="col">
                    <div className="form-group m-t-15 m-checkbox-inline mb-0 ml-1">
                      <div className="checkbox checkbox-dark">
                        <input id="inline-1" type="checkbox" />
                        <label for="inline-1">
                          Option<span className="digits"> 1</span>
                        </label>
                      </div>
                      <div className="checkbox checkbox-dark">
                        <input id="inline-2" type="checkbox" />
                        <label for="inline-2">
                          Option<span className="digits"> 2</span>
                        </label>
                      </div>
                      <div className="checkbox checkbox-dark">
                        <input id="inline-3" type="checkbox" />
                        <label for="inline-3">
                          Option<span className="digits"> 3</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5>Animated radio buttons</h5>
              </div>
              <div className="card-body animate-chk">
                <div className="row">
                  <div className="col">
                    <label className="d-block" for="edo-ani">
                      <input
                        className="radio_animated"
                        id="edo-ani"
                        type="radio"
                        name="rdo-ani"
                        defaultChecked
                      />
                      Option 1
                    </label>
                    <label className="d-block" for="edo-ani1">
                      <input
                        className="radio_animated"
                        id="edo-ani1"
                        type="radio"
                        name="rdo-ani"
                      />
                      Option 2
                    </label>
                    <label className="d-block" for="edo-ani2">
                      <input
                        className="radio_animated"
                        id="edo-ani2"
                        type="radio"
                        name="rdo-ani"
                        defaultChecked
                      />
                      Option 3
                    </label>
                    <label className="d-block" for="edo-ani13">
                      <input
                        className="radio_animated"
                        id="edo-ani13"
                        type="radio"
                        name="rdo-ani"
                      />
                      Option 4
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5>Animated checkbox buttons</h5>
              </div>
              <div className="card-body animate-chk">
                <div className="row">
                  <div className="col">
                    <label className="d-block" for="chk-ani">
                      <input
                        className="checkbox_animated"
                        id="chk-ani"
                        type="checkbox"
                        defaultChecked
                      />
                      Option 1
                    </label>
                    <label className="d-block" for="chk-ani1">
                      <input
                        className="checkbox_animated"
                        id="chk-ani1"
                        type="checkbox"
                      />
                      Option 2
                    </label>
                    <label className="d-block" for="chk-ani2">
                      <input
                        className="checkbox_animated"
                        id="chk-ani2"
                        type="checkbox"
                        defaultChecked
                      />
                      Option 3
                    </label>
                    <label className="d-block" for="chk-ani3">
                      <input
                        className="checkbox_animated"
                        id="chk-ani3"
                        type="checkbox"
                      />
                      Option 4
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5>Square checkbox</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="form-group ml-1">
                      <div className="checkbox checkbox-dark m-squar">
                        <input id="inline-sqr-1" type="checkbox" />
                        <label className="mt-0" htmlFor="inline-sqr-1">
                          Default
                        </label>
                      </div>
                      <div className="checkbox checkbox-dark m-squar">
                        <input id="inline-sqr-2" type="checkbox" disabled="" />
                        <label htmlFor="inline-sqr-2">Disabled</label>
                      </div>
                      <div className="checkbox checkbox-dark m-squar">
                        <input
                          id="inline-sqr-3"
                          type="checkbox"
                          defaultChecked
                        />
                        <label htmlFor="inline-sqr-3">checked</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <h5>Solid checkbox</h5>
                  </div>
                  <div className="col">
                    <div className="form-group m-t-15 mb-0  ml-1">
                      <div className="checkbox checkbox-solid-success">
                        <input id="solid1" type="checkbox" defaultChecked />
                        <label htmlFor="solid1">Default</label>
                      </div>
                      <div className="checkbox checkbox-solid-dark">
                        <input id="solid2" type="checkbox" disabled />
                        <label htmlFor="solid2">Disabled</label>
                      </div>
                      <div className="checkbox checkbox-solid-primary">
                        <input id="solid3" type="checkbox" defaultChecked />
                        <label htmlFor="solid3">checked</label>
                      </div>
                      <div className="checkbox checkbox-solid-danger">
                        <input id="solid4" type="checkbox" defaultChecked />
                        <label htmlFor="solid4">checked</label>
                      </div>
                      <div className="checkbox checkbox-solid-light">
                        <input id="solid5" type="checkbox" defaultChecked />
                        <label htmlFor="solid5">checked</label>
                      </div>
                      <div className="checkbox checkbox-solid-info">
                        <input id="solid6" type="checkbox" defaultChecked />
                        <label htmlFor="solid6">checked</label>
                      </div>
                      <div className="checkbox checkbox-solid-dark">
                        <input id="solid7" type="checkbox" defaultChecked />
                        <label className="mb-0" htmlFor="solid7">
                          checked
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default RadioCheckbox
