import React from "react";
import Chart from "../components/Chart";
import Summary from "../components/Summary";

const Olympics = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center w-full h-screen">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">India's Olympic Performance</h1>
        <p className="mb-8">
          Explore the journey of India at the Olympics, visualizing the number
          of gold, silver, and bronze medals won over the years.
        </p>
        <div className="bg-white p-4 rounded shadow-lg mb-8 flex">
          <Chart />
        </div>
        <Summary />
      </div>
    </div>
  );
};

export default Olympics;
