import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/popular'
import Offers from '../components/Offers/offers'
import NewCollections from '../components/NewCollections/newcollections'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
    </div>
  )
}

export default Shop

