// app/components/ServiciosInfoSectionOne.tsx
import React from "react";
import { CardInfo } from "~/data/cards";
import { Icon } from "@iconify/react";
import { Link } from "@remix-run/react";

const ServiciosInfoSectionOne: React.FC<{ card: CardInfo; screenWidth: number }> = ({ card, screenWidth }) => {
  return (
    <>
      <div className={`w-[95%] h-[500px] flex flex-row justify-center items-center relative mx-auto`}>
        {/* Blurred halo on top of the screen */}
        <div className="h-[15rem] w-[45rem] bg-blue-200 blur-[15rem] rounded-full absolute -top-[15rem]"></div>
        {/* Container of the selected card info */}
        <div className={`${screenWidth < 830 ? "flex-col justify-center items-center gap-4 w-[95%]" : screenWidth < 1024 ? " flex-row items-center justify-between" : "w-full flex-row items-center justify-between"} max-w-[1024px] rounded-xl flex h-auto absolute bottom-[200px]`}>
          {/* Left div for logo and summary of service */}
          <div className={`w-fit flex flex-row h-auto  ${screenWidth < 420 ? "flex-col justify-center items-center gap-6" : "flex-row justify-start items-start gap-10"}`}>
            <div className="max-w-[6rem] max-h-[6rem] min-h-[6rem] min-w-[6rem] rounded-3xl bg-gradient-to-br from-slate-800 to bg-slate-900 border-[0.8px] border-slate-700 flex justify-center items-center">
              <Icon icon={card.icon} className="w-full h-auto text-white p-2" />
            </div>
            <div className={`h-auto w-full flex flex-col justify-start ${screenWidth < 420 ? "items-center" : "items-start"} gap-3`}>
              <div className={`flex flex-col ${screenWidth < 420 ? "items-center w-[80%]" : "items-start w-fit"}`}>
                <h3 className="text-white font-bold font-sans text-lg">{card.title}</h3>
                <h4 className={`text-gray-300 font-medium font-sans text-sm ${screenWidth < 420 ? "text-center w-full" : screenWidth < 1024 ? "w-[90%]" : "w-full"}`}>{card.description}</h4>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-row items-center gap-2">
                  <Icon icon="material-symbols-light:folder-open-sharp" className="text-white text-lg" />
                  <p className="text-white font-thin text-base">{card.selectedTab}</p>
                </div>
                <div>
                  <Icon icon="fluent-mdl2:separator" className="text-white text-2xl" />
                </div>
                <div className="flex flex-row items-center gap-2">
                  <Icon icon="mdi:clock" className="text-white text-xl" />
                  <p className="text-white font-thin text-base">{card.readTime}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right button for button to advertise 'hook ad' */}
          <Link to={`/precios`}>
            <button className="rounded-xl bg-slate-200 md:hover:bg-white md:hover:px-4 md:hover:py-3 font-medium text-base md:hover:text-lg border border-black px-3 py-2 text-black font-sans transition-all ease-soft-spring duration-[1000ms]">Empezar ahora</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiciosInfoSectionOne;
