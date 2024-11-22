// app/components/Component1.tsx
import React, { useState } from "react";
import { useComponentsContext } from "~/ComponentsContext";

const Component1: React.FC = () => {
  // --- VARIABLES AND STATES ---
  const { state, dispatch } = useComponentsContext();

  // Function to handle - digit
  const handleDigtMinus = () => {
    dispatch({ type: "DECREMENT" });
  };
  // Function to handle + digit
  const handleDigitPlus = () => {
    dispatch({ type: "INCREMENT" });
  };

  // Function to handle message change
  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_MESSAGE", payload: event.target.value });
  };
  return (
    <div className="w-1/2 bg-red-300 bg-opacity-20 backdrop-blur-md flex flex-col justify-center items-center h-[500px] gap-4">
      <p className="pb-4 font-sans font-medium text-white text-md">This is the text for the context</p>
      <p className="text-white font-sans font-bold text-2xl text-center py-4 px-8 border border-white rounded-lg">{state.message}</p>
      <input type="text" name="message" id="message" className="p-6 bg-white bg-opacity-40" placeholder="Write here to see the message change on both components" onChange={handleMessageChange} />
      <p className="text-white font-sans font-medium text-center">Change the digit</p>
      <div className="counterchangecointainer w-fit h-auto flex flex-row justify-center items-center gap-8">
        <button type="button" className="text-3xl text-white hover:bg-opacity-40 hover:bg-blue-200 text-center py-6 px-8 bg-black bg-opacity-10 backdrop-blur-md rounded-full" onClick={handleDigtMinus}>
          -
        </button>
        <p className="text-white font-sans text-3xl font-bold">{state.digit}</p>
        <button type="button" className="text-3xl text-white hover:bg-opacity-40 hover:bg-blue-200 text-center py-6 px-8 bg-black bg-opacity-10 backdrop-blur-md rounded-full" onClick={handleDigitPlus}>
          +
        </button>
      </div>
    </div>
  );
};

export default Component1;
