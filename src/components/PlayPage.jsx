import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import image from "../assets/thumbnail.jpg";
import VideoDetails from "../apis/VideoDetailsApi";
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
  return (
    <>
      <div className="flex flex-col sticky top-0 z-50">
        <Navbar />
        <SearchBar />
      </div>
      <div className="w-full pt-6 flex flex-col justify-start items-start gap-10">
        <div className="min-w-full min-h-fit flex justify-center rounded-lg items-center">
          <video controls className="rounded-lg h-[36rem]">
            <source src={url} type="video/mp4" />
          </video>
        </div>
        <div className="px-10 flex flex-col items-start justify-start bg-cyan-900 text-white w-full gap-10">
          <div className="flex flex-col">
            <h1 className="text-4xl">{videoDetails.title}</h1>
            <div className="flex">
              <h2>{videoDetails.channelTitle}</h2>
            </div>
            <div className="flex gap-10">
              <h3>{videoDetails.viewCount}</h3>
              <h3>premiere date</h3>
            </div>
          </div>
        </div>
        <div className="bg-cyan-900 text-white px-10">
          <h1 className="text-3xl mb-8 mt-5">Description</h1>
          <p>{videoDetails.description}</p>
        </div>
      </div>
    </>
  );
};

export default PlayPage;
