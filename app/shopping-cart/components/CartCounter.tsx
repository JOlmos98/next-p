"use client";

import React, { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({value=0}) => {

    const [count, setCount] = useState(value);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          onClick={() => setCount(count + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-600 hover:bg-blue-700 text-white hove:bg-blue-500 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-600 hover:bg-blue-700 text-white hove:bg-blue-500 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </div>
  );
};
