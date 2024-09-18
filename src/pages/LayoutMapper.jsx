import React from "react";
import Navbar from "../components/LayoutMapper/Navbar";
import Main from "../components/LayoutMapper/Main";

const LayoutMapper = () => {
  return (
    <div
      id="layout-builder"
      className="w-full h-full flex flex-col bg-gray-100"
    >
      <Navbar />
      <Main />
    </div>
  );
};

export default LayoutMapper;
