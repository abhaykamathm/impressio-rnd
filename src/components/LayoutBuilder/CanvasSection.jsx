import React, { useState, useEffect, useRef } from "react";
import GridLayout from "react-grid-layout";
import Draggable from "react-draggable";
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
}) => {
  const layoutBuilderContainerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const savedLayout = localStorage.getItem("savedLayout");
    // console.log("From Builder");
    // console.log(JSON.parse(savedLayout));

    if (savedLayout) {
      setLayout(JSON.parse(savedLayout));
    }

    const updateGridDimensions = () => {
      const screenWidth = layoutBuilderContainerRef.current?.clientWidth;
      const screenHeight = layoutBuilderContainerRef.current?.clientHeight - 40;

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
    <section
      ref={canvasRef}
      className="w-full flex-1 bg-white shadow-md rounded-md"
    >
      <div className="w-full aspect-[16/9] flex justify-center items-center relative">
      {/* <Draggable bounds="parent"> */}
        <div
          ref={layoutBuilderContainerRef}
          id="layout-builder-container"
          className="w-[75%] h-[80%] border-2 border-indigo-300 rounded-md bg-gray-50"
        >
          <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={rowHeight}
            width={gridWidth}
            onLayoutChange={onLayoutChange}
            isResizable
            isDraggable
            maxRows={10}
            margin={[0, 0]} // Set uniform gap between grid items (10px)
            containerPadding={[20, 20]} // Set padding around the grid container (20px)
            isDroppable
          >
            {layout.map((item, index) => (
              <div
                key={item.i}
                onMouseDown={(e) => {
                  e.stopPropagation();
                }}
                onMouseEnter={(e) => {
                  e.stopPropagation();
                }}
                style={{ outline: "1px solid #4F46E5" }}
                className="flex justify-center items-center text-gray-800 bg-gradient-to-r from-indigo-100 to-blue-50 rounded-md shadow-lg"
              >
                {`Zone ${index + 1}`}
              </div>
            ))}
          </GridLayout>
        </div>
      {/* </Draggable> */}
      {/* <VerticalDimension
          value={dimensions.height}
          length={layoutBuilderContainerRef.current?.clientHeight}
        /> */}
      </div>
      {/* <div className="mt-2">
        <HorizontalDimension
          value={dimensions.width}
          length={layoutBuilderContainerRef.current?.clientWidth}
        />
      </div> */}
    </section>
  );
};

export default CanvasSection;

const HorizontalDimension = ({ value, length }) => {
  return (
    <div
      className="flex items-center gap-2"
      style={{
        width: `${parseInt(length) - 1}px`,
      }}
    >
      <div className="flex-grow border border-t-1 border-b-1 border-dashed"></div>
      <div className="text-gray-500">{`${value.toFixed(1)} ''`}</div>
      <div className="flex-grow border border-t-1 border-b-1 border-dashed"></div>
    </div>
  );
};

const VerticalDimension = ({ value, length }) => {
  return (
    <div
      className="ml-2 flex flex-col items-center gap-2 overflow-clip"
      style={{
        height: `${parseInt(length)}px`,
      }}
    >
      <div className="flex-grow border border-t-1 border-b-1 border-dashed"></div>
      <div className="text-gray-500 rotate-90">{`${value.toFixed(1)}''`}</div>
      <div className="flex-grow border border-t-1 border-b-1 border-dashed"></div>
    </div>
  );
};
