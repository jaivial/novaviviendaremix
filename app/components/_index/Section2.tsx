import React from "react";

export const Section2: React.FC<{ sectionRef2: React.RefObject<HTMLDivElement>; screenWidth: number; isH2Visible2: boolean; isH3Visible2: boolean; isVideoContainerVisible2: boolean }> = ({ sectionRef2, screenWidth, isH2Visible2, isH3Visible2, isVideoContainerVisible2 }) => {
  return (
    <div ref={sectionRef2} className={`h-auto flex flex-col justify-start items-center gap-1 indexinfocontainer1 ${screenWidth < 600 ? "pb-8" : "pb-20"} transition-opacity duration-[1500ms] ease-in-out`}>
      <div className={`h-auto relative z-10 ${screenWidth < 1280 ? "w-[95%]" : "w-[95%]"} rounded-3xl ${isVideoContainerVisible2 ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out flex ${screenWidth < 600 ? "flex-col-reverse justify-center items-center mt-0" : "flex-row justify-between mt-10"} `}>
        <div className={`h-auto flex flex-col justify-center items-center ${screenWidth < 600 ? "w-full" : "w-1/2"} gap-4`}>
          <div className={`h-fit flex flex-col justify-center gap-4 ${screenWidth < 600 ? "items-center" : "items-start"}`}>
            <h2 className={`${isH2Visible2 ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-50 font-sans font-bold ${screenWidth < 600 ? "text-center text-3xl pt-4" : "text-4xl"}`}>No es cómo vendes.</h2>
            <h3 className={`${isH3Visible2 ? "opacity-70" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-300 font-sans font-bold ${screenWidth < 600 ? "text-center text-2xl px-3" : "text-3xl"}`}>Es cómo organizas tu estrategia.</h3>
            <button className={`${isH3Visible2 ? "opacity-100" : "opacity-0"} transition-opacity duration-[1500ms] ease-in-out text-gray-950 bg-gray-100 p-2 px-3 font-sans text-lg font-medium rounded-xl`}>Empieza ya</button>
          </div>
        </div>
        <div className={`relative z-[10] h-full ${screenWidth < 600 ? "w-full" : "w-1/2"}`}>
          <div className="absolute top-1/2 left-1/2 w-[103%] h-[103%] bg-white opacity-30 rounded-3xl blur-2xl transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <div className="relative z-[10]">
            <video autoPlay loop muted playsInline className="w-full z-10 h-full object-cover p-2 rounded-3xl opacity-100">
              <source src="/video2.webm" type="video/webm" className="border border-gray-600 " />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
