import React from 'react'

import { Helmet } from 'react-helmet'

import MainSlider from '../commponent/MainSlider/MainSlider'
import CategorySlider from '../commponent/CategorySlider/CategorySlider'
import Products from '../commponent/Products/Products'
export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <MainSlider/>
      <CategorySlider />
      <Products />
    </>
  )
}
