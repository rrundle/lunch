import React, { Fragment, useState } from 'react'
import Breadcrumb from '../common/breadcrumb'
import ReactStickies from 'react-stickies' //ES6

const StickyNotes = () => {
  const [notes, setNotes] = useState([])

  const onChange = () => {
    setNotes({
      notes,
    })
  }
  return (
    <Fragment>
      <Breadcrumb title="Sticky Notes" parent="Advance" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Sticky Notes</h5>
              </div>
              <div className="card-body">
                <ReactStickies notes={notes} onChange={onChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default StickyNotes
