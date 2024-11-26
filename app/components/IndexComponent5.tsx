// app/components/IndexComponent3.tsx
import { section } from "framer-motion/client";
import React, { useState, useEffect, useRef } from "react";
import { useScreenWidth } from "~/ScreenWidthProvider";
import { Icon } from "@iconify/react/dist/iconify.js";

const IndexComponent5: React.FC = () => {
  const { screenWidth } = useScreenWidth();
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftCard = useRef<HTMLDivElement>(null);
  const rightCard = useRef<HTMLDivElement>(null);
  const centerCard = useRef<HTMLDivElement>(null);
  const [cardRightVisible, setCardRightVisible] = useState<boolean>(false);
  const [cardLeftVisible, setCardLeftVisible] = useState<boolean>(false);
  const [cardCenterVisible, setCardCenterVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardLeftVisible(true);
          } else {
            setCardLeftVisible(false);
          }
        });
      },
      { threshold: 0.4 }
    );

    // if (sectionRef.current) {
    //   observer.observe(sectionRef.current);
    // }
    if (leftCard.current) {
      observer.observe(leftCard.current);
    }

    return () => {
      // if (sectionRef.current) {
      //   observer.unobserve(sectionRef.current);
      // }
      if (leftCard.current) {
        observer.unobserve(leftCard.current);
      }
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardRightVisible(true);
          } else {
            setCardRightVisible(false);
          }
        });
      },
      { threshold: 0.4 }
    );

    // if (sectionRef.current) {
    //   observer.observe(sectionRef.current);
    // }
    if (rightCard.current) {
      observer.observe(rightCard.current);
    }

    return () => {
      // if (sectionRef.current) {
      //   observer.unobserve(sectionRef.current);
      // }
      if (rightCard.current) {
        observer.unobserve(rightCard.current);
      }
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardCenterVisible(true);
          } else {
            setCardCenterVisible(false);
          }
        });
      },
      { threshold: 0.4 }
    );

    // if (sectionRef.current) {
    //   observer.observe(sectionRef.current);
    // }
    if (centerCard.current) {
      observer.observe(centerCard.current);
    }

    return () => {
      // if (sectionRef.current) {
      //   observer.unobserve(sectionRef.current);
      // }
      if (centerCard.current) {
        observer.unobserve(centerCard.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={`max-w-[1100px]  ${screenWidth < 450 ? "w-[95%] px-6" : screenWidth < 1100 ? "w-[95%] px-10" : "w-full px-10"} h-auto flex ${screenWidth < 900 ? "mt-20" : "mt-40"} flex-col justify-center items-center mx-auto relative overflow-x-hidden overflow-y-clip  py-16`}>
      <div className="w-full mx-auto">
        <h2 className={`font-sans font-bold text-gray-50 text-center ${screenWidth < 400 ? "text-3xl" : "text-4xl"} mb-4 transition-opacity ease-in-out duration-[1500ms]`}>Empieza ya.</h2>
        <h3 className={`text-gray-300 font-sans ${screenWidth < 400 ? "text-2xl" : "text-3xl"} font-bold text-center mb-6 transition-opacity ease-in-out duration-[1500ms]`}>Haz que tus ventas suban gracias al trabajo organizado.</h3>
      </div>
      <div className={`flex ${screenWidth < 900 ? "flex-col gap-8" : "flex-row"} justify-center items-center mx-auto relative overflow-x-visible overflow-y-clip py-16 w-full`}>
        {/* left card */}
        <div
          ref={leftCard}
          className={`${cardLeftVisible && screenWidth < 900 ? "w-full border px-4" : cardLeftVisible && screenWidth >= 900 ? "w-1/3 border border-r-0 rounded-tr-none rounded-br-none px-8" : "w-0 border-none px-8"}  py-6 transition-all ease-in-out duration-[1500ms] rounded-3xl border-slate-100 border-opacity-30 h-[700px] flex flex-col justify-start items-center`}
        >
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
              <Icon icon="mdi:tick-circle-outline" className="text-slate-50 min-h-[20px] min-w-[20px]" />
              <p className="font-sans text-slate-50 text-sm">CRM personalizado para tu empresa.</p>
            </div>
            <div className={`flex flex-row items-center justify-start gap-2 ${cardLeftVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <Icon icon="mdi:tick-circle-outline" className="text-slate-50 min-h-[20px] min-w-[20px]" />
              <p className="font-sans text-slate-50 text-sm">Base de datos hasta 15 inmuebles.</p>
            </div>
            <div className={`flex w-full flex-row items-center justify-start gap-2 ${cardLeftVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <Icon icon="mdi:tick-circle-outline" className="text-slate-50 min-h-[20px] min-w-[20px]" />
              <p className="font-sans text-slate-50 text-sm">Registro de 1 usuario administrador.</p>
            </div>
            <div className={`flex flex-row items-center justify-start gap-2 ${cardLeftVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <Icon icon="mdi:tick-circle-outline" className="text-slate-50 min-h-[20px] min-w-[20px]" />
              <p className="font-sans text-slate-50 text-sm">Geolocalización de 1 área en el mapa.</p>
            </div>
          </div>
          <div className={`w-full flex flex-row justify-center items-center ${cardLeftVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
            <button className="py-2 px-4 bg-slate-200 text-black font-sans font-semibold rounded-xl md:hover:bg-white">Prueba gratuita</button>
          </div>
        </div>

        {/* center card */}
        <div
          ref={centerCard}
          className={`rounded-3xl border border-slate-100 py-6  border-opacity-30 ${
            cardCenterVisible && screenWidth < 900 ? "w-full h-[800px] opacity-100 px-4" : cardCenterVisible && screenWidth >= 900 ? "w-[40%] h-[800px] px-8" : !cardCenterVisible && screenWidth < 900 ? "w-0 h-[950px] opacity-0" : "w-[100%] h-[950px] px-8"
          } transition-all ease-in-out duration-[1500ms] relative bg-black bg-opacity-90 z-[30] flex flex-col justify-start items-center`}
        >
          <div className="w-full min-h-[220px] border-b border-slate-100 border-opacity-25 flex flex-col justify-around items-start">
            <div className={`${cardCenterVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out w-full flex flex-row items-center justify-between`}>
              <div className="flex flex-col w-full justify-start items-start">
                <h4 className={`text-slate-50 font-sans text-xl font-semibold`}>Plan PRO</h4>
                <h4 className={`text-gray-400 font-sans text-base font-semibold`}>Agencias profesionales.</h4>
              </div>
              <Icon icon="bitcoin-icons:verify-outline" className="text-blue-400 h-[5rem] w-[5rem] -mr-[10px]" />
            </div>
            <div className={`flex flex-col h-auto w-full justify-start items-center gap-0 pb-10 ${cardCenterVisible ? "opacity-100 delay-[500ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <div className="flex flex-row h-auto w-full justify-start items-center gap-4">
                <h2 className="text-[4rem] font-bold font-sans text-white">54€</h2>
                <h4 className="text-slate-50 font-sans text-xl font-normal">/ mes</h4>
              </div>
            </div>
          </div>
          <div className={`h-full w-full flex flex-col justify-start items-start mt-10 gap-4`}>
            <div className={`flex flex-row items-center justify-start gap-2 ${cardCenterVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <Icon icon="mdi:tick-circle-outline" className="text-slate-50 min-h-[20px] min-w-[20px]" />
              <p className="font-sans text-slate-50 text-sm">CRM personalizado para tu empresa.</p>
            </div>
            <div className={`flex flex-row items-center justify-start gap-2 ${cardCenterVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <Icon icon="mdi:tick-circle-outline" className="text-slate-50 min-h-[20px] min-w-[20px]" />
              <p className="font-sans text-slate-50 text-sm">Base de datos hasta 10.000 inmuebles.</p>
            </div>
            <div className={`flex w-full flex-row items-center justify-start gap-2 ${cardCenterVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <Icon icon="mdi:tick-circle-outline" className="text-slate-50 min-h-[20px] min-w-[20px]" />
              <p className="font-sans text-slate-50 text-sm">Registro de 15 usuarios y 3 administradores.</p>
            </div>
            <div className={`flex flex-row items-center justify-start gap-2 ${cardCenterVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <Icon icon="mdi:tick-circle-outline" className="text-slate-50 min-h-[20px] min-w-[20px]" />
              <p className="font-sans text-slate-50 text-sm">Geolocalización de 15 áreas en el mapa.</p>
            </div>
            <div className={`flex flex-row items-center justify-start gap-2 ${cardCenterVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <Icon icon="mdi:tick-circle-outline" className="text-slate-50 min-h-[20px] min-w-[20px]" />
              <p className="font-sans text-slate-50 text-sm">Calendario de tareas y estadísticas de objetivos.</p>
            </div>
            <div className={`flex flex-row items-center justify-start gap-2 ${cardCenterVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <Icon icon="mdi:tick-circle-outline" className="text-slate-50 min-h-[20px] min-w-[20px]" />
              <p className="font-sans text-slate-50 text-sm">Cartera de clientes hasta 200 clientes.</p>
            </div>
            <div className={`flex flex-row items-center justify-start gap-2 ${cardCenterVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <Icon icon="mdi:tick-circle-outline" className="text-slate-50 min-h-[20px] min-w-[20px]" />
              <p className="font-sans text-slate-50 text-sm">Copia de seguridad semanal.</p>
            </div>
            <div className={`flex flex-row items-center justify-start gap-2 ${cardCenterVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <Icon icon="mdi:tick-circle-outline" className="text-slate-50 min-h-[20px] min-w-[20px]" />
              <p className="font-sans text-slate-50 text-sm">Soporte y asistencia via e-mail.</p>
            </div>
          </div>
          <div className={`w-full flex flex-row justify-center items-center ${cardCenterVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
            <button className="py-2 px-4 bg-slate-200 text-black font-sans font-semibold rounded-xl md:hover:bg-white">Elegir PRO</button>
          </div>
        </div>

        {/* right card */}
        <div
          ref={rightCard}
          className={`${cardRightVisible && screenWidth < 900 ? "w-full border px-4" : cardRightVisible && screenWidth >= 900 ? "w-1/3 border border-l-0 rounded-tl-none rounded-bl-none px-8" : "w-0 border-none px-8"}  py-6 transition-all ease-in-out duration-[1500ms] rounded-3xl border-slate-100 border-opacity-30 h-[700px] flex flex-col justify-start items-center`}
        >
          <div className="w-full min-h-[250px] border-b border-slate-100 border-opacity-25 flex flex-col justify-around items-start">
            <div className={`${cardRightVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out flex flex-row justify-between items-center w-full`}>
              <div>
                <h4 className={`text-slate-50 font-sans text-xl font-semibold`}>Plan MEDIUM</h4>
                <h4 className={`text-gray-400 font-sans text-base font-semibold`}>Para empresas pequeñas</h4>
              </div>
              <div className="-mr-[20px]">
                <Icon icon="bitcoin-icons:verify-outline" className="text-slate-400 h-[4rem] w-[4rem]" />
              </div>
            </div>
            <div className={`flex flex-col h-auto w-full justify-start items-center gap-0 pb-10 ${cardRightVisible ? "opacity-100 delay-[500ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <div className="flex flex-row h-auto w-full justify-start items-center gap-4">
                <h2 className="text-[4rem] font-bold font-sans text-white">24€</h2>
                <h4 className="text-slate-50 font-sans text-xl font-normal">/ mes</h4>
              </div>
            </div>
          </div>
          <div className={`h-full w-full flex flex-col justify-start items-start mt-10 gap-4`}>
            <div className={`flex flex-row items-center justify-start gap-2 ${cardRightVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <Icon icon="mdi:tick-circle-outline" className="text-slate-50 min-h-[20px] min-w-[20px]" />
              <p className="font-sans text-slate-50 text-sm">CRM personalizado para tu empresa.</p>
            </div>
            <div className={`flex flex-row items-center justify-start gap-2 ${cardRightVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <Icon icon="mdi:tick-circle-outline" className="text-slate-50 min-h-[20px] min-w-[20px]" />
              <p className="font-sans text-slate-50 text-sm">Base de datos hasta 300 inmuebles.</p>
            </div>
            <div className={`flex w-full flex-row items-center justify-start gap-2 ${cardRightVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <Icon icon="mdi:tick-circle-outline" className="text-slate-50 min-h-[20px] min-w-[20px]" />
              <p className="font-sans text-slate-50 text-sm">Registro de 3 usuarios y 1 administrador.</p>
            </div>
            <div className={`flex flex-row items-center justify-start gap-2 ${cardRightVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <Icon icon="mdi:tick-circle-outline" className="text-slate-50 min-h-[20px] min-w-[20px]" />
              <p className="font-sans text-slate-50 text-sm">Geolocalización de 2 áreas en el mapa.</p>
            </div>
            <div className={`flex flex-row items-center justify-start gap-2 ${cardRightVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
              <Icon icon="mdi:tick-circle-outline" className="text-slate-50 min-h-[20px] min-w-[20px]" />
              <p className="font-sans text-slate-50 text-sm">Calendario de tareas y estadísticas de objetivos.</p>
            </div>
          </div>
          <div className={`w-full flex flex-row justify-center items-center ${cardRightVisible ? "opacity-100 delay-[1000ms] duration-[1500ms]" : "opacity-0 delay-0 duration-0"} transition-opacity ease-in-out`}>
            <button className="py-2 px-4 bg-slate-200 text-black font-sans font-semibold rounded-xl md:hover:bg-white">Prueba gratuita</button>
          </div>
        </div>

        <div
          className={`${
            cardCenterVisible && screenWidth < 900 ? "opacity-100 w-[105%] duration-[1500ms]" : screenWidth < 900 ? "opacity-0 w-0 duration-[0ms]" : cardCenterVisible && screenWidth >= 900 ? "w-[39.25%] opacity-100 duration-[1500ms]" : "opacity-0 w-[80%] duration-[0ms]"
          } transition-all ease-in-out   h-[820px] bg-blue-300 bg-opacity-30 blur-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[10]`}
        ></div>
      </div>
      <div className="w-fit h-auto flex flex-row items-center justify-center group hover:border-slate-100 border border-black rounded-xl py-2 px-3 hover:cursor-pointer transition-all ease-in-out duration-[600ms]">
        <Icon icon="material-symbols-light:cards-star" className="text-slate-100 w-[2.5rem] h-[2.5rem] mr-2 group-hover:text-white group-hover:cursor-pointer" />
        <p className="text-slate-100 font-sans text-sm font-medium group-hover:text-white group-hover:cursor-pointer">Comparar planes</p>
        <Icon icon="si:arrow-right-duotone" className="text-slate-100 w-[2rem] h-[2rem] group-hover:text-white group-hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default IndexComponent5;
