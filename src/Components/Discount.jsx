import React from 'react'
import images from '../../public/assets/tshirt24.jpg'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MdDiscount } from "react-icons/md";
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

const disc = [
  { id: 1, src: '/assets/tshirt21.jpg', name: "Black Top", originalPrice: 1200, price: 900 },
  { id: 2, src: '/assets/tshirt22.jpg', name: "Maroon sando for Men", originalPrice: 1200, price: 900 },
  { id: 3, src: '/assets/tshirt23.jpg', name: "Red Printed Casual Wear", originalPrice: 1200, price: 900 },
  { id: 4, src: '/assets/tshirt27.jpg', name: "Black Printed Casual Tshirt", originalPrice: 1200, price: 900 },
  { id: 5, src: '/assets/tshirt28.jpg', name: "White Printed Top For Women", originalPrice: 1200, price: 900 },
  { id: 6, src: '/assets/tshirt29.jpg', name: "Green Printed Tshirt", originalPrice: 1200, price: 900 },
  { id: 7, src: '/assets/tshirt30.jpg', name: "Black Printed Tshirt", originalPrice: 1200, price: 900 },
  { id: 8, src: '/assets/tshirt32.jpg', name: "Levis Top", originalPrice: 1200, price: 900 },
  { id: 9, src: '/assets/tshirt33.jpg', name: "Mens Casual Jeans", originalPrice: 1200, price: 900 },
  { id: 10, src: '/assets/tshirt25.jpg', name: "Mens Blue Shirt ", originalPrice: 1200, price: 900 }

]

const Discount = () => {
  return (
    <div>
      <Navbar/>
     
      <div className="p-6 sm:p-10 mt-20 bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen">
  {/* Heading */}
  <h1 className="text-red-950 text-4xl sm:text-5xl mb-10 flex justify-center items-center gap-2 font-serif">
    <span className="bg-brown px-3 py-1 rounded">Discount Offers</span>
    <MdDiscount className="text-4xl sm:text-5xl" />
  </h1>

  {/* Grid of Discount Items */}
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-10">
    {disc.map((Elem) => (
      <li
        key={Elem.id}
        className="border border-slate-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      >
        <div className="relative">
          <img
            src={Elem.src}
            alt={Elem.name}
            className="w-full h-60 object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
          />
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs sm:text-sm px-2 py-1 rounded shadow">
            20% OFF
          </span>
        </div>

        <div className="text-black text-center font-serif text-lg sm:text-xl p-2">
          <h3>{Elem.name}</h3>
        </div>

        <div className="text-black text-center font-medium text-base sm:text-lg px-2">
          {/* Prices */}
          <div className="flex justify-center gap-3 items-center">
            <div className="flex items-center gap-1 text-gray-500 line-through">
              <MdOutlineCurrencyRupee />
              <span>{Elem.originalPrice}</span>
            </div>
            <div className="flex items-center gap-1 text-green-700 font-bold">
              <MdOutlineCurrencyRupee />
              <span>{Elem.price}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center p-4">
          <button className="flex items-center gap-2 bg-gray-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200">
            <FaShoppingCart className="text-lg" />
            <span>Add to Cart</span>
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>

    <Footer/>
    </div>
  )
}

export default Discount

