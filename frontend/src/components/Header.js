// import React, { useState, useEffect } from "react";

// import {
//   MenuIcon,
//   XIcon,
//   HomeIcon,
//   CubeIcon,
//   TagIcon,
//   UserGroupIcon,
//   PhoneIcon,
//   LockClosedIcon,
//   UserAddIcon,
// } from "@heroicons/react/outline";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setIsScrolled(scrollPosition > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className={`fixed w-full z-30 top-0 p-4 flex justify-between items-center font-poppins h-20 lg:h-24 text-white ${
//         isScrolled ? "bg-zinc-800" : "bg-transparent"
//       } transition-colors duration-1000 ease-in-out`}
//     >
//       {/* Logo */}
//       <img
//         src={`${process.env.PUBLIC_URL}/images/logo.png`}
//         className="h-16 w-16 ml-32 md:h-24 md:w-24 md:ml-60 lg:ml-1 lg:items-start lg:h-20 lg:w-32"
//         alt="Logo"
//       />

//       {/* Desktop Navigation */}
//       <nav className="hidden lg:flex">
//         <ul className="flex mt-3 ml-[450px] space-x-24">
//           <li>
//             <a href="#" className="hover:text-yellow-500">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-yellow-500">
//               Product
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-yellow-500">
//               Promo
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-yellow-500">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-yellow-500">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* Mobile Menu Button */}
//       <div className="lg:hidden">
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? (
//             <XIcon className="h-6 w-6 text-white" />
//           ) : (
//             <MenuIcon className="h-10 ml-40 w-10 text-white" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         className={`fixed top-0 right-0 h-screen w-[370px] bg-zinc-800 text-white z-40 transform ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out lg:hidden`}
//       >
//         <div className="flex flex-col h-full">
//           {/* Top Divider with Name */}
//           <div className="border-b border-gray-600 py-4 px-6">
//             <h1 className="font-poppins mb-3 mt-2 text-center text-lg font-bold">
//               THE CHEF{" "}
//             </h1>
//           </div>

//           {/* Close Button */}
//           <button
//             onClick={() => setIsMenuOpen(false)}
//             className="absolute top-5 right-4"
//           >
//             <XIcon className="h-6 w-6 text-white" />
//           </button>

//           {/* Menu Items with Separators */}
//           <div className="flex flex-col justify-start mt-4 ml-5 space-y-6">
//             <a
//               href="#"
//               className="flex items-center space-x-4 text-white text-xl hover:text-yellow-500 py-5 md:py-4 border-b border-gray-600"
//             >
//               <HomeIcon className="h-6 w-6" />
//               <span>Home</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center space-x-4 text-white text-xl hover:text-yellow-500 py-5 md:py-4 border-b border-gray-600"
//             >
//               <CubeIcon className="h-6 w-6" />
//               <span>Product</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center space-x-4 text-white text-xl hover:text-yellow-500 py-5 md:py-4 border-b border-gray-600"
//             >
//               <TagIcon className="h-6 w-6" />
//               <span>Promo</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center space-x-4 text-white text-xl hover:text-yellow-500 py-5 md:py-4 border-b border-gray-600"
//             >
//               <UserGroupIcon className="h-6 w-6" />
//               <span>About</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center space-x-4 text-white text-xl hover:text-yellow-500 py-5 md:py-4 border-b border-gray-600"
//             >
//               <PhoneIcon className="h-6 w-6" />
//               <span>Contact</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center space-x-4 text-white text-xl hover:text-yellow-500 py-5 md:py-4 border-b border-gray-600"
//             >
//               <UserAddIcon className="h-6 w-6" />
//               <span>Sign Up</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center space-x-4 text-white text-xl mb-2 border-b border-gray-600 hover:text-yellow-500 py-6 md:py-4"
//             >
//               <LockClosedIcon className="h-6 w-6" />
//               <span>Login</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Buttons for Desktop */}
//       <div className="hidden lg:flex mt-4 space-x-2">
//         <button className="bg-yellow-500 font-poppins font-bold text-black px-4 py-2 rounded-md hover:bg-yellow-600">
//           Sign Up
//         </button>
//         <button className="bg-yellow-500 font-poppins font-bold text-black px-4 py-2 rounded-md hover:bg-yellow-600">
//           Login
//         </button>
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
  LockClosedIcon,
  UserAddIcon,
} from "@heroicons/react/outline";
import Login from "../components/LogIn"; // Import the Login component

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

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

  const handleLoginSuccess = () => {
    setIsLoginVisible(false);
    // Additional actions after successful login (e.g., show a success message)
  };

  return (
    <div>
      {isLoginVisible && <Login onLoginSuccess={handleLoginSuccess} />} {/* Render Login component conditionally */}

      <div
        className={`fixed w-full z-30 top-0 p-4 flex justify-between items-center font-poppins h-20 lg:h-24 text-white ${
          isScrolled ? "bg-zinc-800" : "bg-transparent"
        } transition-colors duration-1000 ease-in-out`}
      >
        {/* Logo */}
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          className="h-16 w-16 ml-32 md:h-24 md:w-24 md:ml-60 lg:ml-1 lg:items-start lg:h-20 lg:w-32"
          alt="Logo"
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex mt-3 ml-[450px] space-x-24">
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
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <XIcon className="h-6 w-6 text-white" />
            ) : (
              <MenuIcon className="h-10 ml-40 w-10 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 right-0 h-screen w-[370px] bg-zinc-800 text-white z-40 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className="flex flex-col h-full">
            {/* Top Divider with Name */}
            <div className="border-b border-gray-600 py-4 px-6">
              <h1 className="font-poppins mb-3 mt-2 text-center text-lg font-bold">
                THE CHEF{" "}
              </h1>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-4"
            >
              <XIcon className="h-6 w-6 text-white" />
            </button>

            {/* Menu Items with Separators */}
            <div className="flex flex-col justify-start mt-4 ml-5 space-y-6">
              <a
                href="#"
                className="flex items-center space-x-4 text-white text-xl hover:text-yellow-500 py-5 md:py-4 border-b border-gray-600"
              >
                <HomeIcon className="h-6 w-6" />
                <span>Home</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-4 text-white text-xl hover:text-yellow-500 py-5 md:py-4 border-b border-gray-600"
              >
                <CubeIcon className="h-6 w-6" />
                <span>Product</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-4 text-white text-xl hover:text-yellow-500 py-5 md:py-4 border-b border-gray-600"
              >
                <TagIcon className="h-6 w-6" />
                <span>Promo</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-4 text-white text-xl hover:text-yellow-500 py-5 md:py-4 border-b border-gray-600"
              >
                <UserGroupIcon className="h-6 w-6" />
                <span>About</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-4 text-white text-xl hover:text-yellow-500 py-5 md:py-4 border-b border-gray-600"
              >
                <PhoneIcon className="h-6 w-6" />
                <span>Contact</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-4 text-white text-xl hover:text-yellow-500 py-5 md:py-4 border-b border-gray-600"
              >
                <UserAddIcon className="h-6 w-6" />
                <span>Sign Up</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-4 text-white text-xl mb-2 border-b border-gray-600 hover:text-yellow-500 py-6 md:py-4"
                onClick={() => setIsLoginVisible(true)} // Open Login form
              >
                <LockClosedIcon className="h-6 w-6" />
                <span>Login</span>
              </a>
            </div>
          </div>
        </div>

        {/* Buttons for Desktop */}
        <div className="hidden lg:flex mt-4 space-x-2">
          <button className="bg-yellow-500 font-poppins font-bold text-black px-4 py-2 rounded-md hover:bg-yellow-600">
            Sign Up
          </button>
          <button
            className="bg-yellow-500 font-poppins font-bold text-black px-4 py-2 rounded-md hover:bg-yellow-600"
            onClick={() => setIsLoginVisible(true)} // Open Login form
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
