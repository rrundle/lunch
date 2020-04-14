import React, { Fragment } from 'react'
import logo from '../../assets/images/lunch-poll-logo.svg'
import UserMenu from './userMenu'
import Notification from './notification'
import { Link } from 'react-router-dom'
import { Bell } from 'react-feather'

const Header = () => (
  <Fragment>
    <div className="page-main-header">
      <div className="main-header-right row">
        <div className="mobile-sidebar d-block">
          <div className="media-body text-right switch-sm">
            <div className="logo-wrapper-full compactLogo">
              <Link to="/dashboard/default">
                <img
                  className="blur-up lazyloaded dashboard-logo"
                  src={logo}
                  alt=""
                />
                <img
                  className="blur-up lazyloaded dashboard-logo"
                  src={logo}
                  alt=""
                />
              </Link>
              <div className="logo-text">Lunch Poll</div>
            </div>
          </div>
        </div>
        <div className="nav-right col p-0">
          <ul className={'nav-menus open'}>
            <li className="onhover-dropdown">
              <Notification />
              <Bell />
              {/* <span className="dot"></span> */}
              <Notification />
            </li>
            {/* <li>
              <a href="javascript" onClick={showRightSidebar}>
                <MessageCircle />
                <span className="dot"></span>
              </a>
            </li> */}
            <UserMenu />
          </ul>
          {/* <div
            className="d-lg-none mobile-toggle pull-right"
            onClick={() => setHeaderbar(!headerbar)}
          >
            <MoreHorizontal />
          </div> */}
        </div>
        <script id="result-template" type="text/x-handlebars-template">
          <div className="ProfileCard u-cf">
            <div className="ProfileCard-avatar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-airplay m-0"
              >
                <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                <polygon points="12 15 17 21 7 21 12 15"></polygon>
              </svg>
            </div>
            <div className="ProfileCard-details">
              <div className="ProfileCard-realName"></div>
            </div>
          </div>
        </script>
        <script id="empty-template" type="text/x-handlebars-template">
          <div className="EmptyMessage">
            Your search turned up 0 results. This most likely means the backend
            is down, yikes!
          </div>
        </script>
      </div>
    </div>
  </Fragment>
)

export default Header
