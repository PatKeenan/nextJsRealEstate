import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${
        props.style == "primary"
          ? "bg-gray-50 text-gray-700"
          : "bg-gray-700 text-gray-50"
      } px-4 py-2 rounded-md hover:shadow-lg active:scale-95 transform transition ease-in-out duration-150 text-sm md:text-base`}
    >
      {props.text}
    </button>
  );
};

export default Button;
