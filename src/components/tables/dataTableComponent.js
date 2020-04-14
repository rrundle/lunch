import React, { Fragment, Component } from 'react'
import data from '../../data/dummyTableData'
import Datatable from '../datatable'

class DataTableComponent extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>Restaurants</h5>
                </div>
                <div className="card-body datatable-react">
                  <Datatable
                    multiSelectOption={true}
                    myData={data}
                    pageSize={6}
                    pagination={false}
                    class="-striped -highlight"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default DataTableComponent
