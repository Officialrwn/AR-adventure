import { createContext, useContext, useEffect, useState } from "react";
import questsData from "../data/questsData.json";
import heroData from "../data/hero.json";

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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [viewport, setViewport] = useState(defaultViewPort);
  const [userLocation, setUserLocation] = useState(null);
  const [route, setRoute] = useState(null);
  const [selectedQuest, setSelectedQuest] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [panelView, setPanelView] = useState(null);
  const [quests, setQuests] = useState(questsData);
  const [hero, setHero] = useState(heroData);
  const [showConfetti, setShowConfetti] = useState(false);

  const resetQuestsView = () => {
    setSelectedCategory(null);
    setSelectedLocation(null);
  };

  // Function to start confetti
  const startConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 3 seconds
  };

  useEffect(() => {
    if (selectedLocation) {
      setSelectedCategory("locationBound");
      setMenuOpen(true);
      setPanelView("quests");
    }
  }, [selectedLocation]);

  const value = {
    hero,
    setHero,
    quests,
    setQuests,
    defaultViewPort,
    menuOpen,
    setMenuOpen,
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
    setLoggedIn,
    panelView,
    setPanelView,
    showConfetti,
    setShowConfetti,
    startConfetti,
  };

  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
};
