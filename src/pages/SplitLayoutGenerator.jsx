import React, { useState, useEffect } from "react";

const SplitLayoutGenerator = () => {
  const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);
  const [baseUrl, setBaseUrl] = useState("");
  const [contentUrl, setContentUrl] = useState("");

  // Automatically set the base URL to the current host URL
  useEffect(() => {
    window.document.title = "ImpressIO - Layout Generator";
    setBaseUrl(window.location.origin);
  }, []);

  const generateGridItems = () => {
    const gridItems = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const zoomX = columns;
        const zoomY = columns;
        const xOffset = -1 * ((col * 100) / columns);
        const yOffset = -1 * ((row * 100) / rows);

        const tvNumber = row * columns + col + 1;
        const url = `${baseUrl}?url=${encodeURIComponent(
          contentUrl
        )}&zoomX=${zoomX}&zoomY=${zoomY}&xOffset=${xOffset}&yOffset=${yOffset}`;

        gridItems.push(
          <div
            key={`${row}-${col}`}
            className="max-w-[17vw] aspect-[16/9] flex flex-col justify-center items-center border border-gray-600 rounded-sm p-4 bg-gray-50"
          >
            <span className="text-gray-600 text-sm font-medium mb-2">
              TV {tvNumber}
            </span>
            <p className="text-blue-600 text-xs break-all text-center">{url}</p>
          </div>
        );
      }
    }

    return gridItems;
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Split Layout Generator
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Rows
            </label>
            <input
              type="number"
              value={rows}
              onChange={(e) => setRows(Number(e.target.value))}
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
              min="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Columns
            </label>
            <input
              type="number"
              value={columns}
              onChange={(e) => setColumns(Number(e.target.value))}
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
              min="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content URL
            </label>
            <input
              type="text"
              value={contentUrl}
              onChange={(e) => setContentUrl(e.target.value)}
              placeholder="Enter content URL"
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div
          className={`my-grid grid gap-1`}
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          }}
        >
          {generateGridItems()}
        </div>
      </div>
    </div>
  );
};

export default SplitLayoutGenerator;
