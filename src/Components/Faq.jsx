import React from 'react'
import { FaBagShopping } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { PiCoatHangerBold } from "react-icons/pi";
import { RiSettings5Fill } from "react-icons/ri";
import Navbar from './Navbar';
import Footer from './Footer';


const Faq = () => {
  return (
    <>
  <Navbar/>
    <div className="min-h-screen flex flex-col items-center py-20 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800 m-4">FAQ! Need Help?</h1>
        <p className="font-serif text-2xl text-gray-600">We've got you covered</p>
      </div>

      {/* Search Section */}
      <div className='bg-orange-200 m-4 w-1/2'>
      <div className="flex justify-center px-4 py-6">
        <p className="font-serif inline-block mr-5  my-2 text-2xl text-gray-700">Track my order</p>
        <input
          type="text"
          placeholder="Search"
          className="bg-slate-100 px-5 py-4 rounded-md text-sm text-gray-800 w-[150px] sm:w-[200px] md:w-[250px] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-300"
        />
        <button className="bg-black text-white px-8 ml-5 rounded hover:bg-gray-800 transition duration-300 ease-in-out">
          Track
        </button>
      </div>
      </div>

      {/* Icon Grid Section */}
      <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Grid Item 1 */}
        <div className="flex flex-col items-center h-[200px] bg-pink-400 py-14 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <FaBagShopping className="text-5xl text-white mb-3 hover:text-pink-200 transition duration-300" />
          <span className="text-white font-bold">ORDERS</span>
        </div>

        {/* Grid Item 2 */}
        <div className="flex flex-col items-center bg-pink-400 py-14  rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <TbTruckDelivery className="text-5xl text-white mb-3 hover:text-pink-200 transition duration-300" />
          <span className="text-white font-bold">DELIVERY</span>
        </div>

        {/* Grid Item 3 */}
        <div className="flex flex-col items-center bg-pink-400 py-14 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <GiReturnArrow className="text-5xl text-white mb-3 hover:text-pink-200 transition duration-300" />
          <span className="text-white font-bold">RETURNS & REFUNDS</span>
        </div>

        {/* Grid Item 4 */}
        <div className="flex flex-col items-center bg-pink-400 h-[200px] py-14 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <RiDiscountPercentFill className="text-5xl text-white mb-3 hover:text-pink-200 transition duration-300" />
          <span className="text-white font-bold">PROMOTIONS & DISCOUNT</span>
        </div>

        {/* Grid Item 5 */}
        <div className="flex flex-col items-center bg-pink-400 py-14 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <PiCoatHangerBold className="text-5xl text-white mb-3 hover:text-pink-200 transition duration-300" />
          <span className="text-white font-bold">PRODUCT & STOCK</span>
        </div>

        {/* Grid Item 6 */}
        <div className="flex flex-col items-center bg-pink-400 py-14 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <RiSettings5Fill  className="text-5xl text-white mb-3 hover:text-pink-200 transition duration-300" />
          <span className="text-white font-bold">TECHNICAL</span>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Faq;
