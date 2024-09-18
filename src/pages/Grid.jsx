import React from "react";

const Grid = () => {
  return (
    <div className="flex flex-col items-center">
      {/* <h1 className="p-3">Custom Grid Layout with iframes</h1> */}
      <div className="w-[100dvw] h-[100dvh]">
        <div className="w-full h-full grid grid-cols-2">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2">
            <iframe
              width="100%"
              height="100%"
              src="https://clinks.aidtaas.com/"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="row-start-1 row-end-3 col-start-2 col-end-3">
            <iframe
              width="100%"
              height="100%"
              src="https://mo.aidtaas.com/"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="row-start-2 row-end-3 col-start-1 col-end-2">
            <iframe
              width="100%"
              height="100%"
              src="https://izak.aidtaas.com/"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
