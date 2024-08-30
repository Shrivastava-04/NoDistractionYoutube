import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import SmallDivs from "./SmallDivs";
import Search from "../apis/SearchApi.js";

const SearchPage = () => {
  const query = localStorage.getItem("search");
  const myData = Search(query);
  // console.log(myData);

  const finalData = myData.filter((item) => {
    return item.type === "video";
  });
  // console.log(finalData);
  return (
    <>
      <div>
        <Navbar />
        <SearchBar />
        <div className="grid grid-cols-3 items-center justify-center ml-20 mt-10 gap-4">
          {finalData.map((item) => {
            return <SmallDivs key={item.videoId} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
