// app/components/Component2.tsx
import React, { useState } from "react";
import { useComponentsContext } from "~/ComponentsContext";

const Component2: React.FC = () => {
  // --- VARIABLES AND STATES ---
  const { state } = useComponentsContext();
  return (
    <div className="bg-blue-200 bg-opacity-50 w-1/2 flex flex-row justify-center items-center h-[500px] gap-0">
      <div className="w-1/2 h-full border-r-1 border-white flex flex-col justify-center items-center gap-4">
        <p className="text-white font-medium font-sans text-center">Here is the context message</p>
        <p className="text-white text-2xl font-sans font-bold">{state.message}</p>
      </div>
      <div className="w-1/2 h-full border-l-1 border-white flex flex-col justify-center items-center gap-4">
        <p className="text-white font-medium font-sans text-center">Here is the digit from the context</p>
        <p className="text-white text-2xl font-sans font-bold">{state.digit}</p>
      </div>
    </div>
  );
};

export default Component2;
