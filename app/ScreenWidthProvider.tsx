import React, { useContext, createContext, useState, useEffect } from "react";

// Define the screen width context type
interface ScreenWidthContextType {
  screenWidth: number;
}

// Create the context
const ScreenWidthContext = createContext<ScreenWidthContextType | undefined>(undefined);

// Create the provider
export const ScreenWidthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setScreenWidth(window.innerWidth);

    // Add the event listener to handle resize
    window.addEventListener("resize", handleResize);

    // Set the initial screen width
    setScreenWidth(window.innerWidth);

    // Define the clean-up function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <ScreenWidthContext.Provider value={{ screenWidth }}>{children}</ScreenWidthContext.Provider>;
};

// Create a custom hook for better consumption
export const useScreenWidth = () => {
  const context = useContext(ScreenWidthContext);
  if (!context) {
    throw console.error("useScreenWidth has to be within a screenWidthContextProvider");
  }
  return context;
};
