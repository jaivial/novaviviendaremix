// app/components/IndexComponent3.tsx
import { section } from "framer-motion/client";
import React, { useState, useEffect, useRef } from "react";
import { useScreenWidth } from "~/ScreenWidthProvider";

const IndexComponent3: React.FC = () => {
  const { screenWidth } = useScreenWidth();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isImgVisible, setIsImgVisible] = useState<boolean>(false);
  const [isH2Visible, setIsH2Visible] = useState<boolean>(false);
  const [isH3Visible, setIsH3Visible] = useState<boolean>(false);
  const [isPVisible, setIsPVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsH2Visible(true);
            setIsH3Visible(true);
            setIsImgVisible(true);
            setIsPVisible(true);
          } else {
            setIsH2Visible(false);
            setIsH3Visible(false);
            setIsImgVisible(false);
            setIsPVisible(false);
          }
        });
      },
      { threshold: 0.7 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className={`max-w-[1100px]  ${screenWidth < 1100 ? "w-[95%]" : "w-full"} h-auto flex ${screenWidth < 900 ? "flex-col pt-20" : "flex-row pt-40"} justify-center items-center mx-auto relative`}>
      <div ref={sectionRef} className={`w-full h-auto flex ${screenWidth < 900 ? "flex-col items-center" : "flex-row items-start"} justify-center`}>
        {/*  */}
        <div className={` h-fit flex flex-col justify-center items-center ${screenWidth < 900 ? "relative w-full" : "w-2/3"} ${isImgVisible ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-[1500ms]`}>
          <img src="/iphonerocks2.png" alt="Vivienda Nova CRM inmobiliarias. Organiza tareas, todo app, calendario de tareas, objetivos diarios." className="w-auto h-full" />
          <div
            className={`absolute bg-black mx-auto h-[100px] ${screenWidth < 900 ? "w-full" : "w-[110%]"} z-[30] ${
              screenWidth < 380 ? "-bottom-[5.5rem] blur-[1rem]" : screenWidth < 420 ? "-bottom-[5rem] blur-[1rem]" : screenWidth < 500 ? "-bottom-[4.5rem] blur-[1rem]" : screenWidth < 650 ? "-bottom-[4.5rem] blur-[1rem]" : screenWidth < 700 ? "-bottom-[4.5rem] blur-[1rem]" : screenWidth < 900 ? "-bottom-[5rem] blur-[1rem]" : "-bottom-[3rem] blur-[1rem]"
            }`}
          ></div>
        </div>

        <div className={`${screenWidth < 900 ? "w-full justify-center items-center mt-8" : "w-1/3 justify-center"} h-fit flex flex-col justify-start gap-0 items-start z-[40]`}>
          <h2 className={`transition-opacity ease-in-out duration-[1500ms] text-gray-50 font-sans font-bold ${isH2Visible ? "opacity-100" : "opacity-0"} ${screenWidth < 600 ? "text-center text-3xl pt-4" : "text-4xl"}`}>Organiza tus tareas.</h2>
          <h3 className={`transition-opacity ease-in-out duration-[1500ms] text-gray-300 mt-4 font-sans font-bold ${isH3Visible ? "opacity-100" : "opacity-0"} ${screenWidth < 600 ? "text-center text-2xl px-3" : "text-3xl"}`}>Controla el tiempo, alcanza tus objetivos.</h3>
          <p className={`transition-opacity ease-in-out duration-[1500ms] ${isPVisible ? "opacity-100" : "opacity-0"} ${screenWidth < 900 ? "text-base text-center w-[80%]" : " text-start text-lg w-full"} mt-8 font-sans font-medium text-gray-400`}>
            <strong className="text-white">Asigna tareas.</strong> Gestiona la actividad y objetivos diarios y de tus asesores inmobiliarios con el calendario de tareas integrado.
          </p>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default IndexComponent3;
