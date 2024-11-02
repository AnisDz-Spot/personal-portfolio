"use client";

import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-10 justify-center items-center absolute top-0 left-0 z-[999] bg-black">
      <Triangle
        visible={true}
        height="120"
        width="120"
        color="#00FFFF"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <h1 className="text-[#00FFFF] text-3xl font-audiowide">ANIS DZED</h1>
    </div>
  );
};

export default Loading;
