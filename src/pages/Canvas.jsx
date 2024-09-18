import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [width, setWidth] = useState(15);
  const [height, setHeight] = useState(15);
  const gridContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    // Set container dimensions based on the grid container's dimensions
    if (gridContainerRef.current) {
      setContainerWidth(gridContainerRef.current.clientWidth);
      setContainerHeight(gridContainerRef.current.clientHeight);
    }
  }, [gridContainerRef.current]);

  return (
    <div
      className="canvas w-full h-full p-4 relative z-0 flex justify-center items-center"
      ref={canvasRef}
    >
      <div className="w-full h-full absolute z-10 left-0 top-0 flex justify-center items-center pointer-events-none">
        <div
          className="pointer-events-none grid grid-cols-2 gap-4 z-30"
          ref={gridContainerRef}
        >
          {Array(4)
            .fill(null)
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-[250px] h-[180px] flex justify-center items-center bg-[rgba(200,200,200,0.5)] outline"
                >
                  TV - Display Panel
                </div>
              );
            })}
        </div>
      </div>
      {/* Container for draggable component */}
      <div
        className="absolute z-0"
        style={{
          width: `${containerWidth}px`,
          height: `${containerHeight}px`,
        }}
      >
        {/* <Draggable bounds="parent"> */}
        <div
          className="rounded-md aspect-square bg-slate-200 hover:cursor-pointer hover:bg-green-800 overflow-hidden resize flex"
          style={{
            width: `${width}vw`,
            height: `${height}vw`,
            maxWidth: `${containerWidth}px`,
            maxHeight: `${containerHeight}px`,
          }}
        >
          <img src="/mo.webp" className="w-full h-full" />
        </div>
        {/* </Draggable> */}
      </div>
    </div>
  );
};

export default Canvas;
