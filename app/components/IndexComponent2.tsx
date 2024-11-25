// app/components/IndexComponents2.tsx
import React from "react";
import { useScreenWidth } from "~/ScreenWidthProvider";

const IndexComponents2: React.FC = () => {
  const { screenWidth } = useScreenWidth();
  return (
    <div className={`w-full flex flex-col justify-center items-center h-auto py-12 relative pb-20 overflow-x-hidden overflow-y-clip`}>
      <h2 className={`font-sans font-bold text-gray-50 text-center ${screenWidth < 400 ? "text-3xl" : "text-4xl"} mb-4`}>Todos tus clientes.</h2>
      <h3 className={`text-gray-300 font-sans ${screenWidth < 400 ? "text-2xl" : "text-3xl"} font-bold text-center mb-6`}>En una única herramienta.</h3>

      <div className={`bg-slate-500 bg-opacity-30 backdrop-blur-lg h-auto  ${screenWidth < 1080 ? "w-[95%]" : "w-full"} max-w-[1024px] rounded-xl border border-white border-opacity-50 p-2 relative z-[10]`}>
        <div className="rounded-lg w-full h-full bg-black border border-white border-opacity-50">
          <video autoPlay loop muted playsInline className="rounded-lg">
            <source src="/clientesindex2.webm" type="video/webm" />
            Tu navegador no soporta este formato de vídeo.
          </video>
        </div>
      </div>

      <div className={`w-full h-auto flex flex-col items-center justify-center relative`}>
        {/* absolute div to create shadow like from the bottom */}
        <div className={`absolute bg-black mx-auto  h-[500px] w-[200%] z-[30] ${screenWidth < 380 ? "-top-[9rem] blur-[4rem]" : screenWidth < 420 ? "-top-[10rem] blur-[4rem]" : screenWidth < 500 ? "-top-[11rem] blur-[4rem]" : screenWidth < 650 ? "-top-[12rem] blur-[5rem]" : screenWidth < 700 ? "-top-[13rem] blur-[5rem]" : "-top-[17rem] blur-[6rem]"}`}></div>

        <div className={`flex flex-wrap flex-row max-w-[1024px]  ${screenWidth < 900 ? "items-center justify-center" : "items-start justify-between"} mt-2 z-[40] gap-10 relative ${screenWidth < 1080 ? "w-[90%]" : "w-full"}`}>
          <div className={`${screenWidth < 700 ? "w-[95%]" : screenWidth < 900 ? "w-[90%]" : "w-[30%]"} h-auto`}>
            <p className={`${screenWidth < 900 ? "text-base text-center" : " text-start text-lg"} font-sans font-medium text-gray-400`}>
              <strong className="text-white">Gestiona todos tus clientes.</strong> Visualiza, filtra, ordena y busca con rapidez para optimizar tu trabajo.
            </p>
          </div>
          <div className={`${screenWidth < 700 ? "w-[95%]" : screenWidth < 900 ? "w-[90%]" : "w-[30%]"} h-auto`}>
            <p className={`${screenWidth < 900 ? "text-base text-center" : " text-start text-lg"} font-sans font-medium text-gray-400`}>
              <strong className="text-white">Crea nuevos clientes.</strong> Con tan solo un click añade clientes a tu cartera y asigna inmuebles de tu base de datos a cada registro.
            </p>
          </div>
          <div className={`${screenWidth < 700 ? "w-[95%]" : screenWidth < 900 ? "w-[90%]" : "w-[30%]"} h-auto`}>
            <p className={`${screenWidth < 900 ? "text-base text-center" : " text-start text-lg"} font-sans font-medium text-gray-400`}>
              <strong className="text-white">Ordena tus clientes.</strong> Ordena los datos y mejora el rendimiento de tu trabajo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexComponents2;
