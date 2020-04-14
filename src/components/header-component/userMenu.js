import React, { Fragment, useState, useEffect } from 'react'
import man from '../../assets/images/dashboard/user.png'
import { CreditCard, DollarSign, Settings, LogOut } from 'react-feather'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const UserMenu = ({ history }) => {
  const [profile, setProfile] = useState('')

  useEffect(() => {
    setProfile(localStorage.getItem('profileURL') || man)
  }, [])

  const logOut = () => {
    localStorage.removeItem('profileURL')
    console.log('signout!')
    history.push(`${process.env.PUBLIC_URL}/login`)
  }

  return (
    <Fragment>
      <li className="onhover-dropdown">
        <div className="media align-items-center">
          <img
            className="align-self-center pull-right rounded-circle blur-up lazyloaded"
            src={profile}
            alt="header-user"
          />
          {/* <div className="dotted-animation">
            <span className="animate-circle"></span>
            <span className="main-circle"></span>
          </div> */}
        </div>
        <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
          <li>
            <Link to={`${process.env.PUBLIC_URL}/users/userEdit`}>
              <Settings />
              Settings
            </Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/price/pricing`}>
              <DollarSign />
              Pricing
            </Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/ecommerce/payment`}>
              <CreditCard />
              Billing
            </Link>
          </li>
          <li>
            <a onClick={logOut} href="#!">
              <LogOut /> Log out
            </a>
          </li>
        </ul>
      </li>
    </Fragment>
  )
}

export default withRouter(UserMenu)
