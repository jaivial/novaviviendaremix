// app/ScreenWidthProvider.tsx

import React, { useState, useContext, createContext, useEffect } from "react";

// --- INTERFACE ---
// Define the types of the context
interface ScreenWidthContextType {
  screenWidth: number;
}

// Create the context
const ScreenWidthContext = createContext<ScreenWidthContextType | undefined>(undefined);

// Create the provider
export const ScreenWidthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

  return <ScreenWidthContext.Provider value={{ screenWidth }}>{children}</ScreenWidthContext.Provider>;
};

// --- CUSTOM HOOK ---
export const useScreenWidth = () => {
  const context = useContext(ScreenWidthContext);
  if (!context) {
    throw new Error("useScreenWidth must be used within a ScreenWidthContext Provider");
  }
  return context;
};
