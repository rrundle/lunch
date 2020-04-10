import React, { Fragment } from 'react'
import Masonry from 'react-masonry-css'
import data from '../../data/gallery/imageData'
import Breadcrumb from '../common/breadcrumb'

const MesonryGallery = () => {
  return (
    <Fragment>
      <Breadcrumb parent="Gallery" title="Masonry Gallery" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Masonry Gallery</h5>
              </div>
              <div className="card-body">
                <Masonry
                  breakpointCols={3}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {data.map((element, index) => (
                    <li key={index}>
                      <img src={element.src} style={{ width: '100%' }} alt="" />
                    </li>
                  ))}
                </Masonry>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default MesonryGallery
