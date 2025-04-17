import React, { useState, useContext } from 'react';
import { categoryItem } from '../assets/assets';
import { ManuContext } from '../Context/ManuContext';

function Manu() {
  const { products } = useContext(ManuContext); // ✅ useContext, not useState
  const [category, setCategory] = useState("All");

  return (
    <div className='px-4 py-12 max-w-6xl wx-auto'>
      {/* Section header */}
      <div className='text-center mb-6'>
        <h1 className='text-4xl font-bold text-gray-800'>Discover Our Menu</h1>
        <p>We are proud to offer you the best food in town</p>
      </div>

      {/* Category button select */}
      <div className='text-center mb-8'>
        <h2 className='text-2xl font-medium mb-4 text-gray-700'>Explore Our Categories</h2>
        <ul className='flex flex-wrap justify-center gap-4'>
          {categoryItem.map((item, index) => (
             <li
             key={index}
             onClick={() =>
               setCategory((prev) =>
                 prev === item.category_title ? "All" : item.category_title
               )
             }
             className={`cursor-pointer px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
               category === item.category_title
                 ? 'bg-amber-500 text-white'
                 : 'bg-gray-200 hover:bg-amber-100'
             }`}
           >
             {item.category_title}
           </li>
          ))}
        </ul>
      </div>

 {/* Menu Display */}
 <div className="py-10">
        <h2 className="text-2xl font-bold mb-6">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products
            .filter(
              (item) => category === "All" || item.category === category
            )
            .map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border border-gray-100 rounded-xl shadow-sm transition hover:shadow-md p-4"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[120px] h-[120px] object-cover rounded-full"
                />

                {/* Product Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <span className="text-amber-500 font-medium">${item.price}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Manu;
