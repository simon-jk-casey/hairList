import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NavBar.css'

export default class NavBar extends Component {
  render () {
    return (
      <div className='navBar'>
        <a className='button' id='plButt' href={this.props.anchorOne}>
          <p className='buttonLabel'>Pricelist</p>
        </a>
        <a className='button' id='contButt' href={this.props.anchorTwo}>
          <p className='buttonLabel'>Contact</p>
        </a>
      </div>
    )
  }
}

NavBar.propTypes = {
  anchorOne: PropTypes.string,
  anchorTwo: PropTypes.string
}
