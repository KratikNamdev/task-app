import React from 'react'
import PropTypes from 'prop-types'


function Navbar({name }) {
  
  
  
  return (
    <nav>
    <div className="nav-wrapper indigo bg-success">
      <a href="#" className="brand-logo center">{name}</a>
    </div>
  </nav>
  )
}

export default Navbar

Navbar.defaultProps = {
  brandName : "I am Default Value"
}

Navbar.propTypes = {
  brandName : PropTypes.string,
  version : PropTypes.number,
}