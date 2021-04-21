import React from "react";
import Link from "next/link";
import gsap, { TweenMax, Power3 } from "gsap";
import { useRef, useEffect, useState } from "react";

const Login = () => {
  let body = useRef(null);
  useEffect(() => {
    TweenMax.to(body, {
      duration: 0.5,
      ease: Power3.easeInOut,
      opacity: 1,
    });
  });
  return (
    <div
      class="container mx-auto flex flex-col items-center justify-center align-middle relative opacity-0"
      style={{ minHeight: "70vh" }}
      ref={(c) => (body = c)}
    >
      <div className="absolute top-5 left-5">
        <Link href="/">
          <a className="text-blue-600 flex flex-row align-middle justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ height: "20px", paddingRight: "5px" }}
              className="my-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Return Home
          </a>
        </Link>
      </div>

      <form class="shadow-lg w-80  p-4 flex flex-col bg-white rounded-lg">
        <h3 className="text-center py-4 text-xl">Login</h3>
        <input
          type="text"
          placeholder="Email"
          class="mb-3 py-2 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
        />
        <input
          type="text"
          placeholder="Pasword"
          class="mb-3 py-2 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
        />
        <button class="w-full blue-bg text-white p-3 rounded-lg  text-lg">
          Login
        </button>
        <a class="text-blue-400 text-center my-2">Forgot Pasword?</a>
      </form>
    </div>
  );
};

export default Login;
