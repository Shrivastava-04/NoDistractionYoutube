import React from "react";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const datas = {
      search: data.search,
    };
    console.log(datas);
    if (localStorage.getItem("search")) localStorage.removeItem("search");
    localStorage.setItem("search", datas.search);
    navigate("/search");
    window.location.reload();
  };

  return (
    <>
      <div className="flex sticky items-center justify-center pt-5 z-50 pb-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center justify-center gap-1"
        >
          <input
            type="text"
            placeholder="Search for videos..."
            className="border-2 min-w-72 md:min-w-64 lg:min-w-96 border-gray-300 bg-transparent dark:text-white text-black rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-primary-500"
            {...register("search", { required: true })}
          />
          <button
            type="submit"
            className="text-black  bg-gray-100 hover:bg-slate-300 hover:-translate-y-2 hover:scale-110 transition ease-in-out rounded-xl text-2xl bg-primary-500 hover:bg-primary-600  px-2 py-2"
          >
            <CiSearch />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
