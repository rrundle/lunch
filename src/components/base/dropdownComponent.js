import React, { Component, Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb'
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from 'reactstrap'

class DropdownComponent extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
      isOpen: false,
    }
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }))
  }

  render() {
    return (
      <Fragment>
        <Breadcrumb title="Dropdown" parent="Base" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5>Basic Dropdown</h5>
                </div>
                <div className="card-body dropdown-basic">
                  <div className="dropdown">
                    <Dropdown
                      isOpen={this.state.dropdownOpen}
                      toggle={this.toggle}
                    >
                      <DropdownToggle caret color="primary">
                        Dropdown
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem>Some Action</DropdownItem>
                        <DropdownItem disabled>Action (disabled)</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Bar Action</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5>Basic Color Dropdown</h5>
                </div>
                <div className="card-body dropdown-basic">
                  <div className="dropdown">
                    <div className="btn-group mb-0">
                      <Dropdown
                        direction="right"
                        isOpen={this.state.btnDropright}
                        toggle={() => {
                          this.setState({
                            btnDropright: !this.state.btnDropright,
                          })
                        }}
                      >
                        <DropdownToggle caret color="primary">
                          Dropright
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Something Else Here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated Link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="dropdown">
                    <div className="btn-group mb-0">
                      <Dropdown
                        direction="left"
                        isOpen={this.state.btnDropleft}
                        toggle={() => {
                          this.setState({
                            btnDropleft: !this.state.btnDropleft,
                          })
                        }}
                      >
                        <DropdownToggle caret color="secondary">
                          Dropleft
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Something Else Here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated Link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="dropdown">
                    <div className="btn-group mb-0">
                      <Dropdown
                        direction="down"
                        isOpen={this.state.btnDropDown}
                        toggle={() => {
                          this.setState({
                            btnDropDown: !this.state.btnDropDown,
                          })
                        }}
                      >
                        <DropdownToggle caret color="success">
                          Dropdown
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Something Else Here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated Link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="dropdown">
                    <div className="btn-group mb-0">
                      <Dropdown
                        isOpen={this.state.btnDropr}
                        toggle={() => {
                          this.setState({ btnDropr: !this.state.btnDropr })
                        }}
                      >
                        <DropdownToggle color="info">Dropdown</DropdownToggle>
                        <DropdownMenu
                          modifiers={{
                            setMaxHeight: {
                              enabled: true,
                              order: 890,
                              fn: (data) => {
                                return {
                                  ...data,
                                  styles: {
                                    ...data.styles,
                                    overflow: 'auto',
                                    maxHeight: 100,
                                  },
                                }
                              },
                            },
                          }}
                        >
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5>Dropdown Link Button</h5>
                </div>
                <div className="card-body dropdown-basic mb-0">
                  <div className="btn-group">
                    <Navbar color="light" light expand="md" className="navDrop">
                      <Nav className="ml-auto" navbar>
                        <NavItem>
                          <NavLink href="/base/datepickerComponent">
                            Inactive Link
                          </NavLink>
                        </NavItem>
                        <UncontrolledDropdown setActiveFromChild>
                          <DropdownToggle tag="a" className="nav-link" caret>
                            Dropdown
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem
                              tag="a"
                              href="/base/datepickerComponent"
                              active
                            >
                              Link
                            </DropdownItem>
                            <DropdownItem
                              tag="a"
                              href="/base/datepickerComponent"
                            >
                              Link
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Nav>
                    </Navbar>
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

export default DropdownComponent
