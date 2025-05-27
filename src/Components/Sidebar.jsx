// import React, { useEffect, useRef, useState } from 'react';
// import { FaHome } from "react-icons/fa";
// import { MdProductionQuantityLimits } from "react-icons/md";
// import { FcStatistics } from "react-icons/fc";
// import { FaShoppingCart } from "react-icons/fa";
// import { IoMdSettings } from "react-icons/io";
// import { CiDiscount1 } from "react-icons/ci";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoMdClose } from "react-icons/io";
// import { Link } from 'react-router-dom';
// import { FcAbout } from "react-icons/fc";
// import { MdOutlineProductionQuantityLimits } from "react-icons/md";


// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const sidebarRef = useRef();

//   const toggleSidebar = () => {
//     setIsOpen(prev => !prev);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isOpen]);

//   return (
//     <>
//       {/* Hamburger (only visible when sidebar is closed) */}
//       {!isOpen && (
//         <button
//           className="fixed top-4 left-4 z-50 text-white bg-blue-600 p-2 rounded-md shadow-md"
//           onClick={toggleSidebar}
//         >
//           <GiHamburgerMenu className="w-6 h-6" />
//         </button>
//       )}

//       {/* Sidebar */}
//       <div
//       ref={sidebarRef}
//         className={`fixed top-0 left-0 h-full bg-black text-white transition-transform duration-300 ease-in-out 
//         px-4 py-2 z-40 w-[70%] sm:w-[50%] md:w-[20%] 
//         ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         {/* Logo + Close Button */}
//         <div className="w-full flex items-center justify-between text-3xl my-2 mb-4">
//           <h1 className='font-bold'>ShopZilla</h1>
//           <button
//             className="text-white bg-red-600 p-2 rounded-md shadow-lg"
//             onClick={toggleSidebar}
//           >
//             <IoMdClose className="w-6 h-6" />
//           </button>
//         </div>

//         <hr className="border-gray-600" />
//         <ul className="mt-3 font-bold">
          
//           <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
//             <Link to="/AboutUs" onClick={toggleSidebar}>
//             <FcAbout className="inline-block w-6 h-6 mr-2 -mt-1 ml-2" />
//               About Us
//             </Link>
//           </li>
//           <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
//             <Link to="/Products" onClick={toggleSidebar}>
//             <MdOutlineProductionQuantityLimits className="inline-block w-6 h-6 mr-2 -mt-1 ml-2" />
//               Products
//             </Link>
//           </li>
//           <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
//             <Link to="/Orders" onClick={toggleSidebar}>
//               <FaShoppingCart className="inline-block w-6 h-6 mr-2 -mt-1 ml-2" />
//               Orders
//             </Link>
//           </li>
//           <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
//             <Link to="/Discount" onClick={toggleSidebar}>
//               <CiDiscount1 className="inline-block w-6 h-6 mr-2 -mt-1 ml-2" />
//               Discount
//             </Link>
//           </li>
//           <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
//             <Link to="/Statistics" onClick={toggleSidebar}>
//               <FcStatistics className="inline-block w-6 h-6 mr-2 -mt-1 ml-2" />
//               Statistics
//             </Link>
//           </li>
//           <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
//             <Link to="/Settings" onClick={toggleSidebar}>
//               <IoMdSettings className="inline-block w-6 h-6 mr-2 -mt-1 ml-2" />
//               Settings
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Sidebar;
