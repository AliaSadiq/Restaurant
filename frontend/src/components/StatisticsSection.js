// import React from "react";
// import statisticsbg from "../../public/images/statisticsbg.png";
// import Biryani from "../../public/images/Biryanis.jpg";
// import specialb from "../../public/images/specialb.png";

// const StatisticsSection = () => {
//   return (
//     <div>
//       {/* Statistics Section */}
//       <div
//         className="h-[800px] bg-cover bg-center"
//         style={{ backgroundImage: `url(${statisticsbg})` }}
//       >
//         <div className="text-white text-center pt-32">
//           <h2 className="text-5xl text-yellow-500 font-pacifico">Statistics</h2>
//           <p className="font-poppins mt-10 text-white">
//             Explore the numbers that define our success—serving across 30
//             countries, with 123 outlets,
//           </p>
//           <p className="font-poppins text-white">
//             100 master chefs, and over 300 curated menus.
//           </p>
//           <div className="flex justify-center space-x-12 mt-8">
//             <div className="flex flex-col items-center">
//               <div className="w-32 h-32 border border-white bg-zinc-800 rounded-full flex flex-col items-center justify-center mb-4">
//                 <span className="text-3xl font-poppins text-yellow-500 font-bold">
//                   123
//                 </span>
//                 <p className="text-white font-poppins font-bold mt-2">
//                   OUTLETS
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col items-center">
//               <div className="w-32 h-32 border border-white bg-zinc-800 rounded-full flex flex-col items-center justify-center mb-4">
//                 <span className="text-3xl font-poppins text-yellow-500 font-bold">
//                   100
//                 </span>
//                 <p className="text-white font-poppins font-bold mt-2">CHEFS</p>
//               </div>
//             </div>
//             <div className="flex flex-col items-center">
//               <div className="w-32 h-32 border border-white bg-zinc-800 rounded-full flex flex-col items-center justify-center mb-4">
//                 <span className="text-3xl font-poppins text-yellow-500 font-bold">
//                   300
//                 </span>
//                 <p className="text-white font-poppins font-bold mt-2">MENUS</p>
//               </div>
//             </div>
//             <div className="flex flex-col items-center">
//               <div className="w-32 h-32 border border-white bg-zinc-800 rounded-full flex flex-col items-center justify-center mb-4">
//                 <span className="text-3xl font-poppins text-yellow-500 font-bold">
//                   30
//                 </span>
//                 <p className="text-white font-poppins font-bold mt-2">
//                   COUNTRIES
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Special Section */}
//       <div
//         className="w-full bg-cover bg-center"
//         style={{ backgroundImage: `url(${specialb})` }}
//       >
//         <div className="flex flex-col md:flex-row items-center md:space-x-8">
//           <div className="md:w-1/2 text-center md:text-left p-8">
//             <h2 className="text-5xl mb-10 ml-20 -mt-48 text-yellow-500 font-pacifico">
//               Chicken Biryani
//             </h2>
//             <p className="text-white ml-20 font-poppins">
//               Experience the timeless tradition of Chicken Biryani,
//             </p>
//             <p className="text-white ml-20 font-poppins">
//               a flavorful journey of marinated chicken, basmati rice
//             </p>
//             <p className="text-white ml-20 font-poppins">
//               and layered with a blend of hand-picked spices, creating
//             </p>
//             <p className="text-white ml-20 font-poppins">
//               a symphony of taste and tradition in every bite
//             </p>
//             <button className="mt-8 bg-yellow-500 ml-20 font-poppins font-bold text-black px-6 py-3 rounded-md hover:bg-yellow-600">
//               Order Now
//             </button>
//           </div>
//           <div className="md:w-1/2 flex justify-center">
//             <img
//               src={Biryani}
//               alt="Oriental Taste"
//               className="w-[500px]  mr-12 h-[500px] shadow-inner rounded-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatisticsSection;
// import React from "react";

// const StatisticsSection = () => {
//   return (
//     <div>
//       {/* Statistics Section */}
//       <div
//         className="h-[800px] bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${process.env.PUBLIC_URL}/images/statisticsbg.png)`,
//         }}
//       >
//         <div className="text-white text-center pt-32">
//           <h2 className="text-5xl text-yellow-500 font-pacifico">Statistics</h2>
//           <p className="font-poppins mt-10 text-white">
//             Explore the numbers that define our success—serving across 30
//             countries, with 123 outlets,
//           </p>
//           <p className="font-poppins text-white">
//             100 master chefs, and over 300 curated menus.
//           </p>
//           <div className="flex justify-center space-x-12 mt-8">
//             <div className="flex flex-col items-center">
//               <div className="w-32 h-32 border border-white bg-zinc-800 rounded-full flex flex-col items-center justify-center mb-4">
//                 <span className="text-3xl font-poppins text-yellow-500 font-bold">
//                   123
//                 </span>
//                 <p className="text-white font-poppins font-bold mt-2">
//                   OUTLETS
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col items-center">
//               <div className="w-32 h-32 border border-white bg-zinc-800 rounded-full flex flex-col items-center justify-center mb-4">
//                 <span className="text-3xl font-poppins text-yellow-500 font-bold">
//                   100
//                 </span>
//                 <p className="text-white font-poppins font-bold mt-2">CHEFS</p>
//               </div>
//             </div>
//             <div className="flex flex-col items-center">
//               <div className="w-32 h-32 border border-white bg-zinc-800 rounded-full flex flex-col items-center justify-center mb-4">
//                 <span className="text-3xl font-poppins text-yellow-500 font-bold">
//                   300
//                 </span>
//                 <p className="text-white font-poppins font-bold mt-2">MENUS</p>
//               </div>
//             </div>
//             <div className="flex flex-col items-center">
//               <div className="w-32 h-32 border border-white bg-zinc-800 rounded-full flex flex-col items-center justify-center mb-4">
//                 <span className="text-3xl font-poppins text-yellow-500 font-bold">
//                   30
//                 </span>
//                 <p className="text-white font-poppins font-bold mt-2">
//                   COUNTRIES
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Special Section */}
//       <div
//         className="w-full bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${process.env.PUBLIC_URL}/images/specialb.png)`,
//         }}
//       >
//         <div className="flex flex-col md:flex-row items-center md:space-x-8">
//           <div className="md:w-1/2 text-center md:text-left p-8">
//             <h2 className="text-5xl mb-10 ml-20 -mt-48 text-yellow-500 font-pacifico">
//               Chicken Biryani
//             </h2>
//             <p className="text-white ml-20 font-poppins">
//               Experience the timeless tradition of Chicken Biryani,
//             </p>
//             <p className="text-white ml-20 font-poppins">
//               a flavorful journey of marinated chicken, basmati rice
//             </p>
//             <p className="text-white ml-20 font-poppins">
//               and layered with a blend of hand-picked spices, creating
//             </p>
//             <p className="text-white ml-20 font-poppins">
//               a symphony of taste and tradition in every bite
//             </p>
//             <button className="mt-8 bg-yellow-500 ml-20 font-poppins font-bold text-black px-6 py-3 rounded-md hover:bg-yellow-600">
//               Order Now
//             </button>
//           </div>
//           <div className="md:w-1/2 flex justify-center">
//             <img
//               src={`${process.env.PUBLIC_URL}/images/Biryanis.jpg`}
//               alt="Oriental Taste"
//               className="w-[500px]  mr-12 h-[500px] shadow-inner rounded-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default StatisticsSection;
// import React from "react";

// const StatisticsSection = () => {
//   return (
//     <div>
//       {/* Statistics Section */}
//       <div
//         className="h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${process.env.PUBLIC_URL}/images/statisticsbg.png)`,
//         }}
//       >
//         <div className="text-white text-center pt-24 sm:pt-32">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-yellow-500 font-pacifico">
//             Statistics
//           </h2>
//           <p className="font-poppins mt-6 sm:mt-10 text-sm sm:text-base md:text-lg lg:text-xl">
//             Explore the numbers that define our success—serving across 30
//             countries, with 123 outlets,
//           </p>
//           <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl">
//             100 master chefs, and over 300 curated menus.
//           </p>
//           <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 md:space-x-12 lg:space-x-16 mt-8">
//             {[
//               { number: "123", label: "OUTLETS" },
//               { number: "100", label: "CHEFS" },
//               { number: "300", label: "MENUS" },
//               { number: "30", label: "COUNTRIES" },
//             ].map((stat, index) => (
//               <div key={index} className="flex flex-col items-center mb-8 sm:mb-0">
//                 <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 border border-white bg-zinc-800 rounded-full flex flex-col items-center justify-center">
//                   <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins text-yellow-500 font-bold">
//                     {stat.number}
//                   </span>
//                   <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-poppins font-bold mt-1">
//                     {stat.label}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Special Section */}
//       <div
//         className="w-full bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${process.env.PUBLIC_URL}/images/specialb.png)`,
//         }}
//       >
//         <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-4 md:p-8 lg:p-12">
//           <div className="md:w-1/2 text-center md:text-left">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-yellow-500 font-pacifico">
//               Chicken Biryani
//             </h2>
//             <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
//               Experience the timeless tradition of Chicken Biryani,
//             </p>
//             <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
//               a flavorful journey of marinated chicken, basmati rice
//             </p>
//             <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
//               and layered with a blend of hand-picked spices, creating
//             </p>
//             <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
//               a symphony of taste and tradition in every bite
//             </p>
//             <button className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 bg-yellow-500 font-poppins font-bold text-black px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-5 rounded-md hover:bg-yellow-600">
//               Order Now
//             </button>
//           </div>
//           <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
//             <img
//               src={`${process.env.PUBLIC_URL}/images/Biryanis.jpg`}
//               alt="Chicken Biryani"
//               className="w-[300px] h-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px]  shadow-inner rounded-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatisticsSection;
import React from "react";

const StatisticsSection = () => {
  return (
    <div>
      {/* Statistics Section */}
      <div
        className="h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/statisticsbg.png)`,
        }}
      >
        <div className="text-white text-center pt-24 sm:pt-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-yellow-500 font-pacifico">
            Statistics
          </h2>
          <p className="font-poppins mt-6 sm:mt-10 text-sm sm:text-base md:text-lg lg:text-xl">
            Explore the numbers that define our success—serving across 30
            countries, with 123 outlets,
          </p>
          <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl">
            100 master chefs, and over 300 curated menus.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 md:space-x-12 lg:space-x-16 mt-8">
            {[ 
              { number: "123", label: "OUTLETS" },
              { number: "100", label: "CHEFS" },
              { number: "300", label: "MENUS" },
              { number: "30", label: "COUNTRIES" }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center mb-8 sm:mb-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 border border-white bg-zinc-800 rounded-full flex flex-col items-center justify-center">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins text-yellow-500 font-bold">
                    {stat.number}
                  </span>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-poppins font-bold mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Section */}
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/specialb.png)`,
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-4 md:p-8 lg:p-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-yellow-500 font-pacifico">
              Chicken Biryani
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
              Experience the timeless tradition of Chicken Biryani,
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
              a flavorful journey of marinated chicken, basmati rice
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
              and layered with a blend of hand-picked spices, creating
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
              a symphony of taste and tradition in every bite
            </p>
            <button className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 bg-yellow-500 font-poppins font-bold text-black px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-5 rounded-md hover:bg-yellow-600">
              Order Now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img
              src={`${process.env.PUBLIC_URL}/images/Biryanis.jpg`}
              alt="Chicken Biryani"
              className="w-[300px] h-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] shadow-inner rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
