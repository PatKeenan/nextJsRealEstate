import React from "react";
import Image from "next/image";
import Modal from "../../../components/modal";
import gsap, { TweenMax, Power3 } from "gsap";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [heartColor, setHeart] = useState("red");
  let photoButtons = useRef(null);
  let photoButtonsRight = useRef(null);
  let virtualTourButton = useRef(null);

  //popup
  const [popState, setPopState] = useState(false);

  let body = useRef(null);
  useEffect(() => {
    TweenMax.to(body, {
      duration: 1,
      ease: Power3.easeInOut,
      opacity: 1,
    });
    TweenMax.to([photoButtons, photoButtonsRight, virtualTourButton], {
      duration: 1.5,
      ease: Power3.easeInOut,
      opacity: 1,
      delay: 0.5,
      y: 0,
    });
  }, []);

  const likeHeart = () => {
    if (heartColor == "none") {
      setHeart("red");
    } else {
      setHeart("none");
    }
  };
  const sendToTour = () => {
    router.push("/listings/3-plymouth-rd/virtual-tour");
  };
  return (
    <div className="container mx-auto relative">
      {popState && (
        <>
          <Modal onClick={() => setPopState(true)} />

          <button
            className="fixed right-5 top-5 z-50 bg-white flex flex-row p-2 rounded-lg text-gray-700 align-middle justify-center hover:bg-gray-100"
            onClick={() => setPopState(!popState)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ height: "25px", width: "25px" }}
              className="text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Close
          </button>
        </>
      )}

      <div className="flex flex-row justify-between align-middle max-w-3xl w-full mx-auto px-4 py-2">
        <h1 className="md:text-2xl text-gray-700 font-bold text-xl">
          3 Plymouth Rd, Westfield NJ
        </h1>
        <p className="mt-auto text-lg text-gray-700 font-bold">
          <span className="text-sm text-gray-400 pr-1">$</span>689,000
        </p>
      </div>
      <div className="relative h-auto max-w-3xl mx-auto">
        <button
          className="flex flex-row absolute top-6 left-6 bg-white rounded-3xl shadow-lg px-2 py-1 text-sm text-gray-700 opacity-0 hover:bg-gray-100 "
          ref={(el) => (photoButtons = el)}
          onClick={() => setPopState(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ height: "15px", width: "auto" }}
            className="my-auto pr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          View Photos
        </button>
        <button
          className="flex flex-row absolute bottom-6 left-6 bg-white rounded-3xl shadow-lg px-2 py-1 text-sm text-gray-700 opacity-0 hover:bg-gray-100"
          onClick={sendToTour}
          ref={(e) => (virtualTourButton = e)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ height: "15px", width: "auto" }}
            className="my-auto pr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          View Virtual Tour
        </button>
        <p
          className="text-green-400 flex flex-row justify-center align-middle absolute  top-6 right-6 opacity-0 bg-white rounded-3xl shadow-lg px-2 py-1 text-sm"
          ref={(els) => (photoButtonsRight = els)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            style={{ height: "15px", width: "auto" }}
            className="text-green-400 my-auto pr-2"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
          Available
        </p>

        <img
          src="/3PlymouthFront.webp"
          className="mx-auto bg-white p-4 shadow-xl rounded-3xl max-w-3xl w-full h-auto opacity-0 cursor-pointer"
          ref={(e) => (body = e)}
          onClick={() => setPopState(!popState)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ height: "25px", width: "25px", fill: `${heartColor}` }}
          className=" my-auto absolute bottom-6 right-8  rounded-full text-gray-300"
          onClick={likeHeart}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Index;
