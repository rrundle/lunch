import React, { Fragment } from 'react'
import Breadcrumb from '../../common/breadcrumb'
import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import options from '../../../data/typeaheadData'
import TypeaheadOne from './typeahead-one'

const TypeaheadComp = () => {
  const multiple = false

  return (
    <Fragment>
      <Breadcrumb parent="Base" title="Typeahead" />
      <div className="container-fluid">
        <div className="typeahead">
          <div className="row">
            <div className="col-sm-12 col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5>Basic Demo</h5>
                  <span>This is the simple demo for Typeahead.</span>
                </div>
                <div className="card-body">
                  <div id="the-basics">
                    <form className="theme-form">
                      <div className="form-group">
                        <Typeahead
                          id="basic-typeahead"
                          labelKey="name"
                          multiple={multiple}
                          options={options}
                          placeholder="Choose a state..."
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5>Multiple Selections</h5>
                </div>
                <div className="card-body">
                  <div id="prefetch">
                    <form className="theme-form">
                      <div className="form-group">
                        <Typeahead
                          id="multiple-typeahead"
                          clearButton
                          defaultSelected={options.slice(0, 5)}
                          labelKey="name"
                          multiple
                          options={options}
                          placeholder="Choose a state..."
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5>Custom Selections</h5>
                </div>
                <div className="card-body">
                  <div id="bloodhound">
                    <form className="theme-form">
                      <div className="form-group">
                        <Typeahead
                          id="custom-typeahead"
                          allowNew
                          multiple
                          newSelectionPrefix="Add a new item: "
                          options={[]}
                          placeholder="Type anything..."
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5>Remote</h5>
                  <span>
                    Remote data is only used when the data provided by local and
                    prefetch is insufficient
                  </span>
                </div>
                <div className="card-body">
                  <div id="remote">
                    <form className="theme-form">
                      <div className="form-group">
                        <TypeaheadOne />
                      </div>
                    </form>
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

export default TypeaheadComp
