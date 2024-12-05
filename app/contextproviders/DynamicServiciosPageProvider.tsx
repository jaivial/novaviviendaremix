// app/constexproviders/DynamicServiciosPageProvider.tsx
import React, { useState, useEffect, useContext, createContext } from "react";
import { cardsInfo, CardInfo } from "~/data/cards";

// define the type of the context data
interface DynamicServiciosPageType {
  card: CardInfo;
  screenWidth: number;
}

// Create the context
const DynamicServiciosPageContext = createContext<DynamicServiciosPageType | undefined>(undefined);

// Create the provider
export const DynamicServiciosPageContextProvider: React.FC<{ card: CardInfo; children: React.ReactNode }> = ({ card, children }) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window === undefined) return;

    // Create function handle resize
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Set the intial screen width
    setScreenWidth(window.innerWidth);

    // Defne a clean-up function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <DynamicServiciosPageContext.Provider value={{ screenWidth, card }}>{children}</DynamicServiciosPageContext.Provider>;
};

// Create custom hook for easy consumption
export const useDynamicsServiciosPage = (): DynamicServiciosPageType => {
  const context = useContext(DynamicServiciosPageContext);
  if (!context) {
    throw new Error("useDynamicServiciosPage must be used within DynamicServiiosPageContext.Provider");
  }
  return context;
};
