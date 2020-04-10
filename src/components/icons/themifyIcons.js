import React, { Fragment, useState } from 'react'
import Breadcrumb from '../common/breadcrumb'
import data from '../../data/icons/themifyData'
import IconMarkUp from './icon-markup'

const ThemifyIcons = () => {
  const [iTag, setiTag] = useState('')
  const [icon, setIcon] = useState('')

  const getItag = (tag) => {
    setiTag({
      iTag: '<i className= "' + tag + '"></i>',
    })
    setIcon({
      icon: '' + tag + ' fa-5x',
    })
  }
  return (
    <Fragment>
      <Breadcrumb title="Themify" parent="Icons" />

      <div className="container-fluid">
        {data.map((icons, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="m-b-0">
                      <span className="digits">Arrows & Direction</span> Icons
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="row icon-lists">
                      {icons.directional.map((icon, i) => {
                        return (
                          <div
                            className="col-sm-6 col-lg-4"
                            key={i}
                            onClick={(e) => getItag(icon)}
                          >
                            <i className={`${icon}`}></i> {icon}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="m-b-0">
                      <span className="digits">Web App</span> Icons
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="row icon-lists">
                      {icons.webapp.map((icon, i) => {
                        return (
                          <div
                            className="col-sm-6 col-lg-4"
                            key={i}
                            onClick={(e) => getItag(icon)}
                          >
                            <i className={`${icon}`}></i> {icon}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="m-b-0">
                      <span className="digits">Control</span> Icons
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="row icon-lists">
                      {icons.control.map((icon, i) => {
                        return (
                          <div
                            className="col-sm-6 col-lg-4"
                            key={i}
                            onClick={(e) => getItag(icon)}
                          >
                            <i className={`${icon}`}></i> {icon}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="m-b-0">
                      <span className="digits">Text Editor</span> Icons
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="row icon-lists">
                      {icons.texteditor.map((icon, i) => {
                        return (
                          <div
                            className="col-sm-6 col-lg-4"
                            key={i}
                            onClick={(e) => getItag(icon)}
                          >
                            <i className={`${icon}`}></i> {icon}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="m-b-0">
                      <span className="digits">Brand</span> Icons
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="row icon-lists">
                      {icons.brand.map((icon, i) => {
                        return (
                          <div
                            className="col-sm-6 col-lg-4"
                            key={i}
                            onClick={(e) => getItag(icon)}
                          >
                            <i className={`${icon}`}></i> {icon}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <IconMarkUp itag={iTag} icons={icon} />
    </Fragment>
  )
}

export default ThemifyIcons
