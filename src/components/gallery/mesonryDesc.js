import React, { Fragment } from 'react'
import Masonry from 'react-masonry-css'
import data from '../../data/gallery/imageData'
import Breadcrumb from '../common/breadcrumb'

const MesonryDesc = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }
  return (
    <Fragment>
      <Breadcrumb parent="Gallery" title="Masonry Gallery With Discription" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Masonry Gallery</h5>
              </div>
              <div className="card-body">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid masonry-with-dec"
                  columnClassName="my-masonry-grid_column"
                >
                  {data.map((element, index) => (
                    <li key={index}>
                      <img src={element.src} style={{ width: '100%' }} alt="" />
                      <div className="caption">
                        <h4>Portfolio Title</h4>
                        <p>
                          is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard
                          dummy.
                        </p>
                      </div>
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

export default MesonryDesc
