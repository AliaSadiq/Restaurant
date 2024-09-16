// import heroimage from "../../public/images/heroimage.jpg";
// import blackhero from "../../public/images/blackhero.png";

// const HeroSection = () => {
//   return (
//     <section className="relative h-screen grid grid-cols-1 md:grid-cols-2 z-0">
//       {/* Left side (Image) */}
//       <div className="h-full">
//         <img
//           src={heroimage}
//           alt="Delicious food in a pan"
//           className="object-cover h-[725px] w-full"
//         />
//       </div>

//       {/* Right side (Black Background with text overlapping the image) */}
//       <div className="relative   mb-80 -ml-[450px] grid grid-col lg:grid-row  items-center justify-start z-10">
//         {/* Adjust the width so it starts from the Home link */}
//         <img
//           src={blackhero}
//           alt="Black Hero Section"
//           className="object-cover h-full w-[calc(100vw-100px)] z-0" // Start image 100px from left (width depends on screen)
//         />
//         {/* Overlay Text */}
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-center  p-10 z-10 ml-[100px]">
//           <h1 className="text-4xl md:text-6xl font-pacifico text-yellow-400 ml-24 mt-28 font-bold mb-4">
//             Delicious Food for You
//           </h1>
//           <p className="text-lg md:text-xl font-poppins text-white ml-24 mb-3">
//             Discover the finest recipes and cooking tips to bring out the chef
//             in you.
//           </p>
//           <p className="text-lg md:text-xl font-poppins ml-24 text-center text-white mb-6">
//             Order now and experience the best in gourmet cuisine.
//           </p>
//           <button
//             className="bg-yellow-500 font-poppins text-black px-6 py-3 font-bold rounded hover:bg-yellow-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300"
//             aria-label="Order delicious food"
//           >
//             Order Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen grid grid-cols-1 md:grid-cols-2 z-0">
      <div className="h-full">
        <img
          src={`${process.env.PUBLIC_URL}/images/heroimage.jpg`} // Updated image path
          alt="Delicious food in a pan"
          className="object-cover h-[725px] w-full"
        />
      </div>

      <div className="relative mb-80 -ml-[450px] grid grid-cols-1 lg:grid-rows-1 items-center justify-start z-10">
        <img
          src={`${process.env.PUBLIC_URL}/images/blackhero.png`} // Updated image path
          alt="Black Hero Section"
          className="object-cover h-full w-[calc(100vw-100px)] z-0"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-10 z-10 ml-[100px]">
          <h1 className="text-4xl md:text-6xl font-pacifico text-yellow-400 ml-24 mt-28 font-bold mb-4">
            Delicious Food for You
          </h1>
          <p className="text-lg md:text-xl font-poppins text-white ml-24 mb-3">
            Discover the finest recipes and cooking tips to bring out the chef
            in you.
          </p>
          <p className="text-lg md:text-xl font-poppins text-white ml-24 mb-3">
            Order now and experience the best in gourmet cuisine.
          </p>
          <button className="bg-yellow-500 font-poppins text-black px-6 py-3 font-bold rounded hover:bg-yellow-400">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
