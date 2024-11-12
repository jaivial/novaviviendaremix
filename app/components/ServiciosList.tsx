import React, { useState } from "react";

interface ContentItem {
  title: string;
  description: string;
}

const ServiciosList: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Productividad");

  const tabItems = ["Productividad", "Geolocalización", "Organización", "Inmuebles", "Clientes", "Asesores"];

  const contentByTab: Record<string, ContentItem[]> = {
    Productividad: [
      { title: "Gestión de Tareas", description: "Organiza y prioriza tus tareas de manera eficiente." },
      { title: "Integración de Calendario", description: "Sincroniza eventos y citas en un solo lugar." },
    ],
    Geolocalización: [
      { title: "Mapas en Tiempo Real", description: "Visualiza ubicaciones y rutas en tiempo real." },
      { title: "Análisis de Zonas", description: "Estudia la demografía y detalles de zonas específicas." },
    ],
    Organización: [
      { title: "Planes de Trabajo", description: "Crea y sigue planes de trabajo personalizados." },
      { title: "Gestión de Documentos", description: "Organiza documentos de manera rápida y segura." },
    ],
    Inmuebles: [
      { title: "Gestión de Propiedades", description: "Administra tu inventario de propiedades eficientemente." },
      { title: "Estadísticas de Mercado", description: "Consulta el estado y las tendencias del mercado inmobiliario." },
    ],
    Clientes: [
      { title: "Seguimiento de Clientes", description: "Mantén un registro detallado de tus clientes." },
      { title: "Gestión de Comunicaciones", description: "Comunica y haz seguimiento de manera efectiva." },
    ],
    Asesores: [
      { title: "Asignación de Tareas", description: "Asigna y gestiona tareas de manera eficiente." },
      { title: "Rendimiento de Asesores", description: "Evalúa el rendimiento de tus asesores." },
    ],
  };

  return (
    <div className="flex flex-col items-center p-6 z-10">
      {/* First div with heading and tabs */}
      <div className="flex flex-col items-center mb-8 w-full">
        <h3 className="text-2xl font-bold text-white mb-4">Servicios Disponibles</h3>
        <p className="text-white">selected tab: {selectedTab}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tabItems.map((tab) => (
          <button key={tab} onClick={() => setSelectedTab(tab)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-move duration-200 ${selectedTab === tab ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"} md:hover:bg-slate-200 md:cursor-pointer`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Second div displaying content cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {contentByTab[selectedTab].map((item, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiciosList;
