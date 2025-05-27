import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with actual sending logic
    setSubmitted(true);
  };

    return (
      <>
      <Navbar/>

      <div className="bg-white min-h-screen flex justify-center items-center p-10">
      <div className="flex flex-col md:flex-row gap-x-10 bg-slate-100 p-8 rounded-lg shadow-lg max-w-6xl w-full">
        {/* Contact Info */}
        <div className="md:w-11/12 text-gray-800 space-y-6">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-lg font-serif">
            Feel free to use the form or drop us an email. Old-fashioned phone calls work too.
          </p>
          <div className="flex items-center space-x-2">
            <IoCall className="text-xl" />
            <p className='font-serif'>484-324-2000</p>
          </div>
          <div className="flex items-center space-x-2">
            <IoMail className="text-xl" />
            <p className='font-serif'>query@gmail.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaLocationDot className="text-xl" />
            <p className='font-serif'>15 West 3rd St. Media, PA 19063</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2">
          {submitted ? (
            <p className="text-green-600 font-semibold text-center mt-4">Thank you for your message!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </>
    );
  };
  
  export default Contact;
  
