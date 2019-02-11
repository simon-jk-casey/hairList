import React, { Component } from 'react'
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button'
import './Footer.css'

export default class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <ScrollUpButton />
      </div>
    )
  }
}
