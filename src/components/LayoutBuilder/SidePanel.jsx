import React from "react";
import { useNavigate } from "react-router-dom";

const SidePanel = ({
  layout,
  tvSize,
  setTvSize,
  dimensions,
  getDimensions,
  addItem,
  clearLayout,
  exportLayout,
  handleGetURL,
  layoutJSON,
  outputURL,
}) => {
  const navigate = useNavigate();

  const handleMapContent = () => {
    let savedLayout = JSON.parse(localStorage.getItem("savedLayout"));
    if (!localStorage.getItem("savedMapping")) {
      let mappedlayout = [...savedLayout];
      mappedlayout = mappedlayout.map((item, index) => {
        return {
          ...item,
          content_type: item.content_type || "",
          content_value: item.content_value || "",
        };
      });
      localStorage.setItem("savedMapping", JSON.stringify(mappedlayout));
    }
    navigate("/layout-mapper");
  };

  return (
    <section className="w-96 h-full p-4 border-l-2 border-gray-300 bg-white shadow-md flex flex-col gap-4 overflow-auto custom-scrollbar">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="tvSize" className="text-gray-700 font-medium">
            Select TV Size (inches)
          </label>
          <select
            id="tvSize"
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            value={tvSize}
            onChange={(e) => setTvSize(e.target.value)}
          >
            <option value="">Select Size</option>
            <option value="32">32"</option>
            <option value="43">43"</option>
            <option value="55">55"</option>
            <option value="65">65"</option>
            <option value="75">75"</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Width (inches)</label>
            <input
              type="text"
              value={dimensions.width.toFixed(1)}
              readOnly
              className="p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Height (inches)</label>
            <input
              type="text"
              value={dimensions.height.toFixed(1)}
              readOnly
              className="p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={addItem}
          className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-gray-900 hover:to-gray-700 transition-all duration-300"
        >
          Add Zone
        </button>
        <button
          onClick={clearLayout}
          className="bg-gradient-to-r from-red-700 to-red-900 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-red-900 hover:to-red-700 transition-all duration-300"
        >
          Clear
        </button>
        <button
          onClick={exportLayout}
          className="bg-gradient-to-r from-green-700 to-green-900 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-green-900 hover:to-green-700 transition-all duration-300"
        >
          Export Layout
        </button>
        <button
          onClick={handleGetURL}
          className="bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-blue-900 hover:to-blue-700 transition-all duration-300"
        >
          Get URL
        </button>
        <button
          onClick={handleMapContent}
          className="col-start-1 col-end-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-gray-900 hover:to-gray-700 transition-all duration-300"
        >
          Map Content
        </button>
      </div>
      <div className="p-2 outline outline-1 outline-gray-300 rounded-md text-sm text-gray-700 bg-gray-50 shadow-sm break-all">
        {layoutJSON || "No layout JSON"}
      </div>
      <div className="p-2 outline outline-1 outline-gray-300 rounded-md text-sm text-gray-700 bg-gray-50 shadow-sm flex justify-center items-center break-all">
        {outputURL ? (
          <a
            href={outputURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline text-sm"
          >
            {outputURL}
          </a>
        ) : (
          "No output URL"
        )}
      </div>
    </section>
  );
};

export default SidePanel;
