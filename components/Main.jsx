import React from "react";

const Main = ({ children }) => {
  return (
    <div className="flex flex-col relative flex-1  max-w-6xl mx-auto w-full min-h-full justify-center align-middle">
      {children}
    </div>
  );
};

export default Main;
