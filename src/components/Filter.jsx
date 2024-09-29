import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
// import toast from "react-hot-toast";
function Filter() {
  const [uploadDate, setUploadDate] = useState("");
  const [duration, setDuration] = useState("");
  const [sortby, setSortBy] = useState("");
  useEffect(() => {
    if (localStorage.getItem("sortby")) {
      localStorage.removeItem("sortby");
    } else localStorage.setItem("sortby", sortby);
  }, [sortby]);
  useEffect(() => {
    if (localStorage.getItem("duration")) localStorage.removeItem("duration");
    localStorage.setItem("duration", duration);
  }, [duration]);
  useEffect(() => {
    if (localStorage.getItem("upload_date"))
      localStorage.removeItem("upload_date");
    localStorage.setItem("upload_date", uploadDate);
  }, [uploadDate]);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white text-black dark:bg-cyan-900 dark:text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <a
              href="/search"
              className="btn btn-sm btn-circle btn-ghost absolute right-3 top-4 hover:bg-slate-300 hover:scale-110 hover:text-black hover:-translate-y-2  rounded-full transition ease-in-out"
            >
              ✕
            </a>
            <h3 className="font-bold text-2xl mb-10 ">Search Filters</h3>
            <div className="flex justify-around items-start ">
              <div>
                Upload Date
                <div className="flex flex-col pt-10 gap-3">
                  <button
                    className="hover:bg-slate-300 hover:scale-110 hover:text-black hover:-translate-y-2  rounded-full transition ease-in-out"
                    onClick={() => {
                      setUploadDate("hour");
                      window.location.reload();
                    }}
                  >
                    Last Hour
                  </button>
                  <button
                    className="hover:bg-slate-300 hover:scale-110 hover:text-black hover:-translate-y-2  rounded-full transition ease-in-out"
                    onClick={() => {
                      setUploadDate("today");
                      window.location.reload();
                    }}
                  >
                    Today
                  </button>
                  <button
                    className="hover:bg-slate-300 hover:scale-110 hover:text-black hover:-translate-y-2  rounded-full transition ease-in-out"
                    onClick={() => {
                      setUploadDate("week");
                      window.location.reload();
                    }}
                  >
                    Week
                  </button>
                  <button
                    className="hover:bg-slate-300 hover:scale-110 hover:text-black hover:-translate-y-2  rounded-full transition ease-in-out"
                    onClick={() => {
                      setUploadDate("month"), window.location.reload();
                    }}
                  >
                    Month
                  </button>
                  <button
                    className="hover:bg-slate-300 hover:scale-110 hover:text-black hover:-translate-y-2  rounded-full transition ease-in-out"
                    onClick={() => {
                      setUploadDate("year"), window.location.reload();
                    }}
                  >
                    Year
                  </button>
                </div>
              </div>
              <div className="text-center">
                Duration
                <div className="flex flex-col pt-10 gap-3">
                  <button
                    className="hover:bg-slate-300 hover:scale-110 hover:text-black hover:-translate-y-2  rounded-full transition ease-in-out px-2"
                    onClick={() => {
                      setDuration("short"), window.location.reload();
                    }}
                  >
                    Under 4 minutes
                  </button>
                  <button
                    className="hover:bg-slate-300 hover:scale-110 hover:text-black hover:-translate-y-2  rounded-full transition ease-in-out"
                    onClick={() => {
                      setDuration("medium"), window.location.reload();
                    }}
                  >
                    4-20 minutes
                  </button>
                  <button
                    className="hover:bg-slate-300 hover:scale-110 hover:text-black hover:-translate-y-2  rounded-full transition ease-in-out"
                    onClick={() => {
                      setDuration("long"), window.location.reload();
                    }}
                  >
                    Over 20 minutes
                  </button>
                </div>
              </div>
              <div className="text-center">
                Sort By
                <div className="flex flex-col pt-10 gap-3">
                  <button
                    className="hover:bg-slate-300 hover:scale-110 hover:text-black hover:-translate-y-2  rounded-full transition ease-in-out"
                    onClick={() => {
                      setSortBy("relevance"), window.location.reload();
                    }}
                  >
                    Relevance
                  </button>
                  <button
                    className="hover:bg-slate-300 hover:scale-110 hover:text-black hover:-translate-y-2  rounded-full transition ease-in-out"
                    onClick={() => {
                      setSortBy("views"), window.location.reload();
                    }}
                  >
                    Views
                  </button>
                  <button
                    className="hover:bg-slate-300 hover:scale-110 hover:text-black hover:-translate-y-2  rounded-full transition ease-in-out px-1"
                    onClick={() => {
                      setSortBy("date"), window.location.reload();
                    }}
                  >
                    Upload Date
                  </button>
                  <button
                    className="hover:bg-slate-300 hover:scale-110 hover:text-black hover:-translate-y-2  rounded-full transition ease-in-out"
                    onClick={() => {
                      setSortBy("rating"), window.location.reload();
                    }}
                  >
                    Rating
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Filter;
