import React, { Fragment, useState } from 'react'
import Breadcrumb from '../../common/breadcrumb'
import {
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  UncontrolledPopover,
} from 'reactstrap'
import PopoverItem from './popoverDirection'

const PopoverComponent = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)

  return (
    <Fragment>
      <Breadcrumb parent="Base" title="Popover" />
      <div className="container-fluid">
        <div className="row popover-main">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Basic Examples</h5>
                <span>
                  lorem ipsum dolor sit amet, consectetur adipisicing elit
                </span>
              </div>
              <div className="card-body btn-showcase">
                <Button id="Popover1" type="button" color="primary">
                  Click to toggle popover
                </Button>
                <Popover
                  placement="bottom"
                  isOpen={popoverOpen}
                  target="Popover1"
                  toggle={() => setPopoverOpen(!popoverOpen)}
                >
                  <PopoverHeader>Popover Title</PopoverHeader>
                  <PopoverBody>
                    And here's some amazing content. It's very engaging. Right?
                  </PopoverBody>
                </Popover>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Popovers Trigger</h5>
                <span>
                  lorem ipsum dolor sit amet, consectetur adipisicing elit
                </span>
              </div>
              <div className="card-body btn-showcase">
                <Button id="PopoverFocus" type="button" color="primary">
                  Launch Popover (Focus)
                </Button>{' '}
                <Button id="PopoverClick" type="button" color="primary">
                  Launch Popover (Click)
                </Button>{' '}
                <Button id="PopoverLegacy" type="button" color="primary">
                  Launch Popover (Legacy)
                </Button>
                <UncontrolledPopover
                  trigger="focus"
                  placement="bottom"
                  target="PopoverFocus"
                >
                  <PopoverHeader>Focus Trigger</PopoverHeader>
                  <PopoverBody>
                    Focusing on the trigging element makes this popover appear.
                    Blurring (clicking away) makes it disappear. You cannot
                    select this text as the popover will disappear when you try.
                  </PopoverBody>
                </UncontrolledPopover>
                <UncontrolledPopover
                  trigger="click"
                  placement="bottom"
                  target="PopoverClick"
                >
                  <PopoverHeader>Click Trigger</PopoverHeader>
                  <PopoverBody>
                    Clicking on the triggering element makes this popover
                    appear. Clicking on it again will make it disappear. You can
                    select this text, but clicking away (somewhere other than
                    the triggering element) will not dismiss this popover.
                  </PopoverBody>
                </UncontrolledPopover>
                <UncontrolledPopover
                  trigger="legacy"
                  placement="bottom"
                  target="PopoverLegacy"
                >
                  <PopoverHeader>Legacy Trigger</PopoverHeader>
                  <PopoverBody>
                    Legacy is a reactstrap special trigger value (outside of
                    bootstrap's spec/standard). Before reactstrap correctly
                    supported click and focus, it had a hybrid which was very
                    useful and has been brought back as trigger="legacy". One
                    advantage of the legacy trigger is that it allows the
                    popover text to be selected while also closing when clicking
                    outside the triggering element and popover itself.
                  </PopoverBody>
                </UncontrolledPopover>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Direction</h5>
                <span>
                  lorem ipsum dolor sit amet, consectetur adipisicing elit
                </span>
              </div>
              <div className="card-body btn-showcase">
                <PopoverItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PopoverComponent
