import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Stream from "../apis/StreamApi";
const SmallDivs = ({ item }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async () => {
    if (localStorage.getItem("videoId")) localStorage.removeItem("videoId");
    localStorage.setItem("videoId", item.videoId);
    const myData = await Stream(item.videoId);
    if (myData) {
      if (localStorage.getItem("videoUrl")) localStorage.removeItem("videoUrl");
      localStorage.setItem("videoUrl", myData);
      navigate("/play");
    } else {
      console.log("error fetching video");
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <button
            type="submit"
            className="bg-black/20 rounded-xl flex flex-col max-w-sm p-3 hover:scale-105 translate-y-2 transition-transform  ease-in-out"
          >
            <div>
              <img
                src={item.thumbnail[0].url}
                alt="thumbmail"
                height={item.thumbnail[0].height}
                width={item.thumbnail[0].width}
              />
            </div>
            <div className="text-white flex flex-row mt-4 gap-4">
              <div>
                <img
                  src={item.channelThumbnail[0].url}
                  alt="channel"
                  height={item.channelThumbnail[0].height}
                  width={item.channelThumbnail[0].width}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <h3 className="text-lg font-medium ">{item.title}</h3>
                <h6 className="text-gray-500 text-sm">{item.channelTitle}</h6>
                <div className="flex gap-10">
                  <p className="text-gray-500 text-sm">{item.viewCount}</p>
                  <p className="text-gray-500 text-sm">
                    {item.publishedTimeText}
                  </p>
                </div>
              </div>
            </div>
          </button>
        </form>
      </div>
    </>
  );
};

export default SmallDivs;
