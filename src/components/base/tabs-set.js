import React, { Fragment, useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import Breadcrumb from '../common/breadcrumb'

const TabsSet = () => {
  const [activeTab, setActiveTab] = useState('1')
  const [activeTab1, setActiveTab1] = useState('1')
  const [activeTab2, setActiveTab2] = useState('1')
  const [activeTab3, setActiveTab3] = useState('1')
  const [activeTab4, setActiveTab4] = useState('1')
  const [activeTab5, setActiveTab5] = useState('1')
  const [activeTab6, setActiveTab6] = useState('1')
  const [activeTab7, setActiveTab7] = useState('1')
  const [activeTab8, setActiveTab8] = useState('1')
  const [activeTab9, setActiveTab9] = useState('1')
  const [activeTab10, setActiveTab10] = useState('1')
  const [activeTab11, setActiveTab11] = useState('1')
  const [activeTab12, setActiveTab12] = useState('1')
  const [activeTab13, setActiveTab13] = useState('1')
  return (
    <Fragment>
      <Breadcrumb title="Tabs" parent="Base" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-xl-6 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>Basic Tabs</h5>
              </div>
              <div className="card-body">
                <Nav tabs className="border-tab-primary">
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
                    <p className="mb-0 m-t-30">
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
                    <p className="mb-0 m-t-30">
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
                    <p className="mb-0 m-t-30">
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
                <h5>Tabs bottom left Align</h5>
              </div>
              <div className="card-body">
                <TabContent activeTab={activeTab1}>
                  <TabPane tabId="1">
                    <p className="m-b-30">
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
                    <p className="m-b-30">
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
                    <p className="m-b-30">
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
                <Nav tabs className="tab-list-bottom border-tab-primary">
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab1 === '1' ? 'active' : ''}
                      onClick={() => setActiveTab1('1')}
                    >
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab1 === '2' ? 'active' : ''}
                      onClick={() => setActiveTab1('2')}
                    >
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab1 === '3' ? 'active' : ''}
                      onClick={() => setActiveTab1('3')}
                    >
                      Contact
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>Tabs With Icon </h5>
              </div>
              <div className="card-body">
                <Nav tabs className="border-tab-primary">
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
                      <i className="icofont icofont-man-in-glasses"></i> Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab2 === '3' ? 'active' : ''}
                      onClick={() => setActiveTab2('3')}
                    >
                      <i className="icofont icofont-contacts"></i> Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab2}>
                  <TabPane tabId="1">
                    <p className="mb-0 m-t-30">
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
                    <p className="mb-0 m-t-30">
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
                    <p className="mb-0 m-t-30">
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
                <h5>Tabs Right Align</h5>
              </div>
              <div className="card-body">
                <Nav tabs className="right-tablist border-tab-primary">
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
                    <p className="mb-0 m-t-30">
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
                    <p className="mb-0 m-t-30">
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
                    <p className="mb-0 m-t-30">
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
                <h5>Tabs Vertical</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3 col-xs-12">
                    <Nav tabs className="vertical-tabset nav-pills nav-primary">
                      <NavItem
                        className="nav nav-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <NavLink
                          className={activeTab4 === '1' ? 'active' : ''}
                          onClick={() => setActiveTab4('1')}
                        >
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem
                        className="nav nav-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <NavLink
                          className={activeTab4 === '2' ? 'active' : ''}
                          onClick={() => setActiveTab4('2')}
                        >
                          Profile
                        </NavLink>
                      </NavItem>
                      <NavItem
                        className="nav nav-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <NavLink
                          className={activeTab4 === '3' ? 'active' : ''}
                          onClick={() => setActiveTab4('3')}
                        >
                          Messages
                        </NavLink>
                      </NavItem>
                      <NavItem
                        className="nav nav-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <NavLink
                          className={activeTab4 === '4' ? 'active' : ''}
                          onClick={() => setActiveTab4('4')}
                        >
                          Settings
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                  <div className="col-sm-9 col-xs-12">
                    <TabContent activeTab={activeTab4}>
                      <TabPane tabId="1">
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum
                        </p>
                      </TabPane>
                      <TabPane tabId="2">
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages
                        </p>
                      </TabPane>
                      <TabPane tabId="3">
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. when an unknown printer took a
                          galley of type and scrambled it to make a type
                          specimen book. It has survived not only five
                          centuries, but also the leap into electronic
                          typesetting, remaining essentially unchanged. It was
                          popularised in the 1960s with the release of Letraset
                          sheets containing Lorem Ipsum passages, and more
                          recently with desktop publishing software like Aldus
                          PageMaker including versions of Lorem Ipsum
                        </p>
                      </TabPane>
                      <TabPane tabId="4">
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. when an unknown printer took a
                          galley of type and scrambled it to make a type
                          specimen book. It has survived not only five
                          centuries, but also the leap into electronic
                          typesetting, remaining essentially unchanged. It was
                          popularised in the 1960s with the release of Letraset
                          sheets containing Lorem Ipsum passages, and more
                          recently with desktop publishing software like Aldus
                          PageMaker including versions of Lorem Ipsum
                        </p>
                      </TabPane>
                    </TabContent>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>Pill Tabs</h5>
              </div>
              <div className="card-body">
                <Nav tabs className="nav-pills nav-primary">
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
                    <p className="mb-0 m-t-30">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus{' '}
                    </p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0 m-t-30">
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
                    <p className="mb-0 m-t-30">
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
                <h5>Pill Tabs With Icon</h5>
              </div>
              <div className="card-body">
                <Nav tabs className="nav-pills nav-primary">
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
                      <i className="icofont icofont-man-in-glasses"></i> Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab6 === '3' ? 'active' : ''}
                      onClick={() => setActiveTab6('3')}
                    >
                      <i className="icofont icofont-contacts"></i> Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab6}>
                  <TabPane tabId="1">
                    <p className="mb-0 m-t-30">
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
                    <p className="mb-0 m-t-30">
                      Lorem Ipsum is simply dummy , but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">
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
            <div className="card height-equal">
              <div className="card-header">
                <h5>Pill Dark color</h5>
                <span>
                  Add <code>.nav-*</code> class with nav class
                </span>
                <span>
                  remove <code>nav-pill</code> class from pill style Tab
                </span>
              </div>
              <div className="card-body">
                <Nav tabs className="nav-pills nav-dark">
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
                      <i className="icofont icofont-man-in-glasses"></i> Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab7 === '3' ? 'active' : ''}
                      onClick={() => setActiveTab7('3')}
                    >
                      <i className="icofont icofont-contacts"></i> Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab7}>
                  <TabPane tabId="1">
                    <p className="mb-0 m-t-30">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release
                    </p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p className="mb-0 m-t-30">
                      Lorem Ipsum is simply dummy , but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">
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
                <h5>Primary Color</h5>
                <span>
                  Add <code>.nav-primary</code> class with nav class
                </span>
              </div>
              <div className="card-body">
                <Nav tabs className="border-tab-primary">
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
                      <i className="icofont icofont-man-in-glasses"></i> Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab8 === '3' ? 'active' : ''}
                      onClick={() => setActiveTab8('3')}
                    >
                      <i className="icofont icofont-contacts"></i> Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab8}>
                  <TabPane tabId="1">
                    <p className="mb-0 m-t-30">
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
                    <p className="mb-0 m-t-30">
                      Lorem Ipsum is simply dummy , but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">
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
                <h5>Secondary Color</h5>
                <span>
                  Add <code>.nav-secondary</code> class with nav class
                </span>
              </div>
              <div className="card-body">
                <Nav tabs className="nav-pills nav-secondary">
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab9 === '1' ? 'active' : ''}
                      onClick={() => setActiveTab9('1')}
                    >
                      <i className="icofont icofont-ui-home"></i> Home
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab9 === '2' ? 'active' : ''}
                      onClick={() => setActiveTab9('2')}
                    >
                      <i className="icofont icofont-man-in-glasses"></i> Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab9 === '3' ? 'active' : ''}
                      onClick={() => setActiveTab9('3')}
                    >
                      <i className="icofont icofont-contacts"></i> Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab9}>
                  <TabPane tabId="1">
                    <p className="mb-0 m-t-30">
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
                    <p className="mb-0 m-t-30">
                      Lorem Ipsum is simply dummy , but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">
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
                <h5>Success Color</h5>
                <span>
                  Add <code>.nav-success</code> class with nav class
                </span>
              </div>
              <div className="card-body">
                <Nav tabs className="nav-pills nav-success">
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab10 === '1' ? 'active' : ''}
                      onClick={() => setActiveTab10('1')}
                    >
                      <i className="icofont icofont-ui-home"></i> Home
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab10 === '2' ? 'active' : ''}
                      onClick={() => setActiveTab10('2')}
                    >
                      <i className="icofont icofont-man-in-glasses"></i> Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab10 === '3' ? 'active' : ''}
                      onClick={() => setActiveTab10('3')}
                    >
                      <i className="icofont icofont-contacts"></i> Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab10}>
                  <TabPane tabId="1">
                    <p className="mb-0 m-t-30">
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
                    <p className="mb-0 m-t-30">
                      Lorem Ipsum is simply dummy , but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">
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
                <h5>Info Color</h5>
                <span>
                  Add <code>.nav-info</code> class with nav class
                </span>
              </div>
              <div className="card-body">
                <Nav tabs className="nav-pills nav-info">
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab11 === '1' ? 'active' : ''}
                      onClick={() => setActiveTab11('1')}
                    >
                      <i className="icofont icofont-ui-home"></i> Home
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab11 === '2' ? 'active' : ''}
                      onClick={() => setActiveTab11('2')}
                    >
                      <i className="icofont icofont-man-in-glasses"></i> Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab11 === '3' ? 'active' : ''}
                      onClick={() => setActiveTab11('3')}
                    >
                      <i className="icofont icofont-contacts"></i> Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab11}>
                  <TabPane tabId="1">
                    <p className="mb-0 m-t-30">
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
                    <p className="mb-0 m-t-30">
                      Lorem Ipsum is simply dummy , but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">
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
                <h5>Warning Color</h5>
                <span>
                  Add <code>.nav-warning</code> class with nav class
                </span>
              </div>
              <div className="card-body">
                <Nav tabs className="nav-pills nav-warning">
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab12 === '1' ? 'active' : ''}
                      onClick={() => setActiveTab12('1')}
                    >
                      <i className="icofont icofont-ui-home"></i> Home
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab12 === '2' ? 'active' : ''}
                      onClick={() => setActiveTab12('2')}
                    >
                      <i className="icofont icofont-man-in-glasses"></i> Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab12 === '3' ? 'active' : ''}
                      onClick={() => setActiveTab12('3')}
                    >
                      <i className="icofont icofont-contacts"></i> Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab12}>
                  <TabPane tabId="1">
                    <p className="mb-0 m-t-30">
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
                    <p className="mb-0 m-t-30">
                      Lorem Ipsum is simply dummy , but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">
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
                <h5>Danger Color</h5>
                <span>
                  Add <code>.nav-danger</code> class with nav class
                </span>
              </div>
              <div className="card-body">
                <Nav tabs className="nav-pills nav-danger">
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab13 === '1' ? 'active' : ''}
                      onClick={() => setActiveTab13('1')}
                    >
                      <i className="icofont icofont-ui-home"></i> Home
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab13 === '2' ? 'active' : ''}
                      onClick={() => setActiveTab13('2')}
                    >
                      <i className="icofont icofont-man-in-glasses"></i> Profile
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                    <NavLink
                      className={activeTab13 === '3' ? 'active' : ''}
                      onClick={() => setActiveTab13('3')}
                    >
                      <i className="icofont icofont-contacts"></i> Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab13}>
                  <TabPane tabId="1">
                    <p className="mb-0 m-t-30">
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
                    <p className="mb-0 m-t-30">
                      Lorem Ipsum is simply dummy , but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p className="mb-0 m-t-30">
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

export default TabsSet
