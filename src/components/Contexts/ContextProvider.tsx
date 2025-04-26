import { useState, createContext, ReactNode } from "react";

// Define the type for the context
interface MyContextType {
  favopen: boolean;
  setFavopen: React.Dispatch<React.SetStateAction<boolean>>;
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with the correct type
const MyContext = createContext<MyContextType | undefined>(undefined);

function ContextProvider({ children }: { children: ReactNode }) {
  const [favopen, setFavopen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <MyContext.Provider
      value={{ favopen, setFavopen, authenticated, setAuthenticated }}
    >
      {children}
    </MyContext.Provider>
  );
}

export { ContextProvider, MyContext };
