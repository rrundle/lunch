import React, { useEffect, Fragment, useState } from 'react'
import Breadcrumb from '../../common/breadcrumb'
import search from '../../../assets/images/search-not-found.png'
import userDemoPic from '../../../assets/images/user/user.png'
import { deletedUser } from '../../../services/contact.service'

const ContactApp = (props) => {
  const searchValue = ''
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers([
      {
        id: 1,
        name: 'Ryan',
        surname: 'Rundle',
        mobile: '626.840.2294',
        age: 37,
      },
    ])
  }, [])

  const deleteUser = (userId) => {
    deletedUser(userId)
  }

  const handleSearchKeyword = (keyword) => {
    console.log('keyword: ', keyword)
  }

  const redirectUrl = () => {
    props.history.push(`${process.env.PUBLIC_URL}/contact-app/new-user`)
  }

  const editContact = (user) => {
    props.history.push(
      `${process.env.PUBLIC_URL}/contact-app/edit-user/${user.id}`,
    )
  }
  return (
    <Fragment>
      <Breadcrumb title="Contact App" parent="Contact App" />
      <div className="container-fluid product-wrapper">
        <div className="product-grid">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-xl-6">
                  <form className="search-form contact-search">
                    <div className="form-group mb-0">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="search"
                        defaultValue={searchValue}
                        onChange={(e) => handleSearchKeyword(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
                <div className="col-xl-6">
                  <div className="contact-filter pull-right">
                    <button
                      className="btn btn-primary ml-4"
                      onClick={redirectUrl}
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-wrapper-grid">
            <div className="row">
              {!!users.length ? (
                <div className="col-sm-12">
                  <div className="card">
                    <div className="product-box table-responsive contact-table">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>
                              <h5 className="mb-0">Profile</h5>
                            </th>
                            <th>
                              <h5 className="mb-0">Name</h5>
                            </th>
                            <th>
                              <h5 className="mb-0">Surname</h5>
                            </th>
                            <th>
                              <h5 className="mb-0">Mobile</h5>
                            </th>
                            <th colSpan="2">
                              <h5 className="mb-0">Age</h5>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <img
                                    className="img-60 rounded-circle"
                                    src={
                                      user.avatar ? user.avatar : userDemoPic
                                    }
                                    alt="#"
                                  />
                                </td>
                                <td>
                                  <h6>{user.name}</h6>
                                </td>
                                <td>
                                  <h6>{user.surname}</h6>
                                </td>
                                <td>
                                  <h6>{user.mobile}</h6>
                                </td>
                                <td>
                                  <h6>{user.age}</h6>
                                </td>
                                <td>
                                  <button
                                    className="btn btn-primary mr-2"
                                    onClick={() => editContact(user)}
                                  >
                                    Edit
                                  </button>
                                  <button
                                    className="btn btn-secondary"
                                    onClick={() => deleteUser(user.id)}
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-sm-12">
                  <div>
                    <div className="search-not-found text-center">
                      <div>
                        <img src={search} alt="" className="second-search" />
                        <p className="mb-0">
                          Sorry, We didn't find any results matching this search
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ContactApp
