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
      <div className="flex sticky bg-cyan-900 items-center justify-center pt-5 z-50 pb-5">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="min-w-max flex items-center justify-center"
          >
            <input
              type="text"
              placeholder="Search for videos..."
              className="min-w-[32rem] min-h-[3rem] border-2 border-gray-300 rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-primary-500"
              {...register("search", { required: true })}
            />
            <button
              type="submit"
              className="bg-slate-600 min-h-[3rem] min-w-[3rem] text-3xl text-white bg-primary-500 hover:bg-primary-600 
            rounded-lg px-4 py-2"
            >
              <CiSearch />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
