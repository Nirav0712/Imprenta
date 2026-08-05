// import React from "react";

// const categories = [
//   "View All",
//   "Visiting Cards",
//   "Stationery, Letterheads & Notebooks",
//   "Stamps and Ink",
//   "Signs, Posters & Marketing Materials",
//   "Labels, Stickers & Packaging",
//   "Clothing, Caps & Bags",
//   "Mugs, Albums & Gifts",
//   "Pens",
//   "Drinkware",
//   "Custom Polo T-shirts",
//   "Umbrellas & Rainwear",
//    "Custom Polo T-shirts",
//   "Umbrellas & Rainwear",
// ];

// const CategoryMenu = () => {
//   return (
//     <div className="hidden lg:block w-full bg-white border-b border-gray-200">
//       <div className="w-full h-20 px-7 lg:px-8 xl:px-10 flex items-center">

//       <ul
//   className="flex items-center justify-center whitespace-nowrap overflow-x-auto scrollbar-hide"
//   onWheel={(e) => {
//     e.currentTarget.scrollLeft += e.deltaY;
//   }}
// >

//           {categories.map((item, index) => (
//             <li key={index} className="flex-shrink-0">

//               <button
//                 className="relative px-4 py-3 text-[15px] text-gray-800 hover:text-sky-600 transition duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full"
//               >
//                 {item}
//               </button>

//             </li>
//           ))}

//         </ul>

//       </div>
//     </div>
//   );
// };

// export default CategoryMenu;