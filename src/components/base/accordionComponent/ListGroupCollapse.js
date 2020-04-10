import React, { useState } from 'react'
import { ListGroupItem, Collapse, CardHeader, CardBody } from 'reactstrap'

const ListGroupCollapse = (props) => {
  const [collapse, setcollapse] = useState(false)

  const toggle = () => {
    setcollapse(!collapse)
  }

  const Data = props.Data
  return (
    <ListGroupItem>
      <div>
        <CardHeader className="mb-0" onClick={toggle}>
          <strong>{Data.title}</strong>
        </CardHeader>
        <Collapse isOpen={collapse}>
          <CardBody>{Data.desc}</CardBody>
        </Collapse>
      </div>
    </ListGroupItem>
  )
}

export default ListGroupCollapse
