import React from "react";
import Filter from "./Filter";

const FilterButton = () => {
  return (
    <div className="px-8  md:px-32 py-3 font-semibold text-xl ">
      <button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="hover:bg-slate-300 hover:scale-110 hover:text-black hover:-translate-y-2 px-3 rounded-full transition ease-in-out py-2"
      >
        Filters
      </button>
      <Filter />
    </div>
  );
};

export default FilterButton;
