// import React from "react";
// import subscribebg from "../../public/images/subscribebg.png";

// const SubscriptionSection = () => {
//   return (
//     <div
//       className="w-full h-screen bg-cover bg-center flex items-center justify-center"
//       style={{ backgroundImage: `url(${subscribebg})` }}
//     >
//       <div className="text-center bg-opacity-70  p-8 rounded-lg max-w-lg mx-4">
//         <h2 className="text-5xl font-pacifico text-black">Subscribe</h2>
//         <div className="text-black w-[600px] -ml-10 mt-4 mb-6">
//           <p>
//             Stay informed with the latest updates and exclusive offers from us.
//           </p>
//           <p>
//             Subscribe to receive timely notifications directly in your inbox.
//           </p>
//         </div>
//         <form className="flex flex-col sm:flex-row items-center justify-center">
//           <input
//             type="email"
//             className="p-4 w-full sm:w-2/3 rounded-l-lg border ml-10 border-gray-300 mb-4 sm:mb-0"
//             placeholder="Enter your email"
//           />
//           <button className="bg-yellow-500 text-black px-6 py-4 rounded-r-lg hover:bg-yellow-600">
//             Subscribe
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default SubscriptionSection;
import React from "react";

const SubscriptionSection = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/subscribebg.png)` }}
    >
      <div className="text-center bg-opacity-70  p-8 rounded-lg max-w-lg mx-4">
        <h2 className="text-5xl font-pacifico text-black">Subscribe</h2>
        <div className="text-black w-[600px] -ml-10 mt-4 mb-6">
          <p>
            Stay informed with the latest updates and exclusive offers from us.
          </p>
          <p>
            Subscribe to receive timely notifications directly in your inbox.
          </p>
        </div>
        <form className="flex flex-col sm:flex-row items-center justify-center">
          <input
            type="email"
            className="p-4 w-full sm:w-2/3 rounded-l-lg border ml-10 border-gray-300 mb-4 sm:mb-0"
            placeholder="Enter your email"
          />
          <button className="bg-yellow-500 text-black px-6 py-4 rounded-r-lg hover:bg-yellow-600">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionSection;
