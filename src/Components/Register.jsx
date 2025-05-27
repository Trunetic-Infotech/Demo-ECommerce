import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Register = () => {
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Handle registration logic here
    // (send data to backend, etc.)

    console.log('User registered:', userData);
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl text-center text-pink-700 font-semibold mb-6">Create an Account</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700" htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700" htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700" htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={userData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="w-full p-3 bg-pink-700 text-white rounded-lg hover:bg-pink-800">
          Register
        </button>
      </form>

      <p className="text-center mt-4">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600 hover:underline">
          Login here
        </a>
      </p>
      <Footer/>
    </div>
  );
};

export default Register;
