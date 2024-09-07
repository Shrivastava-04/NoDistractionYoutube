import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import SmallDivs from "./SmallDivs";
import Search from "../apis/SearchApi.js";
import Footer from "./Footer.jsx";
import FilterButton from "./FilterButton.jsx";

const SearchPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [myData, setMyData] = useState([]);
  const query = [
    localStorage.getItem("search"),
    localStorage.getItem("duration"),
    localStorage.getItem("sortby"),
    localStorage.getItem("upload_date"),
  ];
  // const myData = Search(query);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const datas = await Search(query);
        setMyData(datas);
        setLoading(false);
        setError(false);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    })();
  }, []);
  // if (loading) return <h1>Loading...</h1>;
  // if (error) return <h1>Error: {error.message}</h1>;
  // console.log(myData);
  const finalData = myData.filter((item) => {
    return item.type === "video";
  });

  if (loading) {
    return (
      <>
        <div className="flex flex-col items-stretch justify-center">
          <div className="flex flex-col sticky top-0 z-50">
            <Navbar />
          </div>
          <div className="flex justify-end">
            <FilterButton />
          </div>
          <div className="block md:hidden z-0 px-5 ">
            <SearchBar />
          </div>
          <div className="flex  justify-center items-start text-7xl mb-10 min-h-screen">
            Loading...
          </div>
          <div className="">
            <Footer />
          </div>
        </div>
      </>
    );
  }
  if (error) {
    return (
      <>
        <div className="flex flex-col items-stretch justify-center">
          <div className="flex flex-col sticky top-0 z-50">
            <Navbar />
          </div>
          <div className="flex justify-end">
            <FilterButton />
          </div>
          <div className="block md:hidden z-0 px-5 ">
            <SearchBar />
          </div>
          <div className="flex flex-wrap justify-center mb-10 min-h-screen">
            error
          </div>
          <div className="">
            <Footer />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col items-stretch justify-center">
        <div className="flex flex-col sticky top-0 z-50">
          <Navbar />
        </div>
        <div className="flex justify-end">
          <FilterButton />
        </div>
        <div className="block md:hidden z-0 px-5 ">
          <SearchBar />
        </div>
        <div className="flex flex-wrap justify-center mb-10 min-w-full min-h-screen">
          {finalData.map((item) => {
            return <SmallDivs key={item.videoId} item={item} />;
          })}
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
