import React, { useEffect, useState } from "react";
import Navbar from "../components/LayoutBuilder/Navbar";
import Main from "../components/LayoutBuilder/Main";

const LayoutBuilder = () => {
  const [tvSize, setTvSize] = useState("55");
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (tvSize) {
      const { width, height } = getDimensions(tvSize);
      setDimensions({ width, height });
    }
  }, [tvSize]);

  function getDimensions(
    diagonal,
    aspectRatioWidth = 16,
    aspectRatioHeight = 9
  ) {
    const aspectRatio = aspectRatioWidth / aspectRatioHeight;
    const height = Math.sqrt(diagonal ** 2 / (aspectRatio ** 2 + 1));
    const width = height * aspectRatio;
    return { width, height };
  }

  return (
    <div
      id="layout-builder"
      className="w-full h-full flex flex-col bg-gray-100"
    >
      <Navbar />
      <Main
        tvSize={tvSize}
        setTvSize={setTvSize}
        dimensions={dimensions}
        getDimensions={getDimensions}
      />
    </div>
  );
};

export default LayoutBuilder;
