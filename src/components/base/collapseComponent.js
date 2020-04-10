import React, { Fragment, useState } from 'react'
import Breadcrumb from '../common/breadcrumb'
import { Collapse, Button, CardBody, Card } from 'reactstrap'

const CollapseComponent = () => {
  const [collapse, setCollapse] = useState(false)

  const toggle = () => {
    setCollapse(!collapse)
  }
  return (
    <Fragment>
      <Breadcrumb title="Collapse" parent="Base" />
      <div className="card">
        <div className="card-header">
          <h5>Collapse</h5>
        </div>
        <div className="card-body">
          <Button
            color="primary"
            onClick={() => toggle()}
            style={{ marginBottom: '1rem' }}
          >
            Toggle
          </Button>
          <Collapse isOpen={collapse ? true : false}>
            <Card className="mb-0">
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
    </Fragment>
  )
}

export default CollapseComponent
