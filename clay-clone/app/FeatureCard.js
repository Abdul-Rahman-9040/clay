// app/FeatureCard.js
"use client";

const FeatureCard = ({ icon, text }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full sm:w-1/4 text-center hover:shadow-lg transition-shadow duration-300">
      <i className={`fas ${icon} text-2xl mb-2`}></i>
      <p className="font-semibold">{text}</p>
    </div>
  );
};

export default FeatureCard;
