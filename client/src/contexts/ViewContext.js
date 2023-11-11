import { createContext, useContext, useState } from "react";

const ViewContext = createContext();
export const useView = () => useContext(ViewContext);

export const ViewProvider = ({ children }) => {
  const defaultViewPort = {
    latitude: 60.17000701866055,
    longitude: 24.93737401348124,
    width: "100vw",
    height: "100vh",
    zoom: 13,
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewingQuests, setViewingQuests] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [viewport, setViewport] = useState(defaultViewPort);

  const resetQuestsView = () => {
    setSelectedCategory(null);
    setSelectedLocation(null);
  };

  const value = {
    defaultViewPort,
    menuOpen,
    setMenuOpen,
    viewingQuests,
    setViewingQuests,
    selectedCategory,
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
    activeMarker, 
    setActiveMarker,
    viewport, setViewport,
    resetQuestsView,
  };

  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
};
