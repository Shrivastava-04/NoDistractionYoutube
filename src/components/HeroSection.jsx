import React from "react";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <>
      <div className="flex md:flex-row container mx-auto flex-col justify-between mt-16 md:mt-20 mb-[6rem] items-center px-8 z-2 md:max-w-screen-2xl max-w-fit">
        <div className="block md:hidden mb-16 z-0">
          <SearchBar />
        </div>
        <div className=" flex flex-col items-start px-5 order-2 w-full md:order-1">
          <h1 className=" flex text-2xl md:text-7xl font-semibold">
            No-Distraction Youtube
          </h1>
          <p className="pt-10 text-md md:text-lg font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            pariatur maiores tempora laudantium repellat iure voluptatibus
            possimus ut similique in quae voluptatem ex, officia, odio alias,
            porro blanditiis necessitatibus accusantium! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Temporibus esse non iure minima
            suscipit eaque, iste explicabo tempora recusandae necessitatibus
            assumenda ullam, eveniet provident amet dolorum laboriosam officiis
            praesentium et.
          </p>
          <h3 className="pt-5 text-3xl font-semibold">
            Search what you want to see
          </h3>
          <div className="hidden md:block">
            <SearchBar />
          </div>
        </div>
        <div className="flex pb-32 md:w-full items-center justify-center order-1 md:order-2">
          <img
            src="../../public/title.png"
            className="dark:hidden block"
            alt=""
          />
          <img
            src="../../public/title-4.png"
            className="dark:block hidden"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
