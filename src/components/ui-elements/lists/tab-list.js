import React, { Fragment } from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs'

const TabVertical = () => {
  return (
    <Fragment>
      <Tabs className="row tab-vertical m-0">
        <TabList className="nav nav-tabs col-sm-4 p-0">
          <Tab className="nav-link">Home</Tab>
          <Tab className="nav-link">Profile</Tab>
          <Tab className="nav-link">Messages</Tab>
          <Tab className="nav-link">Settings</Tab>
        </TabList>
        <TabPanel>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </TabPanel>
        <TabPanel>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets
        </TabPanel>
        <TabPanel>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </TabPanel>
        <TabPanel>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting.
        </TabPanel>
      </Tabs>
    </Fragment>
  )
}

export default TabVertical
