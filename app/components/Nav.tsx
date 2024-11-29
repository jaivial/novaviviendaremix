// app/components/Nav.tsx
import React from "react";
import { useScreenWidth } from "~/ScreenWidthProvider";

const Nav: React.FC = () => {
  const { screenWidth } = useScreenWidth();
  return (
    <nav className={`fixed top-0 left-0 right-0 ${screenWidth < 450 ? "w-[95%] px-0 flex flex-row justify-center items-center" : "w-fit px-16"} mx-auto mt-3 rounded-xl py-auto z-[99] backdrop-blur-sm bg-gray-950 bg-opacity-50 flex flex-col justify-center items-center border-[0.9px] border-gray-400 border-opacity-50`}>
      <ul className="flex justify-center items-center w-fit px-8 mx-auto gap-8 text-gray-200 pt-4 text-sans font-medium pb-4 z-[99]">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/about">Precios</a>
        </li>
        <li>
          <a href="/contact">Servicios</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
