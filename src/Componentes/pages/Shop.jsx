import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import Offers from '../Offers/Offers'
import NewCollections from '../NewCollections/NewCollections'
import NewLatter from '../NewsLatter/NewLatter'

function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
    <NewCollections/>
    <NewLatter/>
    </div>
  )
}

export default Shop