import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render () {
    const imgsrc = require('../../images/hwavlogo.jpg')
    return (
      <div className='banner'>
        <img id='hwavLogo' className='logo' src={imgsrc} alt='' />
      </div>
    )
  }
}
