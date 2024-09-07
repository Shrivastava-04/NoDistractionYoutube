import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen md:min-h-fit">
        <Navbar />
        <HeroSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
