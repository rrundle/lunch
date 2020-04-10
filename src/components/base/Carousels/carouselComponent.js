import React, { Fragment } from 'react'
import Breadcrumb from '../../common/breadcrumb'
import CarouselOne from './carouselOne'
import CarouselThree from './carouselThree'
import CarouselTwo from './carouselTwo'

const carouselComponent = () => {
  return (
    <Fragment>
      <Breadcrumb title="Carousel" parent="Base" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>Carousel</h5>
              </div>
              <div className="card-body">
                <CarouselOne />
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>Uncontrolled Carousel</h5>
              </div>
              <div className="card-body">
                <CarouselTwo />
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-xl-6 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>Carousel using a tag and classname</h5>
              </div>
              <div className="card-body">
                <CarouselThree />
                <hr />
                <div
                  className="btn-showcase"
                  role="group"
                  aria-label="Carousel toggle controls"
                >
                  {/* <button type="button" (click)="showNavigationArrows = !showNavigationArrows"
              className="btn btn-outline-primary btn-sm mr-1">Toggle navigation arrows</button>
            <button type="button" (click)="showNavigationIndicators = !showNavigationIndicators"
              className="btn btn-outline-primary btn-sm">Toggle navigation indicators</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default carouselComponent
