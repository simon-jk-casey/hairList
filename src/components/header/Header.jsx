import React, { Component } from 'react'



export default class Header extends Component {
  render () {
    const imgsrc = require('../../images/hwavlogo.jpg')
    return (
      <div className='banner'>
        <img className='logo' src={imgsrc} alt=''/>
      </div>
    )
  }
}
