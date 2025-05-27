import React from 'react'
import Navbar from './Navbar'
import Seriesdata from '../Api/Seriesdata'
import ImageCarousel from './ImageCarousel'
import Footer from './Footer'
import PageDiscount from './PageDiscount'

const Main1 = () => {
  return (
    <div>
      <div><Navbar/></div>
      <div><ImageCarousel/></div>
      <div><Seriesdata/></div>
      <div><Footer/></div>
    </div>
  )
}

export default Main1
