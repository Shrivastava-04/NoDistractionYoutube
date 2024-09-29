import React from "react";
import SearchBar from "./SearchBar";
import imagedark from "../images/title-4.png";
import imagelight from "../images/title.png";

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
            Welcome to FocusFlow: Your Gateway to Distraction-Free Video
            Streaming.
            <br />
            Tired of the clutter and noise? FocusFlow delivers a clean, simple,
            and distraction-free experience. With our minimalistic design, you
            can dive straight into your favorite videos without unnecessary
            distractions. Whether you're learning, working, or just relaxing,
            FocusFlow is built to enhance your focus. No ads, no autoplay, just
            the content you care about. Start streaming with clarity and peace
            of mind. Join the movement toward a smarter, more focused way of
            watching videos.
          </p>
          <h3 className="pt-5 text-3xl font-semibold">
            Search what you want to see
          </h3>
          <div className="hidden md:block">
            <SearchBar />
          </div>
        </div>
        <div className="flex pb-32 md:w-full items-center justify-center order-1 md:order-2">
          <img src={imagelight} className="dark:hidden block" alt="" />
          <img src={imagedark} className="dark:block hidden" alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
