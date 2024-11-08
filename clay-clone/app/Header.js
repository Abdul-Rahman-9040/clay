// app/Header.js
"use client";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full max-w-7xl px-6 py-4">
      <div className="flex items-center space-x-4">
        <img src="./logo.png" alt="Clay Logo" className="h-10" />
      </div>
      <nav className="hidden md:flex space-x-6 flex-1 justify-center">
        <a href="#" className="text-gray-700 hover:text-black">Product</a>
        <a href="#" className="text-gray-700 hover:text-black">Solutions</a>
        <a href="#" className="text-gray-700 hover:text-black">Resources</a>
        <a href="#" className="text-gray-700 hover:text-black">Company</a>
        <a href="#" className="text-gray-700 hover:text-black">Enterprise</a>
        <a href="#" className="text-gray-700 hover:text-black">Pricing</a>
      </nav>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-700 hover:text-black">Login</a>
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;
