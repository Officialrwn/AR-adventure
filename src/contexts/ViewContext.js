import { createContext, useContext, useEffect, useState } from "react";

const ViewContext = createContext();
export const useView = () => useContext(ViewContext);

export const ViewProvider = ({ children }) => {
  const defaultViewPort = {
    latitude: 60.17000701866055,
    longitude: 24.93737401348124,
    width: "100vw",
    height: "100vh",
    zoom: 12,
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewingQuests, setViewingQuests] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [viewport, setViewport] = useState(defaultViewPort);
  const [userLocation, setUserLocation] = useState(null);
  const [route, setRoute] = useState(null);
  const [selectedQuest, setSelectedQuest] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const resetQuestsView = () => {
    setSelectedCategory(null);
    setSelectedLocation(null);
  };

  useEffect(() => {
    if (selectedLocation) {
      setSelectedCategory("locationBound");
      setViewingQuests(true);
      setMenuOpen(true);
    }
  }, [selectedLocation]);

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
    viewport,
    setViewport,
    resetQuestsView,
    userLocation,
    setUserLocation,
    setRoute,
    route,
    selectedQuest,
    setSelectedQuest,
    isPopupVisible,
    setIsPopupVisible,
    loggedIn, 
    setLoggedIn
  };

  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
};
