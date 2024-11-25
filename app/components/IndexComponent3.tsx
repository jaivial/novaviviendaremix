// app/components/IndexComponent3.tsx
import React, { useState, useEffect } from "react";
import { useScreenWidth } from "~/ScreenWidthProvider";

const IndexComponent3: React.FC = () => {
  const { screenWidth } = useScreenWidth();

  return (
    <div className={`max-w-[1024px] w-full flex flex-row justify-center items-center mx-auto`}>
      <div className="w-full bg-red-200 h-[800px]">
        <img src="/indexcomponent3.webp" alt="Vivienda Nova CRM inmobiliarias. Organiza tareas, todo app, calendario de tareas, objetivos diarios." className="w-auto h-auto" />
      </div>
      <div className="w-1/2 bg-red-200"></div>
    </div>
  );
};

export default IndexComponent3;
