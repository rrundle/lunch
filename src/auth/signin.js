import React from 'react'
import logo from '../assets/images/lunch-poll-logo.svg'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { withRouter } from 'react-router'

import SlackSignIn from '../components/slack/SignIn'

const Signin = () => (
  <div>
    <div className="page-wrapper">
      <div className="container-fluid p-0">
        {/* <!-- login page start--> */}
        <div className="authentication-main">
          <div className="row">
            <div className="col-md-12">
              <div className="auth-innerright">
                <div className="authentication-box">
                  <div className="text-center">
                    <img src={logo} alt="" />
                  </div>
                  <div className="card mt-4 login-card">
                    <div className="card-body">
                      <SlackSignIn />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
        {/* <!-- login page end--> */}
      </div>
    </div>
  </div>
)

export default withRouter(Signin)
