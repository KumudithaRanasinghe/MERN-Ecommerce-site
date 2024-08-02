import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/popular'
import Offers from '../components/Offers/offers'
import NewCollections from '../components/NewCollections/newcollections'
import NewsLetter from '../components/NewsLetter/newsletter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop

