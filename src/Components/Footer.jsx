// Footer.js

import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { FcAbout } from 'react-icons/fc';
import { IoCall } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import privacypolicy from './Privacypolicy'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* Footer Left - Brand & Social Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-3xl font-semibold text-gray-800">ShopZilla</h3>
          <p className="text-gray-600 mt-2">
            Fashion at your fingertips. Discover the latest trends, exclusive collections, and more.
          </p>
          <ul className="flex justify-center sm:justify-start space-x-6 mt-4">
            <li><a href="#" className="text-gray-600 hover:text-black">Facebook</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Instagram</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Twitter</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Pinterest</a></li>
          </ul>
        </div>

        {/* Footer Middle - Quick Links */}
        <div className="text-center sm:text-left">
          <h4 className="text-xl font-semibold text-gray-800">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li className='text-gray-600 hover:text-black'>  <Link to="/AboutUs">
                        {/* <FcAbout className="inline-block w-5 h-5 mr-1 -mt-1" /> */}
                        About Us
                      </Link></li>
            <li className='text-gray-600 hover:text-black'><Link to="/Products">
                        {/* <FaCartShopping className="inline-block w-5 h-5 mr-1 -mt-1" /> */}
                        Shop
                      </Link></li>
            <li className='text-gray-600 hover:text-black'> <Link to="/Contact">
            {/* <IoCall className="inline-block w-5 h-5 mr-1 -mt-1" /> */}
            Contact
          </Link></li>
            <li><a href="/faq" className="text-gray-600 hover:text-black">FAQ</a></li>
            <li><a href="/terms" className="text-gray-600 hover:text-black">Terms & Conditions</a></li>
            <li><a href="/privacypolicy" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Footer Right - Newsletter */}
        <div className="text-center sm:text-left">
          <h4 className="text-xl font-semibold text-gray-800">Newsletter</h4>
          <p className="text-gray-600 mt-2">
            Sign up to receive the latest news, trends, and exclusive offers from ShopZilaa.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full sm:w-64 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto mt-4 py-2 px-6 bg-black text-white rounded-md hover:bg-gray-700 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom - Copyright */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>&copy; 2025 ShopZilla. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
