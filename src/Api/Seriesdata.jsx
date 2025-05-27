import React, { useContext, useState } from 'react'
import Data from './Data.json'
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Seriesdata = () => {
 
  
 
  return (
   
   
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-10 px-4 sm:px-6 lg:px-20">
    <div className="text-center mb-10">
      <h1 className="text-5xl font-bold text-red-950 bg-brown">The Latest</h1>
    </div>
  
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {Data.map((curElem) => (
        <li
          key={curElem.id}
          className="border border-slate-300 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow"
        >
          <div className="w-full h-60 overflow-hidden flex items-center justify-center bg-slate-50">
            <img
              src={curElem.img_url}
              alt={curElem.name}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
  
          <div className="text-black text-center py-2 px-3">
            <h3 className="text-lg font-semibold">{curElem.item}</h3>
            <h4 className="text-md font-medium mt-1">Price: {curElem.price}</h4>
          </div>
  
          <div className="flex justify-center p-4">
            <button
              onClick={() => handleAddToCart(curElem.id)}
              className="flex items-center gap-2 bg-pink-700 hover:bg-pink-800 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200"
            >
              <FaShoppingCart className="text-lg" />
              <span>Add to Cart</span>
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
  
  
  )
}


// ()=> to get  id
export default Seriesdata
