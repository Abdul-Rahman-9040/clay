// app/Hero.js
"use client";

const Hero = () => {
  return (
    <section
      className="flex flex-col items-center text-center px-6 py-12 w-full h-[600px]"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        Scale personalized outreach with <br /> better data enrichment
      </h1>
      <p className="text-lg text-gray-600 mb-8 p-4 text-center mx-auto max-w-[800px] font-bold">
        Help your RevOps & growth teams implement any outreach idea. First, maximize data coverage with 75+ enrichment tools & our AI agent with just your Clay account. Then, use AI to craft relevant outreach at scale.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-6 p-4">
        <div className="flex flex-col items-center p-4 text-gray-600 hover:text-blue-500 transition-colors duration-300">
          <i className="fas fa-star text-2xl mb-2"></i>
          <span className="text-3xl font-bold">150+</span>
          <span>testimonials</span>
        </div>
        <div className="flex flex-col items-center p-4 text-gray-600 hover:text-blue-500 transition-colors duration-300">
          <i className="fas fa-users text-2xl mb-2"></i>
          <span className="text-3xl font-bold">15k+</span>
          <span>growth community</span>
        </div>
        <div className="flex flex-col items-center p-4 text-gray-600 hover:text-blue-500 transition-colors duration-300">
          <i className="fas fa-cogs text-2xl mb-2"></i>
          <span className="text-3xl font-bold">75+</span>
          <span>enrichment tools</span>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4 mt-8">
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
          Start building for free
        </button>
      </div>
    </section>
  );
};

export default Hero;
