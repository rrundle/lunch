import React from 'react'
import Header from './header-component/header'
import Footer from './footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loader from './loader'

const AppLayout = ({ children }) => (
  <div>
    <Loader />
    <div className="page-wrapper">
      <div className="page-body-wrapper">
        <Header />
        <div className="page-body">{children}</div>
        <Footer />
      </div>
    </div>
    <ToastContainer />
  </div>
)

export default AppLayout
