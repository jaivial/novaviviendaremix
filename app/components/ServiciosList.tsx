// app/components/ServiciosList.tsx
import React from "react";
import { useState, useEffect } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useScreenWidth } from "~/ScreenWidthProvider";

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
const buttonsLabels: ButtonLabel[] = [{ label: "Productividad" }, { label: "Gestión" }, { label: "Geolocalización" }, { label: "Clientes" }, { label: "Inmuebles" }];

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
    icon: "bi:house-add-fill",
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
  {
    id: 10,
    title: "Mapa",
    bgColor: "bg-red-900",
    bgColorHover: "bg-red-700",
    borderColor: "border-red-950",
    description: "Observa tus propiedades, gestiona zona, asigna asesores y ten el control total.",
    image: "/mapa.jpg",
    icon: "solar:map-linear",
    selectedTab: "Geolocalización",
  },
  {
    id: 11,
    title: "Crea zonas",
    bgColor: "bg-red-700",
    bgColorHover: "bg-red-500",
    borderColor: "border-red-950",
    description: "Dibuja una zona en el mapa y asigna automáticamente todos los inmuebles.",
    image: "/creazona.jpg",
    icon: "codicon:git-pull-request-create",
    selectedTab: "Geolocalización",
  },
  {
    id: 12,
    title: "Edita zonas",
    bgColor: "bg-red-500",
    bgColorHover: "bg-red-300",
    borderColor: "border-red-950",
    description: "Edita las coordenadas de tus zonas y reasigna automáticamente tus inmuebles.",
    image: "/editazonas.jpg",
    icon: "material-symbols-light:rebase-edit",
    selectedTab: "Geolocalización",
  },
  {
    id: 13,
    title: "Optimizado",
    bgColor: "bg-red-300",
    bgColorHover: "bg-red-100",
    borderColor: "border-red-950",
    description: "Geolocalización por coordenadas automática de cada inmueble.",
    image: "/automatico.jpg",
    icon: "ic:outline-auto-fix-high",
    selectedTab: "Geolocalización",
  },
  {
    id: 14,
    title: "Cartera de clientes",
    bgColor: "bg-yellow-900",
    bgColorHover: "bg-yellow-700",
    borderColor: "border-yellow-950",
    description: "Gestiona de forma organizada, intutitiva y profesional tu cartera de clientes.",
    image: "/carteraclientes.jpg",
    icon: "ion:people",
    selectedTab: "Clientes",
  },
  {
    id: 15,
    title: "Crea clientes",
    bgColor: "bg-yellow-700",
    bgColorHover: "bg-yellow-500",
    borderColor: "border-yellow-950",
    description: "Añade clientes con información detallada y asócialos a inmuebles.",
    image: "/nuevocliente.jpg",
    icon: "icon-park-solid:people-plus-one",
    selectedTab: "Clientes",
  },
  {
    id: 16,
    title: "Compradores",
    bgColor: "bg-yellow-500",
    bgColorHover: "bg-yellow-300",
    borderColor: "border-yellow-950",
    description: "Gestiona y visualiza con fácilidad los clientes que quieren comprar.",
    image: "/pedidos.jpg",
    icon: "material-symbols:sell",
    selectedTab: "Clientes",
  },
  {
    id: 17,
    title: "Información",
    bgColor: "bg-yellow-300",
    bgColorHover: "bg-yellow-100",
    borderColor: "border-yellow-950",
    description: "Visualiza toda la información de tus clientes y los inmuebles asociados.",
    image: "/infodetalle.jpg",
    icon: "mdi:information",
    selectedTab: "Clientes",
  },
  {
    id: 18,
    title: "Inmuebles",
    bgColor: "bg-pink-900",
    bgColorHover: "bg-pink-700",
    borderColor: "border-pink-950",
    description: "Información completa, detallada e individualizada de cada uno de tus inmuebles.",
    image: "/inmueble1.jpg",
    icon: "bi:house-fill",
    selectedTab: "Inmuebles",
  },
  {
    id: 19,
    title: "Asocia Clientes",
    bgColor: "bg-pink-700",
    bgColorHover: "bg-pink-500",
    borderColor: "border-pink-950",
    description: "Asocia clientes con tus inmuebles y asigna un rol según su relación con la propiedad.",
    image: "/inmueble2.jpg",
    icon: "fa-solid:link",
    selectedTab: "Inmuebles",
  },
  {
    id: 20,
    title: "Vende",
    bgColor: "bg-pink-500",
    bgColorHover: "bg-pink-300",
    borderColor: "border-pink-950",
    description: "Gestiona tu estrategia, sigue los pasos de venta y visualiza datos de la transacción.",
    image: "/inmueble3.jpg",
    icon: "tdesign:money",
    selectedTab: "Inmuebles",
  },
  {
    id: 21,
    title: "Actividad",
    bgColor: "bg-pink-400",
    bgColorHover: "bg-pink-300",
    borderColor: "border-pink-950",
    description: "Censa la actividad de cada inmueble para no perder ni una oportunidad.",
    image: "/inmueble4.jpg",
    icon: "fluent:chat-16-regular",
    selectedTab: "Inmuebles",
  },
  {
    id: 22,
    title: "Gestiona",
    bgColor: "bg-pink-300",
    bgColorHover: "bg-pink-100",
    borderColor: "border-pink-950",
    description: "Procesa los estados de venta de forma completa, profesional y personalizada para cada inmueble.",
    image: "/inmueble5.jpg",
    icon: "mingcute:settings-6-fill",
    selectedTab: "Inmuebles",
  },
];

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
