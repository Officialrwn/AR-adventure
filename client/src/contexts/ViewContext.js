import { createContext, useContext, useState } from "react";

const ViewContext = createContext();
export const useView = () => useContext(ViewContext);

export const ViewProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewingQuests, setViewingQuests] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const value = {
    menuOpen,
    setMenuOpen,
    viewingQuests,
    setViewingQuests,
    selectedCategory,
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
  };

  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
};
