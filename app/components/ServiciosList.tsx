// app/components/ServiciosList.tsx
import React from "react";
import { useState, useEffect } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useScreenWidth } from "~/ScreenWidthProvider";
import { cardsInfo } from "~/data/cards";
import { Link } from "@remix-run/react";

// --- INTERFACES ---
// Props interface
interface ServiciosListProps {
  screenWidth: number;
}
// Interface of button label
interface ButtonLabel {
  label: string;
}

// Declare objects
const buttonsLabels: ButtonLabel[] = [{ label: "Productividad" }, { label: "Gestión" }, { label: "Geolocalización" }, { label: "Clientes" }, { label: "Inmuebles" }];

const ServiciosList: React.FC = () => {
  // --- STATES AND VARIABLES ---
  const [selectedTab, setSelectedTab] = useState<String>("Productividad");
  const [hoveredCardId, setHoveredCardId] = useState<Number | null>(null);
  const [opacityArray, setOpacityArray] = useState<number[]>([]);
  const { screenWidth } = useScreenWidth();

  // --- FUNCTIONS ---
  // function to gradually change to opacity-100 on those cards.selectedTab == selectedTab
  useEffect(() => {
    // Reset opacityArray when selectedTab changes
    setOpacityArray([]);

    // Find all cards that match the selectedTab
    const matchingCards = cardsInfo.filter((card) => card.selectedTab === selectedTab);

    // Define an async function to add card IDs with a delay
    const addCardsWithDelay = async () => {
      for (let i = 0; i < matchingCards.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 300)); // Wait 200ms
        setOpacityArray((prev) => [...prev, matchingCards[i].id]);
      }
    };

    // Call the async function
    addCardsWithDelay();
  }, [selectedTab, cardsInfo]);

  //  <h2 className={`font-sans font-bold text-gray-50 text-center ${screenWidth < 400 ? "text-3xl" : "text-4xl"} mb-4 transition-opacity ease-in-out duration-[1500ms]`}>Empieza ya.</h2>
  // <h3 className={`text-gray-300 font-sans ${screenWidth < 400 ? "text-2xl" : "text-3xl"} font-bold text-center mb-6 transition-opacity ease-in-out duration-[1500ms]`}>Haz que tus ventas suban gracias al trabajo organizado.</h3>

  return (
    <div className={`w-full flex flex-col justify-center items-center z-[10] pb-20 overflow-x-hidden mt-20`}>
      <div className={`w-[95%] h-auto flex ${screenWidth < 1350 ? "flex-col gap-6" : "flex-row"} justify-between items-center`}>
        <div className={`${screenWidth < 1350 ? "w-[95%]" : "w-1/2"} flex-row items-center justify-center`}>
          <div className={`h-fit w-fit flex flex-col justify-center ${screenWidth < 1350 ? "items-center" : "items-start"}  mx-auto gap-3`}>
            <h2 className={`text-white font-sans font-bold ${screenWidth < 400 ? "text-3xl" : "text-4xl"} ${screenWidth < 1350 ? "text-center" : screenWidth < 1350 ? "text-center" : ""}`}>Una función para cada necesidad</h2>
            <h3 className={`text-gray-300 font-sans font-bold ${screenWidth < 400 ? "text-2xl" : "text-3xl"} ${screenWidth < 1350 ? "text-center" : ""}`}>Todas las soluciones que necesitas en una aplicación</h3>
          </div>
        </div>

        <div className={`w-1/2 z-[90] flex flex-row items-end justify-center`}>
          <Tabs isVertical={screenWidth < 601 ? true : false} variant="bordered" size="lg" selectedKey={String(selectedTab)} onSelectionChange={(key) => setSelectedTab(String(key))}>
            {buttonsLabels.map((buttons) => (
              <Tab key={buttons.label} title={buttons.label} className="text-red-500" />
            ))}
          </Tabs>
        </div>
      </div>
      <div className="relative w-full h-auto">
        {/* right scroll shadow */}
        <div className="bg-gradient-to-r from-black to bg-transparent absolute top-0 left-0 w-[30%] h-full z-[60] pointer-events-none"></div>
        {/* left scroll shadow */}
        <div className="bg-gradient-to-l from-black to bg-transparent absolute top-0 right-0 w-[30%] h-full z-[60] pointer-events-none"></div>
        <div className={`${screenWidth < 600 ? "pl-[5rem]" : screenWidth < 700 ? "pl-[8rem]" : screenWidth < 1350 ? "pl-[12rem]" : "pl-[20rem]"} pr-[30rem] flex flex-row gap-20 mt-12 overflow-scroll max-w-[100%] relative`}>
          {cardsInfo.map(
            (card) =>
              card.selectedTab === selectedTab && (
                <>
                  <Link to={`${card.title}`}>
                    <div
                      className={`transition-all ease-in-out duration-[2000ms] h-[700px]  ${screenWidth < 480 ? "min-w-[350px] max-w-[350px]" : "min-w-[450px] max-w-[450px]"} ${opacityArray.includes(card.id) ? "opacity-100" : "opacity-0"} ${
                        hoveredCardId === card.id ? card.bgColorHover : card.bgColor
                      } flex flex-col justify-center items-center rounded-3xl border-[0.5px] border-gray-400 border-opacity-70 p-6 bg-opacity-30 backdrop-blur-md md:hover:cursor-pointer z-[50]`}
                      style={{
                        ...(hoveredCardId === card.id ? Styles.mouseIn : Styles.mouseOut), // Smooth transition effect
                      }}
                      onMouseEnter={() => setHoveredCardId(card.id)}
                      onMouseLeave={() => setHoveredCardId(null)}
                    >
                      {/* div to create shadows effect */}
                      <div className="flex flex-row w-[98%] justify-between items-center mb-6 z-[50]">
                        <div className="flex flex-row w-full justify-start items-center gap-3">
                          <div className="p-1 bg-opacity-0 rounded-2xl relative shadow-md">
                            <div className="bg-black p-2 rounded-2xl">
                              <div className={`border-2 ${card.borderColor} p-2 rounded-xl`}>
                                <Icon icon={card.icon} className="text-[2.5rem] text-white" />
                              </div>
                            </div>
                          </div>

                          <h3 className="text-gray-100 font-sans font-medium text-2xl">{card.title}</h3>
                        </div>
                        <div className="p-3 border-2 rounded-xl bg-gradient-to-b from-slate-950 to-slate-700 opacity-50 md:hover:bg-gradient-to-t md:hover:from-slate-300 md:hover:to-white md:hover:border-white md:hover:text-black text-white transition-all ease-in-out duration-500">
                          <Icon icon="oui:arrow-right" className="text-2xl" />
                        </div>
                      </div>
                      <div className="w-[95%] mb-8">
                        <p className="text-gray-100 text-align">{card.description}</p>
                      </div>
                      <div className="w-[95%] h-[1px] bg-gray-600 mb-8"></div>
                      <div className="w-[98%] h-full bg-red-300 rounded-3xl bg-cover bg-no-repeat bg-left mx-8" style={{ backgroundImage: `url(${card.image})` }}></div>
                    </div>
                  </Link>
                </>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiciosList;

const Styles = {
  mouseIn: {
    transform: "rotate3d(0.9, -0.9, 0.1, 25deg)",
  },
  mouseOut: {
    transform: "rotate3d(0, 0, 0, 0)",
  },
};
