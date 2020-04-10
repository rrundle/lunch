import React, { Fragment } from 'react'
import Datatable from '../../common/datatable'
import Breadcrumb from '../../common/breadcrumb'
import data from '../../../data/ecommerce/product-list'

const ProductList = () => {
  return (
    <Fragment>
      <Breadcrumb title="Product List" parent="Ecommerce" />
      <div className="container-fluid">
        <div className="row">
          {/* <!-- Individual column searching (text inputs) Starts--> */}
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Individual column searching (text inputs) </h5>
                <span>
                  The searching functionality provided by DataTables is useful
                  for quickly search through the information in the table -
                  however the search is global, and you may wish to present
                  controls that search on specific columns.
                </span>
              </div>
              <div className="card-body">
                <div className="table-responsive product-table">
                  <Datatable
                    multiSelectOption={false}
                    myData={data}
                    pageSize={6}
                    pagination={false}
                    className="-striped -highlight"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Individual column searching (text inputs) Ends--> */}
        </div>
      </div>
    </Fragment>
  )
}

export default ProductList
