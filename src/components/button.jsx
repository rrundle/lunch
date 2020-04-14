import React from 'react'

const Button = ({ label, onClick }) => (
  <button
    className="btn btn-square btn-primary"
    onClick={onClick}
    type="button"
  >
    {label}
  </button>
)

export default Button
