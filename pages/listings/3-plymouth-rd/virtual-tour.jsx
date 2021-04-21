import { useRouter } from "next/router";
import React from "react";

const virtualTour = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/listings/3-plymouth-rd");
  };
  return (
    <div className="h-full w-full relative">
      <button
        className="absolute left-1 top-1 bg-white rounded px-2 py-1 flex flex-row align-middle justify-center text-gray-700 hover:bg-gray-100"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ height: "15px", width: "auto" }}
          className="text-gray-700 my-auto pr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
        Exit Tour
      </button>
      <iframe
        src="//storage.net-fs.com/hosting/6706406/1/"
        name="Untitled 2"
        width="100%"
        height="100%"
        frameborder="0"
        allow="fullscreen; accelerometer; gyroscope; magnetometer; vr; xr; xr-spatial-tracking; autoplay; camera; microphone"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
      ></iframe>
    </div>
  );
};

export default virtualTour;
