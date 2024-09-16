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
import React from "react";

const StatisticsSection = () => {
  return (
    <div>
      {/* Statistics Section */}
      <div
        className="h-[800px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/statisticsbg.png)`,
        }}
      >
        <div className="text-white text-center pt-32">
          <h2 className="text-5xl text-yellow-500 font-pacifico">Statistics</h2>
          <p className="font-poppins mt-10 text-white">
            Explore the numbers that define our success—serving across 30
            countries, with 123 outlets,
          </p>
          <p className="font-poppins text-white">
            100 master chefs, and over 300 curated menus.
          </p>
          <div className="flex justify-center space-x-12 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 border border-white bg-zinc-800 rounded-full flex flex-col items-center justify-center mb-4">
                <span className="text-3xl font-poppins text-yellow-500 font-bold">
                  123
                </span>
                <p className="text-white font-poppins font-bold mt-2">
                  OUTLETS
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 border border-white bg-zinc-800 rounded-full flex flex-col items-center justify-center mb-4">
                <span className="text-3xl font-poppins text-yellow-500 font-bold">
                  100
                </span>
                <p className="text-white font-poppins font-bold mt-2">CHEFS</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 border border-white bg-zinc-800 rounded-full flex flex-col items-center justify-center mb-4">
                <span className="text-3xl font-poppins text-yellow-500 font-bold">
                  300
                </span>
                <p className="text-white font-poppins font-bold mt-2">MENUS</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 border border-white bg-zinc-800 rounded-full flex flex-col items-center justify-center mb-4">
                <span className="text-3xl font-poppins text-yellow-500 font-bold">
                  30
                </span>
                <p className="text-white font-poppins font-bold mt-2">
                  COUNTRIES
                </p>
              </div>
            </div>
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
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 text-center md:text-left p-8">
            <h2 className="text-5xl mb-10 ml-20 -mt-48 text-yellow-500 font-pacifico">
              Chicken Biryani
            </h2>
            <p className="text-white ml-20 font-poppins">
              Experience the timeless tradition of Chicken Biryani,
            </p>
            <p className="text-white ml-20 font-poppins">
              a flavorful journey of marinated chicken, basmati rice
            </p>
            <p className="text-white ml-20 font-poppins">
              and layered with a blend of hand-picked spices, creating
            </p>
            <p className="text-white ml-20 font-poppins">
              a symphony of taste and tradition in every bite
            </p>
            <button className="mt-8 bg-yellow-500 ml-20 font-poppins font-bold text-black px-6 py-3 rounded-md hover:bg-yellow-600">
              Order Now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/Biryanis.jpg`}
              alt="Oriental Taste"
              className="w-[500px]  mr-12 h-[500px] shadow-inner rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;

