import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';
import { HiShoppingBag } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { FcAbout } from "react-icons/fc";
import { FaCartShopping } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import Data from '../Api/Data.json';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);

  // Handle input changes and filter results
  const handleform = (e) => {
    const value = e.target.value;
    setInput(value);

    const filteredItems = Data.filter(item =>
      item.item.toLowerCase().includes(value.toLowerCase()) // Case insensitive search
    );

    console.log(filteredItems); // Debugging log

    setResult(filteredItems);
  };

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-pink-200 px-4 py-3 grid grid-cols-2 md:grid-cols-3 items-center w-full fixed top-0 z-50 shadow-lg">
        
        {/* Left Section */}
        <div className="flex items-center gap-4 relative">
          <HiShoppingBag className="text-pink-800 text-4xl" />
          <span className="text-pink-800 text-2xl sm:text-3xl font-semibold hidden lg:inline">
            ShopZilla
          </span>

          <input
            type="text"
            placeholder="Search by ID..."
            onChange={handleform}
            value={input}
            className="ml-4 px-3 py-2 rounded-md text-md font-bold text-pink-800 w-[150px] sm:w-[200px] md:w-[250px] focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-pink-400"
          />
        </div>

        {/* Center Section: Desktop Menu */}
        <ul className="md:flex justify-center items-center gap-4 text-pink-800 text-lg font-extrabold hidden">
          <li className="hover:bg-pink-600 px-4 py-2 rounded transition duration-200">
            <Link to="/" className="flex items-center gap-2">
              <FaHome className="w-5 h-5" />
              Home
            </Link>
          </li>
          <li className="hover:bg-pink-600 px-4 py-2 rounded transition duration-200">
            <Link to="/AboutUs" className="flex items-center gap-2">
              <FcAbout className="w-5 h-5" />
              About Us
            </Link>
          </li>
          <li className="hover:bg-pink-600 px-4 py-2 rounded transition duration-200">
            <Link to="/Products" className="flex items-center gap-2">
              <FaCartShopping className="w-5 h-5" />
              Products
            </Link>
          </li>
          <li className="hover:bg-pink-600 px-4 py-2 rounded transition duration-200">
            <Link to="/Discount" className="flex items-center gap-2">
              <CiDiscount1 className="w-5 h-5" />
              Discount
            </Link>
          </li>
          <li className="hover:bg-pink-600 px-4 py-2 rounded transition duration-200">
            <Link to="/Contact" className="flex items-center gap-2">
              <IoCall className="w-5 h-5" />
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex justify-end items-center gap-3">
          <IoMdNotifications className="text-pink-800 text-2xl cursor-pointer" />
          <Link to="/login">
            <button className="bg-pink-800 text-white px-4 py-2 rounded-md hover:bg-pink-500 transition duration-200">
              Sign in
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-pink-800 text-white px-4 py-2 rounded-md hover:bg-pink-500 transition duration-200">
              Log in
            </button>
          </Link>
        </div>

        {/* Hamburger Menu Icon - Small Screens */}
        <div className="md:hidden flex justify-end col-span-1">
          <FaBars
            className="text-pink-800 text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="flex flex-col md:hidden absolute top-20 left-0 w-full bg-pink-100 px-6 py-4 gap-3 z-40 shadow-md">
            <Link to="/" onClick={toggleMenu} className="flex items-center text-pink-800 font-bold py-2">
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link to="/AboutUs" onClick={toggleMenu} className="flex items-center text-pink-800 font-bold py-2">
              <FcAbout className="mr-2" />
              About Us
            </Link>
            <Link to="/Products" onClick={toggleMenu} className="flex items-center text-pink-800 font-bold py-2">
              <FaCartShopping className="mr-2" />
              Products
            </Link>
            <Link to="/Discount" onClick={toggleMenu} className="flex items-center text-pink-800 font-bold py-2">
              <CiDiscount1 className="mr-2" />
              Discount
            </Link>
            <Link to="/Contact" onClick={toggleMenu} className="flex items-center text-pink-800 font-bold py-2">
              <IoCall className="mr-2" />
              Contact
            </Link>

            <div className="flex flex-col gap-2 border-t pt-2 mt-2">
              <Link to="/login">
                <button className="w-full bg-pink-800 text-white px-4 py-2 rounded-md hover:bg-pink-500 transition duration-200">
                  Sign in
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Search Results Section */}
      {input && (
        <div className="pt-24 px-6 bg-pink-100">
          {result.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {result.map(item => (
                <div key={item.id} className="bg-white p-4 rounded shadow-md text-center">
                  <img src={item.img_url} alt={item.item} className="w-full h-48 object-cover rounded mb-3" />
                  <h2 className="text-lg font-bold">{item.item}</h2>
                  <p>ID: {item.item}</p>
                  <p className="text-pink-600 font-semibold">₹{item.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-500 font-semibold">No matches found.</p>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
