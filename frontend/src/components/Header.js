// import React, { useState, useEffect } from 'react';
// import logo from "../images/logo.png";
// import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Import icons from Heroicons

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setIsScrolled(scrollPosition > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`fixed w-full z-30 top-0 p-4 flex justify-between items-center font-poppins text-white ${isScrolled ? 'bg-zinc-800' : 'bg-transparent'} transition-colors duration-1000 ease-in-out`}>
//       <div className="flex items-center space-x-3 rtl:space-x-reverse">
//         <img src={logo} className="h-20" alt="Plantify Logo" />
//       </div>

//       {/* Desktop Navigation */}
//       <nav className="hidden md:flex">
//         <ul className="flex mt-6 ml-10 space-x-24">
//           <li><a href="#" className="hover:text-yellow-500">Home</a></li>
//           <li><a href="#" className="hover:text-yellow-500">Product</a></li>
//           <li><a href="#" className="hover:text-yellow-500">Promo</a></li>
//           <li><a href="#" className="hover:text-yellow-500">About</a></li>
//           <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
//         </ul>
//       </nav>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden">
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <XIcon className="h-6 w-6 text-white" /> : <MenuIcon className="h-6 w-6 text-white" />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <div className={`fixed top-0 right-0 h-full w-[500px] bg-zinc-800 text-white z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
//         <div className="flex flex-col items-center justify-center h-full p-6 space-y-6">
//           <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4">
//             <XIcon className="h-8 w-8 text-white" />
//           </button>
//           <ul className="space-y-6 text-center">
//             <li><a href="#" className="text-2xl hover:text-yellow-500">Home</a></li>
//             <li><a href="#" className="text-2xl hover:text-yellow-500">Product</a></li>
//             <li><a href="#" className="text-2xl hover:text-yellow-500">Promo</a></li>
//             <li><a href="#" className="text-2xl hover:text-yellow-500">About</a></li>
//             <li><a href="#" className="text-2xl hover:text-yellow-500">Contact</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="hidden md:flex mt-4 space-x-2">
//         <button className="bg-yellow-500 font-poppins font-bold text-black px-4 py-2 rounded-md hover:bg-yellow-600">Sign Up</button>
//         <button className="bg-yellow-500 font-poppins font-bold text-black px-4 py-2 rounded-md hover:bg-yellow-600">Login</button>
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useState, useEffect } from "react";

import {
  MenuIcon,
  XIcon,
  HomeIcon,
  CubeIcon,
  TagIcon,
  UserGroupIcon,
  PhoneIcon,
} from "@heroicons/react/outline"; // Import icons from Heroicons

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full z-30 top-0 p-4 flex justify-between items-center font-poppins text-white ${
        isScrolled ? "bg-zinc-800" : "bg-transparent"
      } transition-colors duration-1000 ease-in-out`}
    >
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} className="h-20" alt="Logo" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex mt-6 ml-10 space-x-24">
          <li>
            <a href="#" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500">
              Product
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500">
              Promo
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <XIcon className="h-6 w-6 text-white" />
          ) : (
            <MenuIcon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-zinc-800 text-white z-40 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4"
          >
            <XIcon className="h-8 w-8 text-white" />
          </button>

          {/* Menu Items */}
          <div className="flex flex-col justify-center items-center mt-16 space-y-6">
            <a
              href="#"
              className="flex items-center space-x-4 text-white text-xl hover:text-yellow-500"
            >
              <HomeIcon className="h-6 w-6" />
              <span>Home</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-4 text-white text-xl hover:text-yellow-500"
            >
              <CubeIcon className="h-6 w-6" />
              <span>Product</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-4 text-white text-xl hover:text-yellow-500"
            >
              <TagIcon className="h-6 w-6" />
              <span>Promo</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-4 text-white text-xl hover:text-yellow-500"
            >
              <UserGroupIcon className="h-6 w-6" />
              <span>About</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-4 text-white text-xl hover:text-yellow-500"
            >
              <PhoneIcon className="h-6 w-6" />
              <span>Contact</span>
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-end flex-grow mb-6">
            <button className="bg-yellow-500 font-poppins font-bold text-black px-4 py-2 rounded-md hover:bg-yellow-600 mb-2">
              Sign Up
            </button>
            <button className="bg-yellow-500 font-poppins font-bold text-black px-4 py-2 rounded-md hover:bg-yellow-600">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Buttons for Desktop */}
      <div className="hidden md:flex mt-4 space-x-2">
        <button className="bg-yellow-500 font-poppins font-bold text-black px-4 py-2 rounded-md hover:bg-yellow-600">
          Sign Up
        </button>
        <button className="bg-yellow-500 font-poppins font-bold text-black px-4 py-2 rounded-md hover:bg-yellow-600">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
