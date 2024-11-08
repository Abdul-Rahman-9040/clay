"use client"; // Ensure this is at the top

import React from "react";

const TrustedBySection = () => {
  // Array of logo paths (replace these with actual logo image URLs)
  const logos = [
    "./l1.svg",
    "./l2.svg",
    "./l3.svg",
    "./l4.svg",
    "./l5.svg",
    "./l6.svg",
    "./l7.svg",
    "./l8.svg",
    "./l9.svg",
    "./l17.svg",
    "./l19.svg",
    "./l12.svg",
    "./l20.svg",
    "./l14.svg",
    "./l15.svg",
    "./l16.svg"
  ];

  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-semibold mb-8">
        Trusted by more than 100,000 leading GTM teams of all sizes
      </h2>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 hover:opacity-75 transition-opacity duration-200"
          >
            <img src={logo} alt={`Logo ${index + 1}`} className="h-12 md:h-16 lg:h-20 object-contain" />
          </div>
        ))}
      </div>

      {/* How it Works Section */}
      <div className="mt-12 px-6 lg:px-20">
        <h2 className="text-2xl font-semibold mb-8">How it works</h2>
        <div className="flex flex-wrap justify-center gap-6">
  {[
    "Import/create a lead list",
    "Enrich your data with 75+ tools",
    "Use our AI research agent",
    "Scale your outreach"
  ].map((step, index) => (
    <div
      key={index}
      className="bg-white shadow-md p-6 text-gray-800 text-[12px] font-bold flex-none"
      style={{ width: '300px' }}
    >
      {step}
    </div>
  ))}
</div>


      </div>

      <style jsx>{`
        /* Media query to hide How it Works section on smaller screens */
        @media (max-width: 768px) {
          .space-y-6, h2 {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default TrustedBySection;
