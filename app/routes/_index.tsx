import type { MetaFunction } from "@remix-run/node";
import IndexContainer from "~/components/_index/IndexContainer";
import { ScreenWidthContextProvider } from "~/ScreenWidthProvider";
import { NextUIProvider } from "@nextui-org/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Nova Vivienda" },
    { name: "description", content: "Bienvenido a Nova Vivienda" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "keywords",
      content:
        "Nova Vivienda, CRM inmobiliario, gestión inmobiliaria, software inmobiliario, inmobiliaria en Valencia, CRM para inmobiliarias, gestión de propiedades, sistema de CRM, software para inmobiliarias, herramientas para inmobiliarias, gestión de clientes, agencia inmobiliaria, venta de propiedades, alquiler de propiedades, CRM para ventas, software de gestión inmobiliaria, bienes raíces en Valencia, administración de propiedades, propiedades en venta, propiedades en alquiler, software de bienes raíces, Valencia inmobiliaria, administración inmobiliaria, captación de propiedades, CRM para agentes inmobiliarios, gestión de leads inmobiliarios, marketing inmobiliario, CRM para ventas inmobiliarias, alquiler de inmuebles, venta de inmuebles, administración de alquileres, automatización inmobiliaria, CRM de bienes raíces, marketing digital para inmobiliarias, captación de clientes inmobiliarios, gestión de contactos inmobiliarios, CRM para empresas inmobiliarias, propiedades en Valencia, CRM con integración de WhatsApp, seguimiento de clientes inmobiliarios, plataforma inmobiliaria, gestión de viviendas, software para gestión de inmuebles, inmobiliarias en Valencia, asesoría inmobiliaria, CRM con gestión de clientes, administración de inmuebles, sistema de gestión inmobiliaria, CRM para alquileres, tecnología inmobiliaria, software de administración inmobiliaria",
    },
  ];
};
const Index: React.FC = () => {
  return (
    <ScreenWidthContextProvider>
      <NextUIProvider>
        <IndexContainer />
      </NextUIProvider>
    </ScreenWidthContextProvider>
  );
};

export default Index;
