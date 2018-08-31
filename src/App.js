import React, { Component } from 'react'
import './App.css'
import Header from './components/header/Header'
import Pricelist from './components/pricelist/Pricelist'
import Contact from './components/contact/Contact'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Pricelist />
        <Contact />
      </div>
    )
  }
}

export default App
