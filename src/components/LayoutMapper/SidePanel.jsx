import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SidePanel = ({
  layout,
  selectedZone,
  contentTypes,
  clearMapping,
  zoneMappings,
  onSaveMapping,
  handleGetURL,
  outputURL,
}) => {
  const navigate = useNavigate();
  const [contentType, setContentType] = useState("");
  const [contentValue, setContentValue] = useState("");

  const handleSaveMapping = () => {
    if (selectedZone && contentType && contentValue) {
      onSaveMapping(selectedZone, contentType, contentValue);
      setContentType("");
      setContentValue("");
    }
  };

  return (
    <section className="w-96 h-full p-4 border-l-2 border-gray-300 bg-white shadow-md flex flex-col gap-4 overflow-auto custom-scrollbar">
      <div className="flex flex-col gap-4">
        <div className="text-gray-700 font-medium">
          Selected Zone: {selectedZone ? selectedZone.split("-")[1] : "None"}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contentType" className="text-gray-700 font-medium">
            Content Type
          </label>
          <select
            id="contentType"
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
          >
            <option value="">Select Content Type</option>
            {contentTypes.map((item, index) => (
              <option
                key={index}
                value={item.type}
                disabled={!item.feature_enabled}
              >
                {item.type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contentValue" className="text-gray-700 font-medium">
            Content Value
          </label>
          <input
            id="contentValue"
            type="text"
            value={contentValue}
            onChange={(e) => setContentValue(e.target.value)}
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Enter content value"
          />
        </div>

        <button
          onClick={handleSaveMapping}
          className={`${
            !selectedZone || !contentType || !contentValue
              ? "bg-gray-400 text-gray-200 cursor-not-allowed"
              : "bg-gradient-to-r from-green-700 to-green-900 text-white hover:from-green-900 hover:to-green-700"
          } font-semibold py-2 px-4 rounded-lg shadow-lg ${
            !selectedZone || !contentType || !contentValue
              ? "shadow-none"
              : "transition-all duration-300"
          }`}
          disabled={!selectedZone || !contentType || !contentValue}
        >
          Save Mapping
        </button>

        <button
          onClick={clearMapping}
          className="bg-gradient-to-r from-red-700 to-red-900 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-red-900 hover:to-red-700 transition-all duration-300"
        >
          Clear Mappings
        </button>
        <button
          onClick={handleGetURL}
          className="bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-blue-900 hover:to-blue-700 transition-all duration-300"
        >
          Get URL
        </button>
      </div>

      <div className="mt-1">
        <h3 className="text-gray-700 font-medium">Zone Mappings</h3>
        <ul className="list-disc pl-5 text-gray-600">
          {/* {Object.entries(zoneMappings).map(([zone, mapping], index) => (
            <li key={index}>
              <strong>Zone {zone}: </strong>
              {mapping.contentType} - {mapping.contentValue}
            </li>
          ))} */}
          {layout
            .filter((item, index) => {
              if (item.content_type) {
                return item;
              }
            })
            .map((item, index) => (
              <li key={index} className="break-all">
                <strong>Zone {item.i.split("-")[1]}: </strong>
                {item.content_type} - {item.content_value}
              </li>
            ))}
        </ul>
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
