import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Stream from "../apis/StreamApi";
const SmallDivs = ({ item }) => {
  const navigate = useNavigate();
  const thumbnail = item.thumbnail[0].url;
  const thumbmailHeight = item.thumbnail[0].height;
  const thumbmailWidth = item.thumbnail[0].width;
  const channelImage = item.channelThumbnail[0].url;
  const channelImageHeight = item.channelThumbnail[0].height;
  const channelImageWidth = item.channelThumbnail[0].width;
  const time = item.lengthText;
  var title = item.title;
  const channelTitle = item.channelTitle;
  const views = item.viewCount;
  var viewCount = "";
  const publishedTimeText = item.publishedTimeText;
  if (title.length > 50) {
    title = title.substring(0, 60) + "...";
  }
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
  // console.log(time);
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <button
            type="submit"
            className="rounded-xl flex flex-col max-w-sm p-3 hover:scale-105 translate-y-2 transition-transform  ease-in-out"
          >
            <div
              className="bg-contain bg-center rounded-lg flex justify-end items-end px-2 py-1"
              style={{
                backgroundImage: `url("${thumbnail}")`,
                height: thumbmailHeight,
                maxHeight: 202,
                maxWidth: 360,
                width: thumbmailWidth,
              }}
            >
              <p className="bg-black/80 flex text-white px-1 rounded-lg text-sm">
                {time}
              </p>
            </div>
            <div className="font-semibold flex flex-row mt-4 gap-4">
              <div>
                <img
                  src={channelImage}
                  alt="channel"
                  height={channelImageHeight}
                  width={channelImageWidth}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col gap-2 items-start text-start">
                <h3 className="text-lg font-medium ">{title}</h3>
                <div>
                  <h6 className="text-gray-500 text-sm">{channelTitle}</h6>
                  <div className="flex gap-10">
                    <p className="text-gray-500 text-sm">{viewCount}</p>
                    <p className="text-gray-500 text-sm">{publishedTimeText}</p>
                  </div>
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
