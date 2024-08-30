import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-evenly bg-black/80 text-white backdrop-blur-lg p-2">
        <div className="uppercase text-4xl">
          <a href="/">youtube</a>
        </div>
        <div className="uppercase text-2xl">
          <h1>watch what you search</h1>
        </div>
        <div>
          <a href="#">profile</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
