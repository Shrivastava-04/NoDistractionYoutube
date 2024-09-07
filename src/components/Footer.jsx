import React from "react";

const Footer = () => {
  return (
    <>
      <div className="px-8 bg-gray-300 dark:bg-cyan-900 rounded-t-lg h-[8rem] flex justify-center items-center  ">
        <aside>
          <p className="font-semibold">
            Copyright © ${new Date().getFullYear()} - All right reserved by
            Harshit Shrivastava
          </p>
        </aside>{" "}
      </div>
    </>
  );
};

export default Footer;
