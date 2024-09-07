import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import image from "../assets/thumbnail.jpg";
import VideoDetails from "../apis/VideoDetailsApi";
import Footer from "./Footer";
const PlayPage = () => {
  const url = localStorage.getItem("videoUrl");
  const query = localStorage.getItem("videoId");
  const [videoDetails, setVideoDetails] = useState([]);
  useEffect(() => {
    (async () => {
      const datas = await VideoDetails(query);
      setVideoDetails(datas);
    })();
  }, []);
  // console.log(videoDetails);
  // const dates = videoDetails.uploadDate;
  // // date = date.substring(0, 10);\
  // console.log(typeof dates);
  // const date = dates.substring(0, 10);
  const views = videoDetails.viewCount;
  var viewCount = "";
  if (views >= 0 && views < 1000) {
    viewCount = viewCount + String(views);
  } else if (views >= 1000 && views < 1000000) {
    const a = Math.floor(views / 1000);
    viewCount = viewCount + String(a) + "K";
  } else if (views >= 1000000 && views < 1000000000) {
    const b = Math.floor(views / 1000000);
    viewCount = viewCount + String(b) + "M";
  } else {
    const c = views / 1000000000;
    const s = String(c).substring(0, 3);
    viewCount = viewCount + s + "B";
  }
  return (
    <>
      <div className="flex flex-col sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="w-full pt-6 flex flex-col justify-start items-start">
        <div className="min-w-full min-h-fit flex justify-center rounded-lg items-center">
          <video controls className="rounded-lg h-[36rem]">
            <source src={url} type="video/mp4" />
          </video>
        </div>
        <div className="px-10 flex flex-col items-start justify-start w-full gap-10 pt-10">
          <div className="flex flex-col">
            <h1 className="text-4xl">{videoDetails.title}</h1>
            <h2 className="font-semibold">{videoDetails.channelTitle}</h2>
            <div className="flex gap-10">
              <h3>{viewCount}</h3>
              {/* <h3>{videoDetails.uploadDate}</h3> */}
            </div>
          </div>
        </div>
        <div className="px-10 pb-10">
          <h1 className="text-3xl mb-8 mt-5">Description</h1>
          <p>{videoDetails.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlayPage;
