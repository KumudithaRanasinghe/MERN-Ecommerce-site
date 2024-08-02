import React from 'react'
import './offers.css'
import exclusive_image from '../assets/exclusive_image.png'

const offers = () => {
  return (
    <div className='offers'>
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h2>Offers for you</h2>
        <p>Only on best seller product</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default offers
