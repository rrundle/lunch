import React, { Fragment, useState } from 'react'
import Breadcrumb from '../common/breadcrumb'
import data from '../../data/icons/featherData'
import IconMarkUp from './icon-markup'
import FeatherComponent from '../common/featherComponent'

const FeatherIcons = () => {
  const [iTag, setiTag] = useState('')
  const [icon, setIcon] = useState('')
  const getItag = (tag) => {
    setiTag({
      iTag: '<i data-feather="' + tag + '"></i>',
    })
    setIcon({
      icon: tag,
    })
  }
  return (
    <Fragment>
      <Breadcrumb title="Feather" parent="Icons" />

      <div className="container-fluid">
        {data.map((icons, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="m-b-0">
                      <span className="digits">Feather</span> Icons
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="row icon-lists feather-icons">
                      {icons.feather_icons.map((icon, i) => {
                        return (
                          <div
                            className="col-12 col-sm-6 col-xl-4"
                            key={i}
                            onClick={(e) => getItag(icon)}
                          >
                            <div className="media">
                              <FeatherComponent
                                dataFeather={icon}
                              ></FeatherComponent>
                              <div className="media-body align-self-center">
                                <h6 className="mt-0">{icon}</h6>
                              </div>
                            </div>
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

export default FeatherIcons
