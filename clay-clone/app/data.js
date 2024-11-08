"use client"; // Add this if you are using Next.js's App Router

import React from "react";

const DataGrid = () => {
  return (
    <div className="bg-white py-16 px-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Clay connects you with 75+ data providers
      </h1>

      {/* Grid of Icons - 5 rows, 9 columns without gaps and with black border */}
      <div className="grid grid-rows-5 grid-cols-9">
        {[...Array(45)].map((_, index) => (
          <div
            key={index}
            className="w-20 h-20 border border-black flex items-center justify-center hover:scale-105 transition-transform"
          >
            {/* Placeholder icon - replace with actual icon images */}
            <img
              src={`/icons/icon${index + 1}.png`} // Replace with your actual icon paths
              alt={`Provider ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Browse All Integrations Button */}
      <div className="mt-8 flex justify-center">
        <button className="relative group bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
          Browse all integrations
          {/* Hover Effect for Images */}
          <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            <div className="grid grid-cols-3 gap-2">
              {/* Replace these images with actual ones to show on hover */}
              <img src="/c1.png" alt="Hover 1" className="w-12 h-12 object-contain" />
              <img src="/hover-image2.png" alt="Hover 2" className="w-12 h-12 object-contain" />
              <img src="/hover-image3.png" alt="Hover 3" className="w-12 h-12 object-contain" />
              <img src="/hover-image4.png" alt="Hover 4" className="w-12 h-12 object-contain" />
              <img src="/hover-image5.png" alt="Hover 5" className="w-12 h-12 object-contain" />
              <img src="/hover-image6.png" alt="Hover 6" className="w-12 h-12 object-contain" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DataGrid;
