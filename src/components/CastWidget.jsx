import React from "react";

const CastWidget = () => {
  const handleCastNow = () => {
    // Add your casting functionality here
    console.log("Casting started!");
  };

  return (
    <div className="bg-gray-100 shadow-md p-4 rounded-md flex flex-col gap-4">
      <span className="text-gray-900 font-medium">
        Ready to cast your dashboard?
      </span>
      <button
        onClick={handleCastNow}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
      >
        Cast Now
      </button>
    </div>
  );
};

export default CastWidget;
