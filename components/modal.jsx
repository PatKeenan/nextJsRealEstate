import React, { useState } from "react";
import imageData from "../components/data";

const modal = (props) => {
  const imagesLength = ImageData.length;

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextClick = () => {
    if (currentSlide === imageData.length - 1) {
      return setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
    setCurrentSlide(currentSlide + 1);
  };
  const handleBackClick = () => {
    if (currentSlide === 0) {
      return setCurrentSlide(imageData.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  return (
    <div className="bg-black bg-opacity-80 fixed left-0 right-0 top-0 bottom-0 overflow-hidden justify-center flex align-middle z-30 h-screen">
      <img
        src={imageData[currentSlide].imagePath}
        className=" p-4 my-auto flex justify-center align-middle h-auto w-full relative max-w-3xl shadow-2xl"
      />
      <div className="fixed bttomom-0 flex flex-row w-full h-screen p-5 justify-between max-w-4xl mx-auto">
        <div className="my-auto justify-between w-full flex">
          <button className="p-4" onClick={handleBackClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-gray-300 shadow-2xl"
              style={{ height: "30px", width: "30px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </svg>
          </button>
          <button className="p-4" onClick={handleNextClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-white shadow-2xl"
              style={{ height: "30px", width: "30px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default modal;
