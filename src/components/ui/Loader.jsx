import React, { useEffect, useRef, useState } from "react";

import { createPortal } from "react-dom";

function LoaderBlock() {
  return <div className="bg-blue-500 rounded-sm w-[20px] aspect-square"></div>;
}

export default function Loader() {
  const loaderRef = useRef(null);
  const [loaderBlock, setLoaderBlock] = useState([]);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setLoaderBlock((prev) => {
        if (prev.length > 9) return [];
        return [...prev, "+"];
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="relative flex gap-1 m-4 ml-12 rounded-sm border-2 border-black px-1 py-1 h-[30px] w-[255px]"
      id="loader"
      ref={loaderRef}
    >
      {loaderBlock.map(() => (
        <LoaderBlock />
      ))}
    </div>
  );
}
