import React from 'react'
import logo from '../assets/images/lunch-poll-logo.svg'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { withRouter } from 'react-router'

import SlackSignIn from '../components/slack/SignIn'

const Signup = () => (
  <div>
    <div className="page-wrapper">
      <div className="container-fluid p-0">
        <div></div>
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
                      <a href="https://slack.com/oauth/v2/authorize?client_id=224182028598.1018140415783&scope=chat:write,commands,incoming-webhook,users:read&user_scope=chat:write,identify&state=signup">
                        <img
                          alt="Add to Slack"
                          height="40"
                          width="139"
                          src="https://platform.slack-edge.com/img/add_to_slack.png"
                          srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
                        />
                      </a>
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

export default withRouter(Signup)
