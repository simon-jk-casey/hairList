import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import './App.css'
import Header from './components/header/Header'
import NavBar from './components/navBar/NavBar'
import Pricelist from './components/pricelist/Pricelist'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <NavBar anchorOne='#priceList' anchorTwo='#contact' />
        <ScrollableAnchor id={'pricelist'}>
          <Pricelist />
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>
        <Footer />
      </div>
    )
  }
}

export default App
