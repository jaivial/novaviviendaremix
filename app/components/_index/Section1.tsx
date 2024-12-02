import React from "react";

export const Section1: React.FC<{ sectionRef: React.RefObject<HTMLDivElement>; screenWidth: number; isH2Visible: boolean; isH3Visible: boolean; isVideoContainerVisible: boolean }> = ({ sectionRef, screenWidth, isH2Visible, isH3Visible, isVideoContainerVisible }) => {
  return (
    <div ref={sectionRef} className={`bg-black h-auto flex flex-col justify-start items-center gap-1 indexinfocontainer1 pb-20 transition-opacity duration-[1500ms] ease-in-out`}>
      <h2 className={`${isH2Visible ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-50 font-sans ${screenWidth < 400 ? "text-3xl" : "text-4xl"} font-bold text-center`}>Controla tus inmuebles.</h2>
      <h3 className={`${isH3Visible ? "opacity-70" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-300 font-sans ${screenWidth < 400 ? "text-2xl" : "text-3xl"} font-bold text-center`}>Visualiza los datos.</h3>
      <div className={`bg-gray-700 h-auto relative z-10 ${screenWidth < 1280 ? "w-[95%]" : " w-[1200px]"} rounded-3xl border border-gray-800 bg-opacity-0 mt-4 ${isVideoContainerVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out`}>
        <div className="relative z-[10] w-full h-full">
          <video autoPlay loop muted playsInline className="w-full z-10 h-full object-cover p-2 rounded-3xl opacity-100">
            <source src="/video1.webm" type="video/webm" className="border border-gray-600 " />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute top-1/2 left-1/2 w-[103%] h-[103%] bg-white opacity-30 rounded-3xl blur-2xl transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
      </div>
      <p className={`${isVideoContainerVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-400 font-sans font-medium pt-4 ${screenWidth < 400 ? "text-lg" : "text-xl"}  ${screenWidth <= 1000 ? "w-[90%]" : screenWidth <= 1500 ? "w-1/2" : "w-1/3"} text-center`}>
        <strong className="text-white">Busca tus inmuebles.</strong> Filtra las propiedades y analiza qué está ocurriendo en tu estrategia de venta.
      </p>
    </div>
  );
};

export default Section1;
