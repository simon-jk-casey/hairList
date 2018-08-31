import React, { Component } from 'react'

export default class Pricelist extends Component {
  render () {
    const cutsStyles = [
      {
        cat: 'Womens cut & blow wave',
        price: '$80.00'
      },
      {
        cat: 'Mens',
        price: '$45.00'
      },
      {
        cat: 'Kids (under 12)',
        price: '$25.00'
      },
      {
        cat: 'Kids (under 18)',
        price: '$35.00'
      },
      {
        cat: 'Blow wave',
        price: '$55.00'
      },
      {
        cat: 'Special Event Hair',
        price: 'from $65.00'
      }
    ]
    const colours = [
      {
        cat: 'Half head foils - no cut',
        price: '$155.00'
      },
      {
        cat: 'Half head foils - with cut',
        price: '$205.00'
      },
      {
        cat: 'Full head foils - no cut',
        price: '$185.00'
      },
      {
        cat: 'Full head foils - with cut',
        price: '$245.00'
      },
      {
        cat: 'Ombre/Balayage - no cut',
        price: '$190.00'
      },
      {
        cat: 'Ombre/Balayage - with cut',
        price: '$255.00'
      },
      {
        cat: 'Global roots - no cut',
        price: '$95.00'
      },
      {
        cat: 'Global roots - with cut',
        price: '$160.00'
      },
      {
        cat: 'Global throughout - no cut',
        price: '$115.00'
      },
      {
        cat: 'Global throughout - with cut',
        price: '$180.00'
      },
      {
        cat: 'Toner refresh - no cut',
        price: '$80.00'
      },
      {
        cat: 'Toner refresh - with cut',
        price: '$120.00'
      },
      {
        cat: 'On scalp bleach and toner - no cut',
        price: '$180.00'
      },
      {
        cat: 'On scalp bleach and toner - with cut',
        price: '$230.00'
      },
      {
        cat: 'Olaplex',
        price: '$20.00'
      }
    ]
    return (
      <div>
        <div className='leftSpacer' />
        <div className='listCont'>
          <h1 id='test'>Price List</h1>
          <h2>Cuts and Style</h2>
          <ul>
            {cutsStyles.map((cut, i) => {
              return (
                <span key={i}>
                  <li key={i + 'a'} className='cat'><h4>{cut.cat}</h4></li>
                  <li key={i + 'b'} className='price'>{cut.price}</li>
                </span>
              )
            })}
          </ul>
          <div className='listSpacer' />
          <h2>Colours</h2>
          <ul>
            {colours.map((colour, i) => {
              return (
                <span key={i}>
                  <li key={i + 'a'} className='cat'><h4>{colour.cat}</h4></li>
                  <li key={i + 'b'} className='price'>{colour.price}</li>
                </span>
              )
            })}
          </ul>
          <div className='notes'>
            <p>*These prices are a guideline for your services.  All prices are GST inclusive.</p>
          </div>
        </div>
        <div className='rightSpacer' />
      </div>
    )
  }
}
