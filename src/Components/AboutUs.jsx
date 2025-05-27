import React from 'react'
import images from '../../public/assets/about.jpg'
import Navbar from './Navbar'
import Footer from './Footer'


const AboutUs = () => {
  return (
    
    <div className='bg-blue-200'>
     <Navbar/>
     <div className="flex flex-col lg:flex-row items-center justify-evenly p-6 sm:p-10 lg:p-24 gap-10 bg-blue-200">
  {/* Text Block */}
  <div className="space-y-6 max-w-2xl text-center lg:text-left">
    <h1 className="text-black text-4xl sm:text-5xl font-serif">
      About <span className="bg-white shadow-2xl px-2">ShopZilla</span>
    </h1>
    <p className="text-lg sm:text-xl font-serif first-letter:text-4xl">
      Welcome to ShopZilla, your go-to destination for fresh, trendy, and affordable fashion.
      Founded with a passion for style and self-expression, ShopZilla was born out of the belief that everyone deserves to look and feel their best—without breaking the bank.
      Whether you're dressing up for a special occasion or keeping it casual for your everyday vibe, we’ve got you covered with handpicked collections that speak your style language.
    </p>
  </div>

  {/* Image Block */}
  <div className="w-full max-w-xl">
    <img
      src={images}
      alt="About ShopZilla"
      className="w-full h-auto rounded-full object-cover shadow-lg"
    />
  </div>
</div>
        <Footer/>

    </div>
  )
}

export default AboutUs
