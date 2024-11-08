"use client"; // Ensure this is at the top

import React from "react";
import Image from "next/image"; // Import Image from next/image

const TalkToGTMEngineer = () => {
  return (
    <div className="bg-[#EFF1F3] w-full py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-4">
        {/* Left Section (Text and Button) */}
        <div className="w-full lg:w-1/2 text-left px-4 lg:px-8 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Backed by enterprise-grade security and scale
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Talk to a GTM Engineer
          </p>
          <a
            href="#"
            className="inline-flex items-center bg-black text-white font-medium py-2 px-4 border border-black rounded-lg hover:bg-gray-700 transition-all"
          >
            <span className="">Talk to a GTM Engineer</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src="/bac.png" // Path to the image in the public folder
            alt="GTM Engineer"
            className="w-1/2 h-auto object-cover rounded-lg" // Make the image smaller and maintain its aspect ratio
            width={300}  // Set the width to make the image smaller
            height={200} // Set the height to adjust accordingly
          />
        </div>
      </div>

      {/* New Section with 4 Boxes */}
      <div className="container mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">SOC 2</h3>
          <p className="text-gray-600">
            We are SOC 2 Type II compliant. Request our SOC 2 in our Trust Center.
          </p>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">GDPR</h3>
          <p className="text-gray-600">
            Go to market anywhere in the world — let us handle compliance with local laws.
          </p>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">CCPA</h3>
          <p className="text-gray-600">
            Support your customer base with opt-out and DNC support.
          </p>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">ISO 27001 (coming soon)</h3>
          <p className="text-gray-600">
            Securely connect your CRM and other systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TalkToGTMEngineer;
