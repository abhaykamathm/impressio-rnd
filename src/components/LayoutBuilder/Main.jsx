import React, { useState, useEffect, useRef } from "react";
import LZString from "lz-string";
import SidePanel from "./SidePanel";
import CanvasSection from "./CanvasSection";

const Main = ({ tvSize, setTvSize, dimensions, getDimensions }) => {
  const [layout, setLayout] = useState([]);
  const [layoutJSON, setLayoutJSON] = useState("");
  const [outputURL, setOutputURL] = useState("");
  const [gridWidth, setGridWidth] = useState(1200);
  const [rowHeight, setRowHeight] = useState(100);

  function getDimensions(
    diagonal,
    aspectRatioWidth = 16,
    aspectRatioHeight = 10
  ) {
    const aspectRatio = aspectRatioWidth / aspectRatioHeight;
    const height = Math.sqrt(diagonal ** 2 / (aspectRatio ** 2 + 1));
    const width = height * aspectRatio;
    return { width, height };
  }

  const addItem = () => {
    const newItem = {
      i: `item-${layout.length + 1}`,
      x: 0,
      y: Math.min(layout.length * 2, 10 - 2),
      w: 4,
      h: 3,
    };
    setLayout([...layout, newItem]);
  };

  const onLayoutChange = (newLayout) => {
    localStorage.removeItem("savedMapping");
    const filteredLayout = newLayout.map((item) => ({
      ...item,
      y: Math.min(item.y, 10 - item.h),
    }));
    setLayout(filteredLayout);
    localStorage.setItem("savedLayout", JSON.stringify(filteredLayout)); // Save to local storage
  };

  const exportLayout = () => {
    const layoutData = layout.map((item) => ({ ...item }));
    const encodedLayout = encodeURIComponent(JSON.stringify(layoutData));
    setLayoutJSON(JSON.stringify(layoutData));
  };

  const getRoute = () => {
    const layoutDataEncoded =
      LZString.compressToEncodedURIComponent(layoutJSON);
    return `/custom-layout-output?data=${layoutDataEncoded}`;
  };

  const handleGetURL = () => {
    setOutputURL(window.location.origin + getRoute());
  };

  const clearLayout = () => {
    setLayout([]);
    setLayoutJSON("");
    setOutputURL("");
    localStorage.removeItem("savedLayout"); // Clear local storage
    localStorage.removeItem("savedMapping"); // Clear local storage
  };

  return (
    <main className="flex flex-1 overflow-hidden">
      <CanvasSection
        layout={layout}
        setLayout={setLayout}
        rowHeight={rowHeight}
        setRowHeight={setRowHeight}
        gridWidth={gridWidth}
        setGridWidth={setGridWidth}
        onLayoutChange={onLayoutChange}
        dimensions={dimensions}
      />
      <SidePanel
        layout={layout}
        tvSize={tvSize}
        setTvSize={setTvSize}
        dimensions={dimensions}
        getDimensions={getDimensions}
        addItem={addItem}
        clearLayout={clearLayout}
        exportLayout={exportLayout}
        handleGetURL={handleGetURL}
        layoutJSON={layoutJSON}
        outputURL={outputURL}
      />
    </main>
  );
};

export default Main;
