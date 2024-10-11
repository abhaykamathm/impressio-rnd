import React, { useState, useEffect, useRef } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const CanvasSection = ({
  layout,
  setLayout,
  rowHeight,
  setRowHeight,
  gridWidth,
  setGridWidth,
  onLayoutChange,
  dimensions,
  onZoneSelect,
  selectedZone,
}) => {
  const layoutBuilderContainerRef = useRef(null);

  useEffect(() => {
    const savedLayout = localStorage.getItem("savedMapping");
    if (savedLayout) {
      setLayout(JSON.parse(savedLayout));
    }
    const updateGridDimensions = () => {
      const screenWidth = layoutBuilderContainerRef.current?.clientWidth;
      const screenHeight = layoutBuilderContainerRef.current?.clientHeight;

      if (screenWidth && screenHeight) {
        const calculatedGridWidth = screenWidth;
        const calculatedRowHeight = screenHeight / 10;

        setGridWidth(calculatedGridWidth);
        setRowHeight(calculatedRowHeight);
      }
    };

    updateGridDimensions();
    window.addEventListener("resize", updateGridDimensions);

    return () => window.removeEventListener("resize", updateGridDimensions);
  }, []);

  return (
    <section className="w-full px-16 py-8 flex-1 bg-white shadow-md rounded-md">
      <div className="w-full aspect-[16/9] flex relative">
        <div
          ref={layoutBuilderContainerRef}
          id="layout-builder-container"
          className="w-full aspect-[16/9] border-2 border-indigo-300 rounded-md bg-gray-50"
        >
          <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={rowHeight}
            width={gridWidth}
            isResizable={false}
            isDraggable={false}
            maxRows={10}
            margin={[0, 0]}
            containerPadding={[0, 0]}
            isDroppable={false}
          >
            {layout.map((item, index) => (
              <div
                key={item.i}
                className={`flex justify-center items-center text-gray-800 bg-gradient-to-r from-indigo-100 to-blue-50 rounded-md shadow-lg ${
                  selectedZone === item.i ? "ring-4 ring-blue-500" : ""
                }`}
                onClick={() => onZoneSelect(item.i)}
                style={{ outline: "1px solid #4F46E5", cursor: "pointer" }}
              >
                {`Zone ${index + 1}`}
              </div>
            ))}
          </GridLayout>
        </div>
      </div>
    </section>
  );
};

export default CanvasSection;
