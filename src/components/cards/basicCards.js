import React, { Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb'

const BasicCards = () => {
  return (
    <Fragment>
      <Breadcrumb title="Basic Card" parent="Card" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>Basic Card</h5>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  {' '}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card b-r-0">
              <div className="card-header">
                <h5>Flat Card</h5>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  {' '}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card shadow-0 border">
              <div className="card-header">
                <h5>Without shadow Card</h5>
              </div>
              <div className="card-body">
                <p>
                  {' '}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>
                  <i className="icofont icofont-truck mr-2"></i> Icon in Heading
                </h5>
              </div>
              <div className="card-body">
                <p>
                  {' '}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card height-equal">
              <div className="card-header">
                <h5>Card sub Title</h5>
                <span>
                  Using the <a href="#javascript">card</a> component, you can
                  extend the default collapse behavior to create an accordion.
                </span>
              </div>
              <div className="card-body">
                <p>
                  {' '}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card height-equal">
              <div className="card-header">
                <h5>Card With Footer</h5>
              </div>
              <div className="card-body">
                <p>
                  {' '}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the the industry's
                  standard dummy text ever.{' '}
                </p>
              </div>
              <div className="card-footer">
                <h6 className="mb-0">Card Footer</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header bg-primary">
                <h5>Primary Color Card</h5>
              </div>
              <div className="card-body bg-primary">
                <p className="mb-0">
                  {' '}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the.{' '}
                </p>
              </div>
              <div className="card-footer bg-primary">
                <h6 className="mb-0">Card Footer</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header bg-secondary">
                <h5>Secondary Color Card</h5>
              </div>
              <div className="card-body bg-secondary">
                <p className="mb-0">
                  {' '}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the.{' '}
                </p>
              </div>
              <div className="card-footer bg-secondary">
                <h6 className="mb-0">Card Footer</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header bg-success">
                <h5>Success color Card</h5>
              </div>
              <div className="card-body bg-success">
                <p className="mb-0">
                  {' '}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the.{' '}
                </p>
              </div>
              <div className="card-footer bg-success">
                <h6 className="mb-0">Card Footer</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header bg-primary">
                <h5>Primary Color Header</h5>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  {' '}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the.{' '}
                </p>
              </div>
              <div className="card-footer">
                <h6 className="mb-0">Card Footer</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>Primary Color Body</h5>
              </div>
              <div className="card-body bg-primary">
                <p className="mb-0">
                  {' '}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the.{' '}
                </p>
              </div>
              <div className="card-footer">
                <h6 className="mb-0">Card Footer</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>Primary Color Footer</h5>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  {' '}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the.{' '}
                </p>
              </div>
              <div className="card-footer bg-primary">
                <h6 className="mb-0">Card Footer</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default BasicCards
