// app/page.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure to import Font Awesome
import Header from './Header'; // Import the Header component
import Hero from './Hero'; // Import the Hero component
import FAQ from './FAQ'; // Import the FAQ component
import FeatureCard from './FeatureCard'; // Import FeatureCard component
import Footer from './Footer'; // Import the Footer component
import Res from './Res'; // Import Resources component
import Bas from './bac'; // Correct the import name for bac.js
import Trust from './trust';
import Cus from './cus';



export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Header /> {/* Include Header */}
      <Hero /> {/* Include Hero Section */}
      
      {/* Features Section */}
      <section className="flex flex-wrap justify-center gap-6 mt-0 md:mt-12 px-6">
        <FeatureCard icon="fa-star" text="Import / build a lead list" />
        <FeatureCard icon="fa-database" text="Enrich your leads with 75+ data providers" />
        <FeatureCard icon="fa-robot" text="Use our AI research agent" />
        <FeatureCard icon="fa-paper-plane" text="Scale personalized outreach" />
      </section>
      {/* {trust} */}
      <Trust></Trust>
      {/* {cust} */}
      <Cus></Cus>

      {/* Talk to GTM Engineer Section (Bas component) */}
      <Bas /> {/* Corrected from <bac></bac> to <Bas /> */}
      
      {/* Resources Section */}
      <Res /> {/* Include Resources Section */}

      {/* FAQ Section */}
      <FAQ /> {/* Include the FAQ component here */}

      {/* Footer Section */}
      <Footer /> {/* Include Footer component */}
    </main>
  );
}
