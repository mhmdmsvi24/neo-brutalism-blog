import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-[400px] font-work-sans-bold text-2xl">
      <div className="flex h-full mx-auto">
        <div className="basis-[60%] flex flex-col w-screen">
          <div className="flex items-center justify-center text-5xl italic bg-yellow-400 border-b-4 border-r-4 border-black select-none font-work-sans-extrabold grow basis-1/2">
            Neo Brutalism
          </div>
          <div className="flex items-center justify-center bg-blue-500 border-r-4 border-black grow basis-1/2">
            2
          </div>
        </div>
        <div className="basis-[40%] flex flex-col">
          <div className="flex items-center justify-center bg-white border-b-4 border-black grow basis-1/2">
            3
          </div>
          <div className="flex items-center justify-center bg-yellow-400 grow basis-1/2">4</div>
        </div>
      </div>
    </div>
  );
}
