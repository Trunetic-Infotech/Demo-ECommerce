import React from 'react'
import Seriesdata from '../Api/Seriesdata'
import Navbar from './Navbar'
import Footer from './Footer'



const Products = () => {
  return (
    <div>
      <Navbar/>
  
      
    <div className="flex flex-col">
  <div className="bg-black-100 border-black w-[500px] h-[50px] flex justify-center mx-auto">
    <div className="text-center m-4">
      <h1 className="inline-block p-2 font-semibold m-1 text-2xl">Our</h1>
      <span className="font-bold text-4xl bg-blue-600 p-2 text-white rounded">Products</span>
    </div>
  </div>

  <div>
    <Seriesdata/>
  </div>
</div>
<Footer/>
</div>

  )
}

export default Products
