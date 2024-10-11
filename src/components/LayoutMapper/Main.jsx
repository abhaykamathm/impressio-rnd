import React, { useState, useEffect, useRef } from "react";
import LZString from "lz-string";
import CanvasSection from "./CanvasSection";
import SidePanel from "./SidePanel";

const Main = () => {
  const [layout, setLayout] = useState(
    localStorage.getItem("savedMapping")
      ? JSON.parse(localStorage.getItem("savedMapping"))
      : []
  );
  const [layoutJSON, setLayoutJSON] = useState("");
  const [outputURL, setOutputURL] = useState("");
  const [gridWidth, setGridWidth] = useState(1200);
  const [rowHeight, setRowHeight] = useState(100);

  const [selectedZone, setSelectedZone] = useState(null);
  const [zoneMappings, setZoneMappings] = useState({});

  const handleZoneSelect = (zoneId) => {
    setSelectedZone(zoneId);
  };

  const handleSaveMapping = (zoneId, contentType, contentValue) => {
    let zoneObject = layout.find((item) => item.i === zoneId);
    let zoneIndex = layout.findIndex((item) => item.i === zoneId);
    zoneObject.content_type = contentType;
    zoneObject.content_value = contentValue;
    let modifiedLayout = [...layout];
    modifiedLayout[zoneIndex] = zoneObject;
    setLayout(modifiedLayout);
    onLayoutChange(modifiedLayout);
    setZoneMappings((prevMappings) => ({
      ...prevMappings,
      [zoneId]: { contentType, contentValue },
    }));
  };

  const clearMapping = () => {
    let layoutWithoutMapping = [...layout];
    layoutWithoutMapping = layoutWithoutMapping.map((item, index) => {
      item.content_type = "";
      item.content_value = "";
      return item;
    });
    onLayoutChange(layoutWithoutMapping);
    setZoneMappings({});
    setSelectedZone(null);
    setOutputURL("");
  };

  const contentTypes = [
    { type: "Web URL", feature_enabled: true },
    { type: "Image", feature_enabled: true },
    { type: "Video", feature_enabled: false },
  ];

  //   function getDimensions(
  //     diagonal,
  //     aspectRatioWidth = 16,
  //     aspectRatioHeight = 10
  //   ) {
  //     const aspectRatio = aspectRatioWidth / aspectRatioHeight;
  //     const height = Math.sqrt(diagonal ** 2 / (aspectRatio ** 2 + 1));
  //     const width = height * aspectRatio;
  //     return { width, height };
  //   }

  //   const addItem = () => {
  //     const newItem = {
  //       i: `item-${layout.length + 1}`,
  //       x: 0,
  //       y: Math.min(layout.length * 2, 10 - 2),
  //       w: 4,
  //       h: 3,
  //     };
  //     setLayout([...layout, newItem]);
  //   };

  const onLayoutChange = (newLayout) => {
    const filteredLayout = newLayout.map((item) => ({
      ...item,
      y: Math.min(item.y, 10 - item.h),
    }));
    setLayout(filteredLayout);
    localStorage.setItem("savedMapping", JSON.stringify(filteredLayout)); // Save to local storage
  };

  const exportLayout = () => {
    const layoutData = layout.map((item) => ({ ...item }));
    const encodedLayout = encodeURIComponent(JSON.stringify(layoutData));
    setLayoutJSON(JSON.stringify(layoutData));
  };

  const getRoute = () => {
    const layoutDataEncoded = LZString.compressToEncodedURIComponent(
      JSON.stringify(layout)
    );
    return `/custom-layout-output?data=${layoutDataEncoded}`;
  };

  const handleGetURL = () => {
    setOutputURL(window.location.origin + getRoute());
  };

  //   const clearLayout = () => {
  //     setLayout([]);
  //     setLayoutJSON("");
  //     setOutputURL("");
  //     localStorage.removeItem("savedLayout"); // Clear local storage
  //   };

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
        onZoneSelect={handleZoneSelect}
        selectedZone={selectedZone}
      />
      <SidePanel
        layout={layout}
        selectedZone={selectedZone}
        contentTypes={contentTypes}
        onContentTypeChange={() => {}}
        onContentValueChange={() => {}}
        onSaveMapping={handleSaveMapping}
        clearMapping={clearMapping}
        zoneMappings={zoneMappings}
        handleGetURL={handleGetURL}
        outputURL={outputURL}
      />
    </main>
  );
};

export default Main;
