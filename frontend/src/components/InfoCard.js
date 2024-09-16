// import React from "react";
// import Infocardimg from "../../public/images/Infocardimg.jpg";
// const InfoCard = () => {
//   return (
//     <div className="relative mt-12 h-[550px] w-full">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${Infocardimg})`, // Replace with your image URL
//         }}
//       ></div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-yellow-500 opacity-60"></div>

//       {/* Text on top */}
//       <div className="relative flex font-poppins text-left  flex-col items-center justify-center h-full">
//         <p className="text-white text-2xl text-justify font-light">
//           Discover the Soul of Desi Cuisine
//         </p>
//         <p className="text-white text-center font-light">
//           Our journey begins with the freshest ingredients, infused with bold
//           spices that have been
//         </p>
//         <p className="text-white text-left font-light">
//           at the heart of Desi kitchens for centuries. From the sizzle of cumin
//           in hot oil to the fragrant
//         </p>
//         <p className="text-white text-center font-light">
//           aroma of freshly ground garam masala, each dish tells a story of
//           tradition,culture,and passion.
//         </p>

//         <h2 className="text-white text-center font-bold mt-2">Learn more</h2>
//       </div>
//     </div>
//   );
// };

// export default InfoCard;
import React from "react";

const InfoCard = () => {
  return (
    <div className="relative mt-12 h-[550px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Infocardimg.jpg)` }} // Updated path
      ></div>

      <div className="absolute inset-0 bg-yellow-500 opacity-60"></div>

      <div className="relative flex font-poppins text-left flex-col items-center justify-center h-full">
        <p className="text-white text-2xl text-justify font-light">
          Discover the Soul of Desi Cuisine
        </p>
        <p className="text-white text-center font-light">
          Our journey begins with the freshest ingredients, infused with bold
          spices that have been
        </p>
        <p className="text-white text-left font-light">
          at the heart of Desi kitchens for centuries. From the sizzle of cumin
          in hot oil to the fragrant
        </p>
        <p className="text-white text-center font-light">
          aroma of freshly ground garam masala, each dish tells a story of
          tradition,culture,and passion.
        </p>
        <h2 className="text-white text-center font-bold mt-2">Learn more</h2>
      </div>
    </div>
  );
};

export default InfoCard;
