import React, { useState } from 'react'
import { Button, Popover, PopoverBody } from 'reactstrap'

const PopoverItem = (props) => {
  const { id, item } = props
  const [popoverOpen, setPopoverOpen] = useState(false)

  const toggle = () => setPopoverOpen(!popoverOpen)

  return (
    <span>
      <Button
        className="mr-4"
        color="primary"
        id={'Popover-' + id}
        type="button"
      >
        {item.text}
      </Button>
      <Popover
        placement={item.placement}
        isOpen={popoverOpen}
        target={'Popover-' + id}
        toggle={toggle}
      >
        <PopoverBody>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </PopoverBody>
      </Popover>
    </span>
  )
}

const PopoverExampleMulti = (props) => {
  return (
    <>
      {[
        {
          placement: 'top',
          text: 'Popover on top',
        },
        {
          placement: 'bottom',
          text: 'Popover on bottom',
        },
        {
          placement: 'left',
          text: 'Popover on left',
        },
        {
          placement: 'right',
          text: 'Popover on right',
        },
      ].map((popover, i) => {
        return <PopoverItem key={i} item={popover} id={i} />
      })}
    </>
  )
}

export default PopoverExampleMulti
