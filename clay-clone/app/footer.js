"use client"; // Ensure this is at the top

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-cover bg-center py-16 mt-16 w-full px-12" style={{ backgroundImage: "url('/footerbg.png')" }}>
      <div className="w-full mx-auto px-6" style={{ paddingTop: '300px' }}>

        {/* First row (Product, Tools, Support, Company, Legal) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12 px-6">
          {/* Product Section */}
          <div className="px-3">
            <h2 className="text-white font-bold text-xl mb-4">Product</h2>
            <ul className="text-gray-300">
              <li><a href="#" className="hover:text-white hover:underline">Login</a></li>
              <li><a href="#" className="hover:text-white hover:underline">University</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Integrations</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Changelog</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Blog</a></li>
              <li><a href="#" className="hover:text-white hover:underline">AI for Sales Prospecting</a></li>
            </ul>
          </div>
          {/* Tools Section */}
          <div className="px-3">
            <h2 className="text-white font-bold text-xl mb-4">Tools</h2>
            <ul className="text-gray-300">
              <li><a href="#" className="hover:text-white hover:underline">Email Finder</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Headcount Finder</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Credits Calculator</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Chrome Extension</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Lookup WHOIS Info</a></li>
              <li><a href="#" className="hover:text-white hover:underline">CPM Calculator</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Margin Calculator</a></li>
            </ul>
          </div>
          {/* Support Section */}
          <div className="px-3">
            <h2 className="text-white font-bold text-xl mb-4">Support</h2>
            <ul className="text-gray-300">
              <li><a href="#" className="hover:text-white hover:underline">Send us an email</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Join Slack</a></li>
              <li><a href="#" className="hover:text-white hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Status</a></li>
            </ul>
          </div>
          {/* Company Section */}
          <div className="px-3">
            <h2 className="text-white font-bold text-xl mb-4">Company</h2>
            <ul className="text-gray-300">
              <li><a href="#" className="hover:text-white hover:underline">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Wall of Love</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Careers</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Creators Program</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Integrate with Clay</a></li>
            </ul>
          </div>
          {/* Legal Section */}
          <div className="px-3">
            <h2 className="text-white font-bold text-xl mb-4">Legal</h2>
            <ul className="text-gray-300">
              <li><a href="#" className="hover:text-white hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Do not sell my data</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Cookie preferences</a></li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-left text-gray-300">
          <p>© Clay 2024 / Uplevel your data enrichment. Scale personalized outreach.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
