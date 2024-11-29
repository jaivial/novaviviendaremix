// app/constexproviders/DynamicServiciosPageProvider.tsx
import React, { useContext, createContext } from "react";
import { cardsInfo, CardInfo } from "~/data/cards";

// define the type of the context data
type Card = CardInfo;

// Create the context
const DynamicServiciosPageContext = createContext<Card | undefined>(undefined);

// Create the provider
export const DynamicServiciosPageContextProvider: React.FC<{ card: Card; children: React.ReactNode }> = ({ card, children }) => {
  return <DynamicServiciosPageContext.Provider value={card}>{children}</DynamicServiciosPageContext.Provider>;
};

// Create custom hook for easy consumption
export const useDynamicsServiciosPage = (): Card => {
  const context = useContext(DynamicServiciosPageContext);
  if (!context) {
    throw new Error("useDynamicServiciosPage must be used within DynamicServiiosPageContext.Provider");
  }
  return context;
};
