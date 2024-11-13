// app/components/ServiciosList.tsx
import React from "react";
import { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { Icon } from "@iconify/react";

// --- INTERFACES ---
//Declare interface for props
interface ServiciosListProps {
  screenWidth: number;
}
// Interface for buttons
interface ButtonLabels {
  label: string;
}
// Interface for cards
interface CardsInfo {
  title: string;
  icon: string;
  bgColor: string;
  hoverBgColor: string;
  description: string;
  selectedTab: string;
}

// Label elements for buttons
const buttonsLabels: ButtonLabels[] = [{ label: "Productividad" }, { label: "Organización" }, { label: "Gestión" }, { label: "Clientes" }, { label: "Inmuebles" }];

const cardsInfoServices: CardsInfo[] = [
  {
    title: "calendario",
    icon: "material-symbols:acute-outline-rounded",
    bgColor: "bg-blue-900",
    hoverBgColor: "bg-blue-500",
    description: "set you limits to a new way of getting started with real state agencies",
    selectedTab: "Productividad",
  },
  {
    title: "Buscador de inmuebles",
    icon: "material-symbols:airline-seat-recline-normal-rounded",
    bgColor: "bg-red-900",
    hoverBgColor: "bg-red-500",
    description: "this is the description for the red background of Organización so let's give it a try",
    selectedTab: "Organización",
  },
];

const ServiciosList: React.FC<ServiciosListProps> = ({ screenWidth }) => {
  const [selectedTab, setSelectedTab] = useState<string>("Productividad");
  // --- VARIABLES AND STATES ---
  return (
    <div className="flex flex-col w-[95%] h-auto bg-slate-700 mx-auto">
      <div className="flex flex-row w-full justify-center items-center bg-blue-200">
        <div className="w-1/2 bg-red-100 flex-row justify-center items-center">
          <div className="flex h-fit w-fit mx-auto flex-col justify-center items-start bg-yellow-300 gap-3">
            <h2 className="text-white font-sans font-bold text-4xl">Una función para cada necesidad</h2>
            <h3 className="text-gray-600 font-sans font-bold text-2xl">Una solución a cada necesidad</h3>
          </div>
        </div>
        <div className="flex w-1/2 flex-row justify-center items-center z-[90]">
          <Tabs variant="bordered" size="lg" onSelectionChange={(key) => setSelectedTab(String(key))}>
            {buttonsLabels.map((buttons) => (
              <Tab key={buttons.label} title={buttons.label} />
            ))}
          </Tabs>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center bg-blue-200 w-full">
        {cardsInfoServices.map(
          (card) =>
            card.selectedTab === selectedTab && (
              <>
                <div className={`w-[200px] ${card.bgColor} hover:bg-blue-500 h-[400px] flex flex-col justify-start items-start z-[90] transition-all ease-in-out duration-1000`}>
                  <Icon icon={card.icon} className="text-white text-3xl" />
                  <h2 className="text-white font-sans font-semibold">{card.title}</h2>
                  <p className="text-white font-sans text-lg font-medium">{card.description}</p>
                </div>
              </>
            )
        )}
      </div>
    </div>
  );
};

export default ServiciosList;
