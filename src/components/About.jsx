import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col gap-2 justify-center items-center px-8 py-4">
          <h1 className="text-7xl py-1 font-semibold">About FocusFlow</h1>
          <div className="flex flex-col">
            <h1 className="text-4xl py-2 underline">
              Distraction-Free Video Streaming:{" "}
            </h1>
            <p className="text-2xl px-5">
              FocusFlow is a minimalist YouTube web application designed to
              enhance your video streaming experience by reducing distractions.
              Whether you're focused on work, study, or relaxation, FocusFlow
              provides a clean interface, allowing you to concentrate on the
              content that matters without unnecessary clutter.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl py-2 underline">User-Centric Design: </h1>
            <p className="text-2xl px-5">
              Built with simplicity in mind, FocusFlow offers a sleek,
              professional UI/UX experience. The platform supports both light
              and dark modes, providing a comfortable viewing environment
              tailored to your preferences. It is fully responsive, ensuring a
              seamless experience across all devices.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl py-2 underline">Core Features: </h1>
            <p className="text-2xl px-5">
              At its heart, FocusFlow includes an intuitive search bar for
              finding videos effortlessly, as well as a clean, distraction-free
              video player. The platform’s functionality extends to features
              like responsive navigation and optimized API usage for fetching
              and displaying video content smoothly.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl py-2 underline">Developer:</h1>
            <p className="text-2xl px-5">
              FocusFlow is developed by Harshit Shrivastava, an undergraduate at
              IIT Dhanbad with a passion for building intuitive and efficient
              web applications. I specialize in React.js and Tailwind CSS, and I
              designed FocusFlow to be both user-friendly and highly responsive,
              ensuring a smooth user experience across all devices.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl py-2 underline">Copyright:</h1>
            <p className="text-2xl px-5" s>
              © 2024 Harshit Shrivastava. All Rights Reserved. FocusFlow is an
              original project developed to prioritize distraction-free video
              streaming. Redistribution or modification of this platform is
              prohibited without explicit permission.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
