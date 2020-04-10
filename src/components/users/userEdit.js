import React, { Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb'
import seven from '../../assets/images/user/7.jpg'
const UserEdit = () => {
  return (
    <Fragment>
      <Breadcrumb parent="User" title="Edit Profile" />
      <div className="container-fluid">
        <div className="edit-profile">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">My Profile</h4>
                  <div className="card-options">
                    <a
                      className="card-options-collapse"
                      href="javascript"
                      data-toggle="card-collapse"
                    >
                      <i className="fe fe-chevron-up"></i>
                    </a>
                    <a
                      className="card-options-remove"
                      href="javascript"
                      data-toggle="card-remove"
                    >
                      <i className="fe fe-x"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row mb-2">
                      <div className="col-auto">
                        <img
                          className="img-70 rounded-circle"
                          alt=""
                          src={seven}
                        />
                      </div>
                      <div className="col">
                        <h3 className="mb-1">MARK JECNO</h3>
                        <p className="mb-4">DESIGNER</p>
                      </div>
                    </div>
                    <div className="form-group">
                      <h6 className="form-label">Bio</h6>
                      <textarea
                        className="form-control"
                        rows="5"
                        defaultValue="On the other hand, we denounce with righteous indignation"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email-Address</label>
                      <input
                        className="form-control"
                        placeholder="your-email@domain.com"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Password</label>
                      <input
                        className="form-control"
                        type="password"
                        defaultValue="password"
                        readOnly
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Website</label>
                      <input
                        className="form-control"
                        placeholder="http://Uplor .com"
                      />
                    </div>
                    <div className="form-footer">
                      <button className="btn btn-primary btn-block">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <form className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Edit Profile</h4>
                  <div className="card-options">
                    <a
                      className="card-options-collapse"
                      href="javascript"
                      data-toggle="card-collapse"
                    >
                      <i className="fe fe-chevron-up"></i>
                    </a>
                    <a
                      className="card-options-remove"
                      href="javascript"
                      data-toggle="card-remove"
                    >
                      <i className="fe fe-x"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="form-group">
                        <label className="form-label">Company</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Company"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <div className="form-group">
                        <label className="form-label">Username</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="form-group">
                        <label className="form-label">Email address</label>
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Company"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-label">Address</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Home Address"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="form-group">
                        <label className="form-label">City</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="City"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <div className="form-group">
                        <label className="form-label">Postal Code</label>
                        <input
                          className="form-control"
                          type="number"
                          placeholder="ZIP Code"
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="form-group">
                        <label className="form-label">Country</label>
                        <select className="form-control btn-square">
                          <option value="0">--Select--</option>
                          <option value="1">Germany</option>
                          <option value="2">Canada</option>
                          <option value="3">Usa</option>
                          <option value="4">Aus</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <label className="form-label">About Me</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Enter About your description"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-right">
                  <button className="btn btn-primary" type="submit">
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Add projects And Upload</h4>
                  <div className="card-options">
                    <a
                      className="card-options-collapse"
                      href="javascript"
                      data-toggle="card-collapse"
                    >
                      <i className="fe fe-chevron-up"></i>
                    </a>
                    <a
                      className="card-options-remove"
                      href="javascript"
                      data-toggle="card-remove"
                    >
                      <i className="fe fe-x"></i>
                    </a>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table card-table table-vcenter text-nowrap">
                    <thead>
                      <tr>
                        <th>Project Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a className="text-inherit" href="javascript">
                            Untrammelled prevents{' '}
                          </a>
                        </td>
                        <td>28 May 2018</td>
                        <td>
                          <span className="status-icon bg-success"></span>{' '}
                          Completed
                        </td>
                        <td>$56,908</td>
                        <td className="text-right">
                          <button
                            className="btn btn-primary btn-sm"
                            href="javascript"
                          >
                            <i className="fa fa-pencil"></i> Edit
                          </button>
                          <button
                            className="btn btn-transparent btn-sm"
                            href="javascript"
                          >
                            <i className="fa fa-link"></i> Update
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            href="javascript"
                          >
                            <i className="fa fa-trash"></i> Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a className="text-inherit" href="javascript">
                            Untrammelled prevents
                          </a>
                        </td>
                        <td>12 June 2018</td>
                        <td>
                          <span className="status-icon bg-danger"></span> On
                          going
                        </td>
                        <td>$45,087</td>
                        <td className="text-right">
                          <button
                            className="btn btn-primary btn-sm"
                            href="javascript"
                          >
                            <i className="fa fa-pencil"></i> Edit
                          </button>
                          <button
                            className="btn btn-transparent btn-sm"
                            href="javascript"
                          >
                            <i className="fa fa-link"></i> Update
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            href="javascript"
                          >
                            <i className="fa fa-trash"></i> Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a className="text-inherit" href="javascript">
                            Untrammelled prevents
                          </a>
                        </td>
                        <td>12 July 2018</td>
                        <td>
                          <span className="status-icon bg-warning"></span>{' '}
                          Pending
                        </td>
                        <td>$60,123</td>
                        <td className="text-right">
                          <button
                            className="btn btn-primary btn-sm"
                            href="javascript"
                          >
                            <i className="fa fa-pencil"></i> Edit
                          </button>
                          <button
                            className="btn btn-transparent btn-sm"
                            href="javascript"
                          >
                            <i className="fa fa-link"></i> Update
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            href="javascript"
                          >
                            <i className="fa fa-trash"></i> Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a className="text-inherit" href="javascript">
                            Untrammelled prevents
                          </a>
                        </td>
                        <td>14 June 2018</td>
                        <td>
                          <span className="status-icon bg-warning"></span>{' '}
                          Pending
                        </td>
                        <td>$70,435</td>
                        <td className="text-right">
                          <button
                            className="btn btn-primary btn-sm"
                            href="javascript"
                          >
                            <i className="fa fa-pencil"></i> Edit
                          </button>
                          <button
                            className="btn btn-transparent btn-sm"
                            href="javascript"
                          >
                            <i className="fa fa-link"></i> Update
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            href="javascript"
                          >
                            <i className="fa fa-trash"></i> Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a className="text-inherit" href="javascript">
                            Untrammelled prevents
                          </a>
                        </td>
                        <td>25 June 2018</td>
                        <td>
                          <span className="status-icon bg-success"></span>{' '}
                          Completed
                        </td>
                        <td>$15,987</td>
                        <td className="text-right">
                          <button
                            className="btn btn-primary btn-sm"
                            href="javascript"
                          >
                            <i className="fa fa-pencil"></i> Edit
                          </button>
                          <button
                            className="btn btn-transparent btn-sm"
                            href="javascript"
                          >
                            <i className="fa fa-link"></i> Update
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            href="javascript"
                          >
                            <i className="fa fa-trash"></i> Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default UserEdit
