import React, { Fragment } from 'react'
import Breadcrumb from '../../common/breadcrumb'
import { Home, Activity, Users } from 'react-feather'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs'
import HomeComponent from './home-component'
import BudgetComponent from './budget-component'
import UserComponent from './user-component'

const Project = () => {
  return (
    <Fragment>
      <Breadcrumb title="Project" parent="Dashboard" />
      <div className="container-fluid">
        <div className="row theme-tab">
          <Tabs className="col-sm-12">
            <TabList className="tabs tab-title">
              <Tab className="current">
                <Home />
                Home
              </Tab>
              <Tab>
                <Activity />
                Budget Summary
              </Tab>
              <Tab>
                <Users />
                Team Members
              </Tab>
            </TabList>
            <div className="tab-content-cls">
              <TabPanel>
                <HomeComponent />
              </TabPanel>
              <TabPanel>
                <BudgetComponent />
              </TabPanel>
              <TabPanel>
                <UserComponent />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </Fragment>
  )
}

export default Project
