
// import React from "react";

// const BestSeller = () => {
//   const products = [
//     {
//       title: "Rajma Masala",
//       description: "Spiced kidney beans with steamed rice.",
//       imageUrl: `${process.env.PUBLIC_URL}/images/RajmaMasala.jpg`, // Correct URL
//     },
//     {
//       title: "Chicken Biryani",
//       description: "Fragrant rice with tender chicken and spices",
//       imageUrl: `${process.env.PUBLIC_URL}/images/Biryanis.jpg`, // Correct URL
//     },
//     {
//       title: "Vegetable Platter",
//       description: "A vibrant mix of fresh, seasoned vegetables.",
//       imageUrl: `${process.env.PUBLIC_URL}/images/vegplatter.jpg`, // Correct URL
//     },
//   ];

//   return (
//     <div className="py-12 text-center">
//       <h2 className="text-5xl mt-10 font-pacifico mb-4">Best Seller</h2>
//       <p className="text-gray-500 font-poppins">
//         Our best-selling dishes are a perfect blend of fresh ingredients, unique
//         flavors, and culinary expertise,
//       </p>
//       <p className="text-gray-500 mb-20 font-poppins">
//         carefully crafted to bring you an unforgettable dining experience that
//         will leave you coming back for more.
//       </p>
//       <div className="flex justify-center space-x-10">
//         {products.map((product, index) => (
//           <div key={index} className="text-center">
//             <div className="w-40 h-40 mx-auto mb-4">
//               <img
//                 src={product.imageUrl}
//                 alt={product.title}
//                 className="w-full h-full rounded-full object-cover shadow-lg"
//               />
//             </div>
//             <h3 className="text-lg font-semibold font-poppins">
//               {product.title}
//             </h3>
//             <p className="text-gray-500 font-poppins">{product.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BestSeller;
// // import React from "react";

// // const BestSeller = () => {
// //   const products = [
// //     {
// //       title: "Rajma Masala",
// //       description: "Spiced kidney beans with steamed rice.",
// //       imageUrl: `${process.env.PUBLIC_URL}/images/RajmaMasala.jpg`, // Correct URL
// //     },
// //     {
// //       title: "Chicken Biryani",
// //       description: "Fragrant rice with tender chicken and spices",
// //       imageUrl: `${process.env.PUBLIC_URL}/images/Biryanis.jpg`, // Correct URL
// //     },
// //     {
// //       title: "Vegetable Platter",
// //       description: "A vibrant mix of fresh, seasoned vegetables.",
// //       imageUrl: `${process.env.PUBLIC_URL}/images/vegplatter.jpg`, // Correct URL
// //     },
// //   ];

// //   return (
// //     <div className="py-8 px-4 text-center">
// //       <h2 className="text-3xl sm:text-4xl md:text-5xl mt-10 font-pacifico mb-4">
// //         Best Seller
// //       </h2>
// //       <p className="text-gray-500 font-poppins text-sm sm:text-base md:text-lg">
// //         Our best-selling dishes are a perfect blend of fresh ingredients, unique
// //         flavors, and culinary expertise,
// //       </p>
// //       <p className="text-gray-500 mb-10 font-poppins text-sm sm:text-base md:text-lg">
// //         carefully crafted to bring you an unforgettable dining experience that
// //         will leave you coming back for more.
// //       </p>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center items-center">
// //         {products.map((product, index) => (
// //           <div key={index} className="text-center">
// //             <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-4">
// //               <img
// //                 src={product.imageUrl}
// //                 alt={product.title}
// //                 className="w-full h-full rounded-full object-cover shadow-lg"
// //               />
// //             </div>
// //             <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-poppins">
// //               {product.title}
// //             </h3>
// //             <p className="text-gray-500 font-poppins text-sm sm:text-base">
// //               {product.description}
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default BestSeller;
// // import React from "react";

// // const BestSeller = () => {
// //   const products = [
// //     {
// //       title: "Rajma Masala",
// //       description: "Spiced kidney beans with steamed rice.",
// //       imageUrl: `${process.env.PUBLIC_URL}/images/RajmaMasala.jpg`, // Correct URL
// //     },
// //     {
// //       title: "Chicken Biryani",
// //       description: "Fragrant rice with tender chicken and spices",
// //       imageUrl: `${process.env.PUBLIC_URL}/images/Biryanis.jpg`, // Correct URL
// //     },
// //     {
// //       title: "Vegetable Platter",
// //       description: "A vibrant mix of fresh, seasoned vegetables.",
// //       imageUrl: `${process.env.PUBLIC_URL}/images/vegplatter.jpg`, // Correct URL
// //     },
// //   ];

// //   return (
// //     <div className="py-8 px-4  md:w-[625px] text-center">
// //       <h2 className="text-3xl sm:text-4xl md:text-2xl mt-10 font-pacifico mb-4">
// //         Best Seller
// //       </h2>
// //       <p className="text-gray-500 font-poppins justify-center text-center text-sm sm:text-base mb-10 md:text-lg ">
// //         Our best-selling dishes are a perfect blend of fresh ingredients,unique
// //         flavors,and culinary expertise,carefully crafted to bring you an 
// //         unforgettable dining experience thatwill leave you coming back for more.
// //       </p>
      
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-center items-center">
// //         {products.map((product, index) => (
// //           <div key={index} className="text-center">
// //             <div className="w-36 h-36  md:w-40 md:h-40 mx-auto mb-4 md:mb-6">
// //               <img
// //                 src={product.imageUrl}
// //                 alt={product.title}
// //                 className="w-full h-full rounded-full object-cover shadow-lg"
// //               />
// //             </div>
// //             <h3 className="text-lg  md:text-xl font-semibold font-poppins">
// //               {product.title}
// //             </h3>
// //             <p className="text-gray-500 font-poppins text-sm sm:text-base md:text-lg">
// //               {product.description}
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// export default BestSeller;
import React from "react";

const BestSeller = () => {
  const products = [
    {
      title: "Rajma Masala",
      description: "Spiced kidney beans with steamed rice.",
      imageUrl: `${process.env.PUBLIC_URL}/images/RajmaMasala.jpg`, // Correct URL
    },
    {
      title: "Chicken Biryani",
      description: "Fragrant rice with tender chicken and spices",
      imageUrl: `${process.env.PUBLIC_URL}/images/Biryanis.jpg`, // Correct URL
    },
    {
      title: "Vegetable Platter",
      description: "A vibrant mix of fresh, seasoned vegetables.",
      imageUrl: `${process.env.PUBLIC_URL}/images/vegplatter.jpg`, // Correct URL
    },
  ];

  return (
    <div className="py-8 px-4 lg:px-8  text-center">
      <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl mt-10 font-pacifico mb-4">
        Best Seller
      </h2>
      <p className="text-gray-500 font-poppins text-sm sm:text-base md:text-lg  lg:text-xl mb-10">
        Our best-selling dishes are a perfect blend of fresh ingredients, unique
        flavors, and culinary expertise, carefully crafted to bring you an 
        unforgettable dining experience that will leave you coming back for more.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-16 justify-center items-center">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 mx-auto mb-4 md:mb-6">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full rounded-full object-cover shadow-lg"
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-poppins">
              {product.title}
            </h3>
            <p className="text-gray-500 font-poppins text-sm sm:text-base md:text-lg lg:text-lg">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
