import React, { Fragment, useState } from 'react'
import Breadcrumb from '../common/breadcrumb'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

const TabCard = () => {
  const [activeTab, setActiveTab] = useState('1')
  const [activeTab2, setActiveTab2] = useState('1')
  const [activeTab3, setActiveTab3] = useState('1')
  const [activeTab4, setActiveTab4] = useState('1')
  const [activeTab5, setActiveTab5] = useState('1')
  const [activeTab6, setActiveTab6] = useState('1')
  const [activeTab7, setActiveTab7] = useState('1')
  const [activeTab8, setActiveTab8] = useState('1')

  return (
    <Fragment>
      <Breadcrumb title="Tabbed Card" parent="Card" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-xl-6 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>Simple Tab</h5>
              </div>
              <div className="card-body tabbed-card">
                <Nav tabs className="nav-pills nav-primary">
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab === '1' ? 'active' : ''}
                      onClick={() => setActiveTab('1')}
                    >
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab === '2' ? 'active' : ''}
                      onClick={() => setActiveTab('2')}
                    >
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab === '3' ? 'active' : ''}
                      onClick={() => setActiveTab('3')}
                    >
                      Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </p>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>Tabs With Icon </h5>
              </div>
              <div className="card-body tabbed-card">
                <Nav tabs className="nav-pills nav-primary">
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab2 === '1' ? 'active' : ''}
                      onClick={() => setActiveTab2('1')}
                    >
                      <i className="icofont icofont-ui-home"></i> Home
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab2 === '2' ? 'active' : ''}
                      onClick={() => setActiveTab2('2')}
                    >
                      <i className="icofont icofont-man-in-glasses"></i>Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab2 === '3' ? 'active' : ''}
                      onClick={() => setActiveTab2('3')}
                    >
                      <i className="icofont icofont-contacts"></i>Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab2}>
                  <TabPane tabId="1">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </p>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6 xl-100">
            <div className="card height-equal">
              <div className="card-header">
                <h5>Color Tab</h5>
              </div>
              <div className="card-body tabbed-card">
                <Nav tabs className="nav-pills nav-primary">
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab3 === '1' ? 'active' : ''}
                      onClick={() => setActiveTab3('1')}
                    >
                      <i className="icofont icofont-ui-home"></i> Home
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab3 === '2' ? 'active' : ''}
                      onClick={() => setActiveTab3('2')}
                    >
                      <i className="icofont icofont-man-in-glasses"></i> Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab3 === '3' ? 'active' : ''}
                      onClick={() => setActiveTab3('3')}
                    >
                      <i className="icofont icofont-contacts"></i> Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab3}>
                  <TabPane tabId="1">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy , but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum
                    </p>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>Color Option</h5>
              </div>
              <div className="card-body tabbed-card">
                <Nav tabs className="nav-pills nav-secondary">
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab4 === '1' ? 'active' : ''}
                      onClick={() => setActiveTab4('1')}
                    >
                      <i className="icofont icofont-ui-home"></i> Home
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab4 === '2' ? 'active' : ''}
                      onClick={() => setActiveTab4('2')}
                    >
                      <i className="icofont icofont-man-in-glasses"></i> Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab4 === '3' ? 'active' : ''}
                      onClick={() => setActiveTab4('3')}
                    >
                      <i className="icofont icofont-contacts"></i> Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab4}>
                  <TabPane tabId="1">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy , but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum
                    </p>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>Material Tab With Color</h5>
              </div>
              <div className="card-body tabbed-card">
                <Nav tabs className="borderb-tab-primary">
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab5 === '1' ? 'active' : ''}
                      onClick={() => setActiveTab5('1')}
                    >
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab5 === '2' ? 'active' : ''}
                      onClick={() => setActiveTab5('2')}
                    >
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab5 === '3' ? 'active' : ''}
                      onClick={() => setActiveTab5('3')}
                    >
                      Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab5}>
                  <TabPane tabId="1">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy , but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum
                    </p>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>Material Tab With Icon </h5>
              </div>
              <div className="card-body tabbed-card">
                <Nav tabs className="borderb-tab-primary">
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab6 === '1' ? 'active' : ''}
                      onClick={() => setActiveTab6('1')}
                    >
                      <i className="icofont icofont-ui-home"></i> Home
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab6 === '2' ? 'active' : ''}
                      onClick={() => setActiveTab6('2')}
                    >
                      <i className="icofont icofont-man-in-glasses"></i>Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab6 === '3' ? 'active' : ''}
                      onClick={() => setActiveTab6('3')}
                    >
                      <i className="icofont icofont-contacts"></i>Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab6}>
                  <TabPane tabId="1">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy , but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum
                    </p>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>Material Tab With Color</h5>
              </div>
              <div className="card-body tabbed-card">
                <Nav tabs className="borderb-tab-secondary">
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab7 === '1' ? 'active' : ''}
                      onClick={() => setActiveTab7('1')}
                    >
                      <i className="icofont icofont-ui-home"></i> Home
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab7 === '2' ? 'active' : ''}
                      onClick={() => setActiveTab7('2')}
                    >
                      <i className="icofont icofont-man-in-glasses"></i>Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab7 === '3' ? 'active' : ''}
                      onClick={() => setActiveTab7('3')}
                    >
                      <i className="icofont icofont-contacts"></i>Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab7}>
                  <TabPane tabId="1">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy , but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum
                    </p>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>Color Option</h5>
              </div>
              <div className="card-body tabbed-card">
                <Nav tabs className="borderb-tab-success">
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab8 === '1' ? 'active' : ''}
                      onClick={() => setActiveTab8('1')}
                    >
                      <i className="icofont icofont-ui-home"></i> Home
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab8 === '2' ? 'active' : ''}
                      onClick={() => setActiveTab8('2')}
                    >
                      <i className="icofont icofont-man-in-glasses"></i>Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab8 === '3' ? 'active' : ''}
                      onClick={() => setActiveTab8('3')}
                    >
                      <i className="icofont icofont-contacts"></i>Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab8}>
                  <TabPane tabId="1">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy , but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum
                    </p>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default TabCard
