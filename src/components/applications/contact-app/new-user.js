import React, { Fragment, useState } from 'react'
import Breadcrumb from '../../common/breadcrumb'
import logo from '../../../assets/images/lunch-poll-logo.svg'
import user from '../../../assets/images/user/user.png'
import useForm from 'react-hook-form'
import { createUser } from '../../../services/contact.service'
const NewUser = (props) => {
  const [url, setUrl] = useState()
  const { register, handleSubmit, errors } = useForm() // initialise the hook

  const onSubmit = (data) => {
    if (data !== '') {
      createUser(data, url)
      props.history.push('/contact-app/contact')
    } else {
      errors.showMessages()
    }
  }

  const renderContact = () => {
    props.history.push('/contact-app/contact')
  }

  const readUrl = (event) => {
    if (event.target.files.length === 0) return
    //Image upload validation
    var mimeType = event.target.files[0].type

    if (mimeType.match(/image\/*/) == null) {
      return
    }
    // Image upload
    var reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (_event) => {
      setUrl(reader.result)
    }
  }

  return (
    <Fragment>
      <Breadcrumb title="New User" parent="Contact" />
      <div className="container-fluid">
        <div className="">
          <div className="authentication-box contact-profile-form">
            <div className="text-center">
              <img src={logo} alt="logo" />
            </div>
            <div className="card mt-4">
              <div className="card-body">
                <div className="text-center user-profile">
                  <div className="hovercard">
                    <div className="contact-profile">
                      <img
                        className="rounded-circle img-100"
                        src={url ? url : user}
                        alt=""
                      />
                      <div className="icon-wrapper">
                        <i className="icofont icofont-pencil-alt-5">
                          <input
                            className="upload"
                            type="file"
                            onChange={(e) => readUrl(e)}
                          />
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
                <form className="theme-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label className="col-form-label pt-0">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      ref={register({ required: true })}
                    />
                    {errors.name && 'First name is required'}
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Surname</label>
                    <input
                      className="form-control"
                      type="text"
                      name="surname"
                      ref={register({ required: true })}
                    />
                    {errors.surname && 'Last name is required'}
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Mobile</label>
                    <input
                      className="form-control"
                      type="number"
                      name="mobile"
                      ref={register({
                        pattern: /\d+/,
                        minlength: 0,
                        maxlength: 9,
                      })}
                    />
                    {errors.mobile && 'Please enter number max 9 digit'}
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Age</label>
                    <input
                      className="form-control"
                      type="number"
                      name="age"
                      ref={register({
                        required: true,
                        pattern: /\d+/,
                        min: 18,
                        max: 70,
                      })}
                    />
                    {errors.age && 'Please enter age between 18 to 70 year.'}
                  </div>
                  <div className="form-group form-row mt-3 mb-0">
                    <button className="btn btn-primary mr-2" type="submit">
                      {' '}
                      Submit
                    </button>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-original-title="btn btn-info-gradien"
                      title=""
                      onClick={renderContact}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default NewUser
