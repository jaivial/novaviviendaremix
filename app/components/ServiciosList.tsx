// app/components/ServiciosList.tsx
import React from "react";
import { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";

// --- INTERFACES ---
// Props interface
interface ServiciosListProps {
  screenWidth: number;
}
// Interface of button label
interface ButtonLabel {
  label: string;
}
// Interface of cards
interface CardInfo {
  id: number;
  title: string;
  bgColor: string;
  bgColorHover: string;
  borderColor: string;
  description: string;
  image: string;
  icon: string;
  selectedTab: string;
}

// Declare objects
const buttonsLabels: ButtonLabel[] = [{ label: "Productividad" }, { label: "Gestión" }, { label: "Organización" }, { label: "Clientes" }, { label: "Inmuebles" }];

const cardsInfo: CardInfo[] = [
  {
    id: 1,
    title: "Calendario",
    bgColor: "bg-blue-900",
    bgColorHover: "bg-blue-700",
    borderColor: "border-blue-950",
    description: "Un calendario para organizar tu agenda y completar tus objetivos diarios.",
    image: "/calendario.jpg",
    icon: "solar:calendar-linear",
    selectedTab: "Productividad",
  },
  {
    id: 2,
    title: "Lista de tareas",
    bgColor: "bg-blue-700",
    bgColorHover: "bg-blue-500",
    borderColor: "border-blue-950",
    description: "Planifica tu actividad para estar siempre actualizado y conseguir tus metas fácilmente.",
    image: "/listatareas.jpg",
    icon: "fluent:task-list-20-regular",
    selectedTab: "Productividad",
  },
  {
    id: 3,
    title: "Crea Tareas",
    bgColor: "bg-blue-500",
    bgColorHover: "bg-blue-300",
    borderColor: "border-blue-950",
    description: "Crea tareas personalizadas y asígnalas al calendario personal de cada asesor.",
    image: "/tareas.jpg",
    icon: "ic:round-add-task",
    selectedTab: "Productividad",
  },
  {
    id: 4,
    title: "Estadísticas",
    bgColor: "bg-blue-300",
    bgColorHover: "bg-blue-100",
    borderColor: "border-blue-950",
    description: "Visualiza tu progreso, mantente motivado y alimenta tu ambición.",
    image: "/estadisticas.jpg",
    icon: "oui:stats",
    selectedTab: "Productividad",
  },
  {
    id: 5,
    title: "Base de datos",
    bgColor: "bg-green-900",
    bgColorHover: "bg-green-700",
    borderColor: "border-green-950",
    description: "Organiza gestiona todos tus inmuebles en la nube, con tu base de datos personalizada.",
    image: "/gestion1.jpg",
    icon: "material-symbols:database",
    selectedTab: "Gestión",
  },
  {
    id: 6,
    title: "Agrupa inmuebles",
    bgColor: "bg-green-700",
    bgColorHover: "bg-green-500",
    borderColor: "border-green-950",
    description: "Crea edificios o escaleras y agrupa tus inmuebles dentro de estos en un par de clicks.",
    image: "/agrupar.jpg",
    icon: "icon-park-outline:group",
    selectedTab: "Gestión",
  },
  {
    id: 7,
    title: "Crea inmuebles",
    bgColor: "bg-green-500",
    bgColorHover: "bg-green-300",
    borderColor: "border-green-950",
    description: "Añade nuevos inmuebles a tu base de datos, asigna características y su geolocalización.",
    image: "/anyadeinmueble.jpg",
    icon: "icon-park-outline:group",
    selectedTab: "Gestión",
  },
  {
    id: 8,
    title: "Filtra",
    bgColor: "bg-green-500",
    bgColorHover: "bg-green-300",
    borderColor: "border-green-950",
    description: "Filtra los resultados de búsqueda para un trabajo ágil y eficiente.",
    image: "/filtros.jpg",
    icon: "mdi:filter-outline",
    selectedTab: "Gestión",
  },
  {
    id: 9,
    title: "Analiza",
    bgColor: "bg-green-300",
    bgColorHover: "bg-green-100",
    borderColor: "border-green-950",
    description: "Analiza en tiempo real los resultados de tu búsqueda y optimiza tu trabajo.",
    image: "/analiza.jpg",
    icon: "ion:stats-chart",
    selectedTab: "Gestión",
  },
];

const ServiciosList: React.FC<ServiciosListProps> = ({ screenWidth }) => {
  // --- STATES AND VARIABLES ---
  const [selectedTab, setSelectedTab] = useState<String>("Gestión");
  const [hoveredCardId, setHoveredCardId] = useState<Number | null>(null);

  return (
    <div className={`w-full flex flex-col justify-center items-center z-[10] pb-20`}>
      <div className="w-[95%] h-auto flex flex-row justify-between items-center">
        <div className="w-1/2 flex-row items-center justify-center">
          <div className="h-fit w-fit flex flex-col justify-center items-start mx-auto gap-3">
            <h2 className="text-white font-sans text-3xl font-bold">Una función para cada necesidad</h2>
            <h3 className="text-gray-600 font-sans text-2xl font-bold">Todas las soluciones que necesitas en una aplicación</h3>
          </div>
        </div>
        <div className="w-1/2 z-[90] flex flex-row items-end justify-center">
          <Tabs variant="bordered" size="lg" selectedKey={String(selectedTab)} onSelectionChange={(key) => setSelectedTab(String(key))}>
            {buttonsLabels.map((buttons) => (
              <Tab key={buttons.label} title={buttons.label} className="text-red-500" />
            ))}
          </Tabs>
        </div>
      </div>
      <div className="relative w-full h-auto">
        {/* right scroll shadow */}
        <div className="bg-gradient-to-r from-black to bg-transparent absolute top-0 left-0 w-1/4 h-full z-[60] pointer-events-none"></div>
        {/* left scroll shadow */}
        <div className="bg-gradient-to-l from-black to bg-transparent absolute top-0 right-0 w-1/4 h-full z-[60] pointer-events-none"></div>
        <div className="pl-[20rem] pr-[30rem] flex flex-row gap-20 mt-12 overflow-scroll max-w-[100%] relative">
          {cardsInfo.map(
            (card) =>
              card.selectedTab === selectedTab && (
                <>
                  <div
                    className={`h-[700px] min-w-[450px] max-w-[450px] ${hoveredCardId === card.id ? card.bgColorHover : card.bgColor} flex flex-col justify-center items-center rounded-3xl border-[0.5px] border-gray-400 border-opacity-70 p-6 bg-opacity-30 backdrop-blur-md md:hover:cursor-pointer z-[50]`}
                    style={{
                      ...(hoveredCardId === card.id ? Styles.mouseIn : Styles.mouseOut),
                      transition: "transform 0.4s ease-in-out", // Smooth transition effect
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
