// app/serviciosPagecontainer.tsx
import React from "react";
import { useDynamicsServiciosPage } from "~/contextproviders/DynamicServiciosPageProvider";
import Nav from "./Nav";
import ServiciosInfoSectionOne from "./ServiciosInfoSectionOne";

// Feature component that is going to fetch data if needed and pass them to UI components;
const ServiciosPageContainer: React.FC = () => {
  const { card, screenWidth } = useDynamicsServiciosPage();

  return (
    <div className="overflow-x-hidden bg-black">
      <Nav />
      <ServiciosInfoSectionOne card={card} screenWidth={screenWidth} />
    </div>
  );
};

export default ServiciosPageContainer;
