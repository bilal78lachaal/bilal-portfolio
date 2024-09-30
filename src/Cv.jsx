import React from "react";

function CV() {
  const cvUrl = "../images/cv_bilal1.pdf";

  return (
    <div className="relative group flex justify-center md:justify-between ">
      <div className="  relative  w-40 mt-2 lg:mt-4 h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
        <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] transition-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

        <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-center text-sm   h-full opacity-80 w-full  pt-4 rounded-xl bg-zinc-900"
          >
            View_CV
          </a>
        </div>

        <div className="absolute duration-800 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-blue-800 to-yellow-200 blur-[20px]"></div>
      </div>
    </div>
  );
}

export default CV;
