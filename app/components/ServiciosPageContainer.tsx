// app/serviciosPagecontainer.tsx
import React from "react";
import { useDynamicsServiciosPage } from "~/contextproviders/DynamicServiciosPageProvider";
import Nav from "./Nav";
import ServiciosInfoSectionOne from "./ServiciosInfoSectionOne";
import { useScreenWidth } from "~/ScreenWidthProvider";

// Feature component that is going to fetch data if needed and pass them to UI components;
const ServiciosPageContainer: React.FC = () => {
  const card = useDynamicsServiciosPage();
  const { screenWidth } = useScreenWidth();

  return (
    <div className="overflow-x-hidden bg-black">
      <Nav />
      <ServiciosInfoSectionOne card={card} screenWidth={screenWidth} />
    </div>
  );
};

export default ServiciosPageContainer;
