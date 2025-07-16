import LoaderSvg from "@/components/LoaderSvg";
import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-full md:mx-auto mx-0 ml-32 lg:ml-0 mt-10 overflow-hidden opacity-10">
      <LoaderSvg />
    </div>
  );
}

export default Loading;
