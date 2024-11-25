// app/components/IndexComponent3.tsx
import { section } from "framer-motion/client";
import React, { useState, useEffect, useRef } from "react";
import { useScreenWidth } from "~/ScreenWidthProvider";
import { Icon } from "@iconify/react/dist/iconify.js";

const IndexComponent5: React.FC = () => {
  const { screenWidth } = useScreenWidth();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cardRightVisible, setCardRightVisible] = useState<boolean>(false);
  const [cardLeftVisible, setCardLeftVisible] = useState<boolean>(false);
  const [cardCenterVisible, setCardCenterVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardRightVisible(true);
            setCardLeftVisible(true);
            setCardCenterVisible(true);
          } else {
            setCardRightVisible(false);
            setCardLeftVisible(false);
            setCardCenterVisible(false);
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
    <div ref={sectionRef} className={`max-w-[1100px]  ${screenWidth < 1100 ? "w-[95%]" : "w-full"} h-auto flex ${screenWidth < 900 ? "mt-20" : "mt-40"} flex-row justify-center items-center mx-auto relative overflow-x-hidden overflow-y-clip px-10 py-16`}>
      <div className={`${cardLeftVisible ? "w-1/3 border" : "w-0 border-none"} px-8 py-6 transition-all ease-in-out duration-[1500ms] rounded-3xl border-r-0 rounded-tr-none rounded-br-none border-slate-100 border-opacity-30 h-[700px] flex flex-col justify-start items-center`}>
        <div className="w-full min-h-[250px] border-b border-slate-100 border-opacity-25 flex flex-col justify-around items-start">
          <div className={`${cardLeftVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
            <h4 className={`text-slate-50 font-sans text-xl font-semibold`}>DEMO Vivienda Nova</h4>
            <h4 className={`text-gray-400 font-sans text-xl font-semibold`}>Gratis, 1 mes</h4>
          </div>
          <div className={`flex flex-col h-auto w-full justify-start items-center gap-0 pb-10 ${cardLeftVisible ? "opacity-100 delay-[500ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
            <div className="flex flex-row h-auto w-full justify-start items-center gap-4">
              <h2 className="text-[4rem] font-bold font-sans text-white">0€</h2>
              <h4 className="text-slate-50 font-sans text-xl font-normal">/ mes</h4>
            </div>
            <p className="text-xs font-light text-slate-100 opacity-30">* Facturación automática del plan Medium al siguiente mes.</p>
          </div>
        </div>
        <div className={`h-full w-full flex flex-col justify-start items-start mt-10 gap-4`}>
          <div className={`flex flex-row items-center justify-start gap-2 ${cardLeftVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
            <Icon icon="mdi:tick-circle-outline" className="text-slate-50 h-[30px] w-[30px]" />
            <p className="font-sans text-slate-50 text-sm">CRM personalizado para tu empresa.</p>
          </div>
          <div className={`flex flex-row items-center justify-start gap-2 ${cardLeftVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
            <Icon icon="mdi:tick-circle-outline" className="text-slate-50 h-[30px] w-[30px]" />
            <p className="font-sans text-slate-50 text-sm">Base de datos hasta 15 inmuebles.</p>
          </div>
          <div className={`flex w-full flex-row items-center justify-start gap-2 ${cardLeftVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
            <Icon icon="mdi:tick-circle-outline" className="text-slate-50 h-[30px] w-[30px]" />
            <p className="font-sans text-slate-50 text-sm">Registro de 1 usuario administrador.</p>
          </div>
          <div className={`flex flex-row items-center justify-start gap-2 ${cardLeftVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
            <Icon icon="mdi:tick-circle-outline" className="text-slate-50 h-[30px] w-[30px]" />
            <p className="font-sans text-slate-50 text-sm">Geolocalización de 1 área en el mapa.</p>
          </div>
        </div>
        <div className={`w-full flex flex-row justify-center items-center ${cardLeftVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
          <button className="py-2 px-4 bg-slate-200 text-black font-sans font-semibold rounded-xl md:hover:bg-white">Prueba gratuita</button>
        </div>
      </div>

      {/* center card */}
      <div className={`rounded-3xl border border-slate-100 px-8 py-6  border-opacity-30 ${cardCenterVisible ? "w-1/3 h-[800px]" : "w-2/3 h-[950px]"} transition-all ease-in-out duration-[1500ms] relative bg-black bg-opacity-90 z-[30]`}></div>

      {/* right card */}
      <div className={`${cardRightVisible ? "w-1/3 border" : "w-0 boder-none"} pl-10 pr-8 py-6 transition-all ease-in-out duration-[1500ms] rounded-3xl border border-l-0 rounded-tl-none rounded-bl-none border-slate-100  border-opacity-30 h-[700px] flex flex-col justify-start items-center`}>
        <div className="w-full min-h-[250px] border-b border-slate-100 border-opacity-25 flex flex-col justify-around items-start">
          <div className={`${cardLeftVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out flex flex-row items-center`}>
            <div className="flex flex-col w-full justify-start items-start">
              <h4 className={`text-slate-50 font-sans text-xl font-semibold`}>Plan MEDIUM</h4>
              <h4 className={`text-gray-400 font-sans text-base font-semibold`}>Para empresas pequeñas</h4>
            </div>
            <Icon icon="bitcoin-icons:verify-outline" className="text-slate-400 h-[5rem] w-[5rem] -mr-[10px]" />
          </div>
          <div className={`flex flex-col h-auto w-full justify-start items-center gap-0 pb-10 ${cardLeftVisible ? "opacity-100 delay-[500ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
            <div className="flex flex-row h-auto w-full justify-start items-center gap-4">
              <h2 className="text-[4rem] font-bold font-sans text-white">24€</h2>
              <h4 className="text-slate-50 font-sans text-xl font-normal">/ mes</h4>
            </div>
            <p className="text-xs font-light text-slate-100 opacity-30">* Facturación automática del plan Medium al siguiente mes.</p>
          </div>
        </div>
        <div className={`h-full w-full flex flex-col justify-start items-start mt-10 gap-4`}>
          <div className={`flex flex-row items-center justify-start gap-2 ${cardLeftVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
            <Icon icon="mdi:tick-circle-outline" className="text-slate-50 h-[30px] w-[30px]" />
            <p className="font-sans text-slate-50 text-sm">CRM personalizado para tu empresa.</p>
          </div>
          <div className={`flex flex-row items-center justify-start gap-2 ${cardLeftVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
            <Icon icon="mdi:tick-circle-outline" className="text-slate-50 h-[30px] w-[30px]" />
            <p className="font-sans text-slate-50 text-sm">Base de datos hasta 300 inmuebles.</p>
          </div>
          <div className={`flex w-full flex-row items-center justify-start gap-2 ${cardLeftVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
            <Icon icon="mdi:tick-circle-outline" className="text-slate-50 h-[30px] w-[30px]" />
            <p className="font-sans text-slate-50 text-sm">Registro de 3 usuarios y 1 administrador.</p>
          </div>
          <div className={`flex flex-row items-center justify-start gap-2 ${cardLeftVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
            <Icon icon="mdi:tick-circle-outline" className="text-slate-50 h-[30px] w-[30px]" />
            <p className="font-sans text-slate-50 text-sm">Geolocalización de 2 áreas en el mapa.</p>
          </div>
          <div className={`flex flex-row items-center justify-start gap-2 ${cardLeftVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
            <Icon icon="mdi:tick-circle-outline" className="text-slate-50 h-[30px] w-[30px]" />
            <p className="font-sans text-slate-50 text-sm">Calendario de tareas y estadísticas de objetivos.</p>
          </div>
        </div>
        <div className={`w-full flex flex-row justify-center items-center ${cardLeftVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
          <button className="py-2 px-4 bg-slate-200 text-black font-sans font-semibold rounded-xl md:hover:bg-white">Elige este plan</button>
        </div>
      </div>

      <div className="w-1/3 h-[820px] bg-blue-300 bg-opacity-30 blur-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[10]"></div>
    </div>
  );
};

export default IndexComponent5;
