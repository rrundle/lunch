import React, { Component, Fragment } from 'react'
import Breadcrumb from '../../common/breadcrumb'
import { Container, Button, Collapse, Card, CardBody } from 'reactstrap'
import ListGroupCollapse from './ListGroupCollapse'
import AccordianTwo from './accordianTwo'

const things = {
  idk: {
    title: 'Simple',
    desc:
      " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ",
  },
  another: {
    title: (
      <span _ngcontent-dye-c11="" className="ng-star-inserted">
        '★' <b _ngcontent-dye-c11="">'Fancy'</b> 'title ★'
      </span>
    ),
    desc:
      " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ",
  },
}

class accordion extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { collapse: false }
  }
  toggle() {
    this.setState((state) => ({ collapse: !this.state.collapse }))
  }
  render() {
    return (
      <Fragment>
        <Breadcrumb title="Accordian" parent="Base" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5>Basic Accordion</h5>
                  <span>
                    Using the
                    <a href="#javascript">card</a>
                    component, you can extend the default collapse behavior to
                    create an accordion.
                  </span>
                </div>
                <div className="card-body">
                  <div className="default-according" id="accordion">
                    <Container className="p-0">
                      {Object.keys(things).map((key, index) => (
                        <ListGroupCollapse key={index} Data={things[key]} />
                      ))}
                    </Container>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5>ONE OPEN PANEL AT A TIME</h5>
                </div>
                <div className="card-body">
                  <div
                    className="default-according panel-accordion"
                    id="accordionclose"
                  >
                    <AccordianTwo />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5>Toggle</h5>
                </div>
                <div className="card-body">
                  <div className="default-according" id="accordion2">
                    <Button color="primary" onClick={this.toggle}>
                      Toggle
                    </Button>
                    <Collapse isOpen={this.state.collapse}>
                      <Card>
                        <CardBody>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </CardBody>
                      </Card>
                    </Collapse>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default accordion
