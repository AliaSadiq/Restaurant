// import React from 'react';
// import special from "../../public/images/special.png";
// import beef from "/i../../public/images/BeefTeriyaki.jpg";

// const SpecialSection = () => {
//   return (
//     <div
//       className="w-full "
//       style={{ backgroundImage: `url(${special})` }}
//     >
//       <div className="flex items-center">
//         <img
//           src={beef}
//           alt="Oriental Taste"
//           className="w-[500px]  ml-[200px] h-[500px] shadow-inner rounded-full"
//         />
//         <div className=" ml-40 text-justify mt-56 text-center">
//           <h2 className="text-5xl  mb-10 text-yellow-500 font-pacifico ">Oriental Taste</h2>
//           <p className="text-white font-poppins">Delight in the rich, bold flavors of the East with our  </p>
//           <p className="text-white font-poppins">carefully curated oriental taste dishes.Each bite is </p>
//           <p className="text-white font-poppins">a journey through tradition and culinary artistry,</p>
//           <p className="text-white mb-3 font-poppins">designed to awaken your senses.</p>
//           <button className="mt-8 bg-yellow-500 font-poppins font-bold text-black px-6 py-3 rounded-md hover:bg-yellow-600">Order Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

//  export default SpecialSection;
// import React from "react";

// const SpecialSection = () => {
//   return (
//     <div
//       className="w-full "
//       style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/special.png)` }} // Updated image path
//     >
//       <div className="flex items-center">
//         <img
//           src="/images/BeefTeriyaki.jpg" // Updated image path
//           alt="Oriental Taste"
//           className="w-[500px] ml-[200px] h-[500px] shadow-inner rounded-full"
//         />
//         <div className="ml-40 text-justify mt-56 text-center">
//           <h2 className="text-5xl mb-10 text-yellow-500 font-pacifico">
//             Oriental Taste
//           </h2>
//           <p className="text-white font-poppins">
//             Delight in the rich, bold flavors of the East with our carefully
//             curated oriental taste dishes.
//           </p>
//           <button className="mt-8 bg-yellow-500 font-poppins font-bold text-black px-6 py-3 rounded-md hover:bg-yellow-600">
//             Order Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default SpecialSection;
// import React from "react";

// const SpecialSection = () => {
//   return (
//     <div
//       className="w-full"
//       style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/special.png)` }} // Updated image path
//     >
//       <div className="flex items-center">
//         <img
//           src={`${process.env.PUBLIC_URL}/images/BeefTeriyaki.jpg`} // Updated image path
//           alt="Oriental Taste"
//           className="w-[500px] ml-[200px] h-[500px] shadow-inner rounded-full"
//         />
//         <div className="lg:ml-40 text-justify m-l20 mt-56 text-center">
//           <h2 className="text-5xl mb-10 text-yellow-500 font-pacifico">
//             Oriental Taste
//           </h2>
//           <p className="text-white font-poppins">
//             Delight in the rich, bold flavors of the East with our carefully
//             curated oriental taste dishes.
//           </p>
//           <button className="mt-8 bg-yellow-500 font-poppins font-bold text-black px-6 py-3 rounded-md hover:bg-yellow-600">
//             Order Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpecialSection;import React from "react";

const SpecialSection = () => {
  return (
    <div
      className="w-full h-screen bg-fixed bg-cover bg-center lg:h-[750px]"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/special.png)` }}
    >
      <div className="flex flex-col items-center justify-center h-full px-4 md:flex-row md:justify-between lg:px-8 lg:py-16">
        <img
          src={`${process.env.PUBLIC_URL}/images/BeefTeriyaki.jpg`}
          alt="Oriental Taste"
          className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] mx-auto mb-6 md:mb-0 shadow-inner rounded-full"
        />
        <div className="text-center md:text-left md:ml-8 lg:ml-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-yellow-500 font-pacifico">
            Oriental Taste
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl lg:mr-12 text-white font-poppins">
            Delight in the rich, bold flavors of the East with our carefully
            curated oriental taste dishes.
          </p>
          <button className="mt-6 bg-yellow-500 font-poppins font-bold text-black px-4 py-2 rounded-md hover:bg-yellow-600 md:px-5 md:py-3 lg:px-6 lg:py-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialSection;
