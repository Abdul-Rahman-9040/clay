"use client"; // Ensure this is at the top

import React, { useState } from "react";

const ResourceCard = ({ borderColor, quote, image, name, title, logo }) => {
  return (
    <div
      className="border-2 rounded-lg p-6 bg-white shadow-md w-80 flex-shrink-0 transform transition-all hover:scale-105 hover:shadow-xl"
      style={{ borderColor: borderColor }}
    >
      {/* Quote */}
      <p className="text-gray-700 mb-4 italic">“{quote}”</p>

      {/* Image on Left and Logo on Right */}
      <div className="flex items-center justify-between mb-4">
        <img src={image} alt={name} className="w-32 h-32 object-cover" /> {/* Reduced size */}
        <img src={logo} alt={name} className="w-12 h-12 ml-4" /> {/* No rounded image */}
      </div>

      {/* Name and Title */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  );
};

const Resources = () => {
  const resources = [
    {
      borderColor: "#f9a825", // Yellow
      quote: "Clay should be an essential pillar of every company's GTM stack, enabling outbound built on the highest quality data foundation possible.",
      image: "/c3.png",
      name: "Stevie Case",
      title: "CRO, Vanta",
      logo: "/c4.png",
    },
    {
      borderColor: "#4caf50", // Green
      quote: "The templates provided by Clay have transformed our outreach process, making it much more efficient.",
      image: "/c1.png",
      name: "Alex Doe",
      title: "VP of Sales, Company X",
      logo: "/c2.png",
    },
    {
      borderColor: "#ff9800", // Orange
      quote: "Integrating our systems with Clay was seamless, and now our data flows effortlessly across the organization.",
      image: "/c5.png",
      name: "Maya Lee",
      title: "Director of IT, Innovate Tech",
      logo: "/c6.png",
    },
    {
      borderColor: "#f44336", // Red
      quote: "Clay’s API allowed us to take our data strategy to the next level with custom integrations that fit our needs.",
      image: "/c7.png",
      name: "John Smith",
      title: "CTO, Startup Hub",
      logo: "/c8.png",
    },
    {
        borderColor: "#ff9800", // Orange
        quote: "Integrating our systems with Clay was seamless, and now our data flows effortlessly across the organization.",
        image: "/c5.png",
        name: "Maya Lee",
        title: "Director of IT, Innovate Tech",
        logo: "/c6.png",
      },
      {
        borderColor: "#f44336", // Red
        quote: "Clay’s API allowed us to take our data strategy to the next level with custom integrations that fit our needs.",
        image: "/c7.png",
        name: "John Smith",
        title: "CTO, Startup Hub",
        logo: "/c8.png",
      },
      {
          borderColor: "#ff9800", // Orange
          quote: "Integrating our systems with Clay was seamless, and now our data flows effortlessly across the organization.",
          image: "/c5.png",
          name: "Maya Lee",
          title: "Director of IT, Innovate Tech",
          logo: "/c6.png",
        },
    // Additional resource items
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPageDesktop = 4; // Items per page for desktop
  const itemsPerPageMobile = 1; // Items per page for mobile

  const scrollRight = () => {
    if (currentIndex + 1 < resources.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const scrollLeft = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Calculate visible resources based on screen size
  const visibleResources = window.innerWidth < 640
    ? resources.slice(currentIndex, currentIndex + itemsPerPageMobile)
    : resources.slice(currentIndex, currentIndex + itemsPerPageDesktop);

  return (
    <div className="relative">
      {/* Top Left Text */}
      <div className="absolute top-0 left-0 p-4 text-gray-700">
        <span className="text-[30px] font-bold">What our customers say <br /> about us...</span>
        
        
      </div>

      {/* Arrow Buttons (For Both Desktop and Mobile) */}
      <div className="absolute top-0 right-0 p-4 flex space-x-2 sm:space-x-4 sm:flex-row sm:right-0">
        <button
          onClick={scrollLeft}
          disabled={currentIndex === 0}
          className="border-2 border-black rounded-lg p-2 text-black font-medium transition-all hover:bg-gray-300"
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          disabled={currentIndex + (window.innerWidth < 640 ? itemsPerPageMobile : itemsPerPageDesktop) >= resources.length}
          className="border-2 border-black rounded-lg p-2 text-black font-medium transition-all hover:bg-gray-300"
        >
          →
        </button>
      </div>

      <br /> <br />

      {/* Resource Cards with Testimonial-like Styling */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mt-16">
        {visibleResources.map((resource, index) => (
          <ResourceCard
            key={index}
            borderColor={resource.borderColor}
            quote={resource.quote}
            image={resource.image}
            name={resource.name}
            title={resource.title}
            logo={resource.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default Resources;
