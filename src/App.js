import React, { Component } from 'react'
import './App.css'
import Header from './components/header/Header'
import Pricelist from './components/pricelist/Pricelist'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Pricelist />
      </div>
    )
  }
}

export default App
