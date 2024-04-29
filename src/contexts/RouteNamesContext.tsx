// contexts/RouteNamesContext.tsx
import { Spinner } from "@/components/spinner";
import React, { createContext, useContext, ReactNode } from "react";

interface RouteNamesContextType {
  globalCustomRouteNames: Record<string, JSX.Element | string>; // Global custom route names
}

const RouteNamesContext = createContext<RouteNamesContextType>({
  globalCustomRouteNames: {}, // Default empty global custom route names
});

// Custom hook to access the route names context
export const useRouteNames = () => useContext(RouteNamesContext);

// Provider component to wrap the application and provide custom route names
export const RouteNamesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Define global custom route names here
  const globalCustomRouteNames: Record<string, JSX.Element | string> = {
    loading: <Spinner className="h-4 w-4" />,
    biography: "Biography",
    audio_recitations: "Audio Recitations",
    scientific_explanation: "Scientific Explanation",
    articles: "Articles",
    contact: "Contact",
  };

  return (
    <RouteNamesContext.Provider value={{ globalCustomRouteNames }}>
      {children}
    </RouteNamesContext.Provider>
  );
};
