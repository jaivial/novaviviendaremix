// app/ComponentsContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";

// Define the context types
interface ComponentsContextType {
  message: string;
  digit: number;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setDigit: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context
const ComponentsContext = createContext<ComponentsContextType | undefined>(undefined);

// Create the provider
export const ComponentsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // --- DEFINE VARIABLES AND STATES ---
  const [message, setMessage] = useState<string>("Hi there");
  const [digit, setDigit] = useState<number>(0);

  return <ComponentsContext.Provider value={{ message, setMessage, digit, setDigit }}>{children}</ComponentsContext.Provider>;
};

// Create custom hook to ease consumption
export const useComponentsContext = () => {
  const context = useContext(ComponentsContext);
  if (!context) {
    throw new Error("useComponentsContext has to be used within a ComponentsContextProvider");
  }
  return context;
};
