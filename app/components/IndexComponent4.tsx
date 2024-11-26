// app/components/IndexComponent3.tsx
import { section } from "framer-motion/client";
import React, { useState, useEffect, useRef } from "react";
import { useScreenWidth } from "~/ScreenWidthProvider";

const IndexComponent4: React.FC = () => {
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
    <div ref={sectionRef} className={`max-w-[1100px]  ${screenWidth < 1100 ? "w-[95%]" : "w-full"} h-auto flex ${screenWidth < 900 ? "pt-20" : "pt-40"} flex-col justify-center items-center mx-auto relative overflow-x-hidden overflow-y-clip`}>
      <div ref={sectionRef} className={`w-full h-auto flex flex-col justify-center items-center`}>
        <div className="w-full h-auto z-[40]">
          <h2 className={`font-sans font-bold text-gray-50 text-center ${screenWidth < 400 ? "text-3xl" : "text-4xl"} mb-4 ${isH2Visible ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-[1500ms]`}>Organiza por zonas.</h2>
          <h3 className={`text-gray-300 font-sans ${screenWidth < 400 ? "text-2xl" : "text-3xl"} font-bold text-center mb-6 ${isH3Visible ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-[1500ms]`}>Crea áreas en el mapa y asigna inmuebles automáticamente.</h3>

          <p className={`${screenWidth < 900 ? "text-base" : " text-lg"} w-[60%] mx-auto font-sans font-medium text-gray-400 text-center ${isPVisible ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-[1500ms]`}>
            <strong className="text-white">Crea nuevos clientes.</strong> Con tan solo un click añade clientes a tu cartera y asigna inmuebles de tu base de datos a cada registro.
          </p>
        </div>
        <div className="relative w-full h-auto flex flex-row justify-center items-center">
          {/* Gradient Overlay */}
          <div className="absolute bg-gradient-to-b from-transparent to-black top-0 left-0 w-full h-full z-[30]"></div>

          {/*  */}
          <div className={`bg-slate-500 bg-opacity-30 flex flex-col justify-center items-center backdrop-blur-lg h-auto ${isImgVisible ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-[1500ms]  ${screenWidth < 1080 ? "w-[95%]" : "w-full"} max-w-[1024px] rounded-xl border border-white border-opacity-50 mt-10 p-2 relative z-[10]`}>
            <div className="rounded-lg w-full h-full bg-black border border-white border-opacity-50">
              <video autoPlay loop muted playsInline className="rounded-lg">
                <source src="/indexcomponent4.webm" type="video/webm" />
                Tu navegador no soporta este formato de vídeo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexComponent4;
