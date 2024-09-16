import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4">
        {/* Title/Info Section */}
        <div className="ml-20">
          {" "}
          {/* Add left margin here */}
          <h3 className="text-white font-bold text-lg">THE CHEF</h3>
          <p className="mt-4">
            Experience a taste of heritage, where every dish is a celebration of
            bold spices, time-honored recipes, and the vibrant spirit of our
            culture.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="bg-white text-black rounded-full p-2 w-8 h-8 flex justify-center items-center hover:bg-gray-300 transition duration-300"
            >
              <i className="fab fa-facebook-f"></i> {/* FontAwesome Icon */}
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="bg-white text-black rounded-full p-2 w-8 h-8 flex justify-center items-center hover:bg-gray-300 transition duration-300"
            >
              <i className="fab fa-twitter"></i> {/* FontAwesome Icon */}
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="bg-white text-black rounded-full p-2 w-8 h-8 flex justify-center items-center hover:bg-gray-300 transition duration-300"
            >
              <i className="fab fa-instagram"></i> {/* FontAwesome Icon */}
            </a>
            <a
              href="#"
              aria-label="Tiktok"
              className="bg-white text-black rounded-full p-2 w-8 h-8 flex justify-center items-center hover:bg-gray-300 transition duration-300"
            >
              <i className="fab fa-tiktok"></i> {/* FontAwesome Icon */}
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className=" ml-80 w-full">
          <h3 className="text-white font-bold text-lg">ABOUT</h3>
          <ul className="mt-4 space-y-2 ">
            <li>
              <a href="#" className="hover:text-white">
                History
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="ml-40 w-full">
          <h3 className="text-white font-bold text-lg">SERVICES</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                How We Work
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Order Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping
              </a>
            </li>
          </ul>
        </div>

        {/* Other Section */}
        <div className=" w-full">
          <h3 className="text-white font-bold text-lg">OTHER</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Payment Methods
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
