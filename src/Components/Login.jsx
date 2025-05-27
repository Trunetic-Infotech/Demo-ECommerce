import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Login = () => {
  const navigate = useNavigate();
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle login logic here
    // (send data to backend, validate user, etc.)

    if (loginData.email === '' || loginData.password === '') {
      setError('Please enter both email and password');
      return;
    }

    console.log('User logged in:', loginData);
    navigate('/'); // Redirect to home page
  };

  return (
    <>
    <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl text-center text-pink-700 font-semibold mb-6">Login to Your Account</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700" htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={loginData.email}
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
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="w-full p-3 bg-pink-700 text-white rounded-lg hover:bg-pink-800">
          Login
        </button>
      </form>

      <p className="text-center mt-4">
        Don't have an account?{' '}
        <a href="/register" className="text-blue-600 hover:underline">
          Register here
        </a>
      </p>
      
    </div>
  
    </>
  );
};

export default Login;
