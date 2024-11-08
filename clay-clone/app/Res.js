"use client"; // Ensure this is at the top

import React, { useState } from "react";

const ResourceCard = ({ image, title, description, buttonText }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-md w-80 flex-shrink-0 transform transition-all hover:scale-105 hover:shadow-xl">
      <img src={image} alt={title} className="rounded-lg w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href="#" className="text-blue-600 font-medium hover:underline">
        {buttonText} →
      </a>
    </div>
  );
};

const Resources = () => {
  const resources = [
    {
      image: "/r1.png",
      title: "Clay University",
      description: "Master Clay in a few core lessons. Uplevel your data enrichment, craft better outbound messages, and book more meetings.",
      buttonText: "Learn with Clay",
    },
    {
      image: "/r2.png",
      title: "Go to market blog",
      description: "Our best content on growing your GTM motion, from outbound sales automation to AI lead generation.",
      buttonText: "Explore our blog",
    },
    {
      image: "/r3.png",
      title: "Integrations",
      description: "Browse through all the integrations you can connect to Clay in seconds and discover what you can do!",
      buttonText: "Button text",
    },
    {
      image: "/r4.png",
      title: "Templates",
      description: "Power your outreach with Clay’s best templates.",
      buttonText: "Visit clay templates",
    },
    {
      image: "/r5.png",
      title: "Case Studies",
      description: "Learn how companies are using Clay for success in various fields.",
      buttonText: "Read case studies",
    },
    {
      image: "/r1.png",
      title: "API Documentation",
      description: "Get started with the Clay API and integrate your data seamlessly.",
      buttonText: "Explore API docs",
    },
    {
      image: "/r2.png",
      title: "Customer Support",
      description: "Need help? Contact our support team for assistance with any issues.",
      buttonText: "Get support",
    },
    {
      image: "/r3.png",
      title: "Webinars",
      description: "Join our live webinars to learn the latest about Clay and its applications.",
      buttonText: "Register for webinars",
    },
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
        <span className="text-[30px] font-bold">Learn with our resources</span>
        <br />
        <span className="font-bold">Clay University, read our GTM blog, or try out our top templates to transform your growth ideas into outreach in minutes.</span>
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

      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mt-16">
        {visibleResources.map((resource, index) => (
          <ResourceCard
            key={index}
            image={resource.image}
            title={resource.title}
            description={resource.description}
            buttonText={resource.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default Resources;
