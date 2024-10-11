import React, { useEffect, useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const [componentList, setComponentList] = useState(Array(count));

  const handleCount = (newCount) => {
    setCount(newCount);
  };

  useEffect(() => {
    let newComponentList = new Array(count).fill(null);
    setComponentList(newComponentList);
  }, [count]);

  return (
    <div>
      <input
        type="number"
        className="border"
        value={count}
        onChange={(e) => {
          handleCount(parseInt(e.target.value));
        }}
        min={0}
      />
      <div className="w-full flex flex-wrap p-2 gap-2">
        {componentList?.map((item, index) => (
          <Button key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Test;

const Button = ({ index }) => {
  return <button>Button {index + 1}</button>;
};
