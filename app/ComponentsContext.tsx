// app/ComponentsContext.tsx
import React, { createContext, useContext, useReducer } from "react";

// Define the context types
interface State {
  message: string;
  digit: number;
}

// Action types
type Action = { type: "SET_MESSAGE"; payload: string } | { type: "INCREMENT" } | { type: "DECREMENT" };

// Define the intial stae
const initialState: State = {
  message: "",
  digit: 0,
};

// Reducer Function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_MESSAGE": {
      return { ...state, message: action.payload };
    }
    case "INCREMENT":
      return { ...state, digit: state.digit + 1 };
    case "DECREMENT":
      return { ...state, digit: Math.max(0, state.digit - 1) };
  }
};

// Create the context
const ComponentsContext = createContext<{ state: State; dispatch: React.Dispatch<Action> }>({ state: initialState, dispatch: () => null });

// Create the provider
export const ComponentsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // --- DEFINE VARIABLES AND STATES ---
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ComponentsContext.Provider value={{ state, dispatch }}>{children}</ComponentsContext.Provider>;
};

// Create custom hook to ease consumption
export const useComponentsContext = () => {
  const context = useContext(ComponentsContext);
  if (!context) {
    throw new Error("useComponentsContext has to be used within a ComponentsContextProvider");
  }
  return context;
};
