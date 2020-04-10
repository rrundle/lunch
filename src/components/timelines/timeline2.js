import React, { Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb'
import FeatherComponent from '../common/featherComponent'

const Timeline2 = () => {
  return (
    <Fragment>
      <Breadcrumb title="Timeline 2" parent="Timeline" />
      <div className="container-fluid">
        <div className="row timeline-custom">
          <div className="col-xl-4 xl-50">
            <div className="card">
              <div className="card-header">
                <h5>Timeline Primary color</h5>
              </div>
              <div className="card-body">
                <div className="timeline-small">
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-primary">
                      <FeatherComponent dataFeather="shopping-bag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Sale <span className="pull-right f-14">New</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-primary">
                      <FeatherComponent dataFeather="message-circle" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Message{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 small-line bg-primary">
                      <FeatherComponent dataFeather="minus-circle" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Report{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>Lorem Ipsum is simply dummy text.</p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-primary">
                      <FeatherComponent dataFeather="shopping-bag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Sale{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 medium-line bg-primary">
                      <FeatherComponent dataFeather="tag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Visits{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 xl-50">
            <div className="card">
              <div className="card-header">
                <h5>Timeline secondary color</h5>
              </div>
              <div className="card-body">
                <div className="timeline-small">
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-secondary">
                      <FeatherComponent dataFeather="shopping-bag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Sale <span className="pull-right f-14">New</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-secondary">
                      <FeatherComponent dataFeather="message-circle" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Message{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 small-line bg-secondary">
                      <FeatherComponent dataFeather="message-circle" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Report{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>Lorem Ipsum is simply dummy text.</p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-secondary">
                      <FeatherComponent dataFeather="shopping-bag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Sale{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 medium-line bg-secondary">
                      <FeatherComponent dataFeather="tag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Visits{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 xl-50">
            <div className="card">
              <div className="card-header">
                <h5>Timeline Success color</h5>
              </div>
              <div className="card-body">
                <div className="timeline-small">
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-success">
                      <FeatherComponent dataFeather="shopping-bag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Sale <span className="pull-right f-14">New</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-success">
                      <FeatherComponent dataFeather="message-circle" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Message{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 small-line bg-success">
                      <FeatherComponent dataFeather="message-circle" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Report{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>Lorem Ipsum is simply dummy text.</p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-success">
                      <FeatherComponent dataFeather="shopping-bag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Sale{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 medium-line bg-success">
                      <FeatherComponent dataFeather="tag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Visits{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 xl-50">
            <div className="card">
              <div className="card-header">
                <h5>Timeline Info color</h5>
              </div>
              <div className="card-body">
                <div className="timeline-small">
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-info">
                      <FeatherComponent dataFeather="shopping-bag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Sale <span className="pull-right f-14">New</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-info">
                      <FeatherComponent dataFeather="message-circle" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Message{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 small-line bg-info">
                      <FeatherComponent dataFeather="message-circle" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Report{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>Lorem Ipsum is simply dummy text.</p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-info">
                      <FeatherComponent dataFeather="shopping-bag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Sale{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 medium-line bg-info">
                      <FeatherComponent dataFeather="tag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Visits{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 xl-50">
            <div className="card">
              <div className="card-header">
                <h5>Timeline Warning color</h5>
              </div>
              <div className="card-body">
                <div className="timeline-small">
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-warning">
                      <FeatherComponent dataFeather="shopping-bag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Sale <span className="pull-right f-14">New</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-warning">
                      <FeatherComponent dataFeather="message-circle" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Message{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 small-line bg-warning">
                      <FeatherComponent dataFeather="minus-circle" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Report{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>Lorem Ipsum is simply dummy text.</p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-warning">
                      <FeatherComponent dataFeather="shopping-bag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Sale{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 medium-line bg-warning">
                      <FeatherComponent dataFeather="tag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Visits{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 xl-50">
            <div className="card">
              <div className="card-header">
                <h5>Timeline Danger color</h5>
              </div>
              <div className="card-body">
                <div className="timeline-small">
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-danger">
                      <FeatherComponent dataFeather="shopping-bag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Sale <span className="pull-right f-14">New</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-danger">
                      <FeatherComponent dataFeather="minus-circle" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Message{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 small-line bg-danger">
                      <FeatherComponent dataFeather="minus-circle" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Report{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>Lorem Ipsum is simply dummy text.</p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 timeline-line-1 bg-danger">
                      <FeatherComponent dataFeather="shopping-bag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Sale{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="timeline-round m-r-30 medium-line bg-danger">
                      <FeatherComponent dataFeather="tag" />
                    </div>
                    <div className="media-body">
                      <h6>
                        New Visits{' '}
                        <span className="pull-right f-14">14m Ago</span>
                      </h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.Lorem Ipsum has been the industry.
                      </p>
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

export default Timeline2
