import React from 'react'
import MainSlider from '../commponent/MainSlider/MainSlider'
import CategorySlider from '../commponent/CategorySlider/CategorySlider'
import Products from '../commponent/Products/Products'
import { Helmet } from 'react-helmet'

export default function HomePage() {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
      <MainSlider/>
      <CategorySlider/>
      <Products/>
    </>
  )
}
