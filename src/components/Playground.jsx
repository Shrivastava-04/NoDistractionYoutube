import React from "react";
import { CiDark, CiLight, CiSearch } from "react-icons/ci";
import SearchBar from "./SearchBar";

const HomePage11 = () => {
  return (
    <>
      <div className="flex py-8 px-8 justify-around text-xl items-center">
        <div>
          <img src="../../public/title.png" className="h-10" alt="" />
        </div>
        <div className="flex justify-around gap-10 font-semibold">
          <a
            href="/"
            className="hover:bg-slate-300 hover:scale-110 hover:-translate-y-2 px-3 rounded-full transition ease-in-out py-2"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:bg-slate-300 hover:-translate-y-2 hover:scale-110 px-3 rounded-full transition ease-in-out py-2"
          >
            About
          </a>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="text-3xl font-extrabold">
          <button className="hover:bg-slate-300 hover:-translate-y-2 hover:scale-110 px-3 rounded-full transition ease-in-out py-2">
            <CiLight />
            {/* <CiDark /> */}
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage11;
