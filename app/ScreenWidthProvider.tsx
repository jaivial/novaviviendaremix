// app/ScreenWidthProvider.tsx
import React, { useContext, createContext, useEffect, useState } from "react";

// Define the context types
interface ScreenWidthContextType {
  screenWidth: number;
}

// Create the context
const ScreenWidthContext = createContext<ScreenWidthContextType | undefined>(undefined);

// Create the provider
export const ScreenWidthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  // useEffect to track window width
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setScreenWidth(window.innerWidth);

    // Add event listener to track width
    window.addEventListener("resize", handleResize);

    // Set initial screen width
    setScreenWidth(window.innerWidth);

    // Define clean-up function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <ScreenWidthContext.Provider value={{ screenWidth }}>{children}</ScreenWidthContext.Provider>;
};

// Create custom hook to ease consumption
export const useScreenWidth = () => {
  const context = useContext(ScreenWidthContext);
  if (!context) {
    throw console.error("useScreenWidth hook has to be used within a used within a ScreenWidthContext provider");
  }
  return context;
};
