import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <SearchBar />
      <div className="flex flex-col justify-center items-center mt-20 text-white text-lg">
        <h1>Welcome to the Homepage</h1>
        <p>This is the homepage of the No Distraction YouTube app.</p>
        <p>Please search what you want to see</p>
      </div>
    </div>
  );
};

export default HomePage;
