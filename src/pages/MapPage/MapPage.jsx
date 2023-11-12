import React, { useEffect, useRef } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import questsData from "../../data/questsData.json";
import CustomMarker from "../../components/CustomMarker/CustomMarker";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";
import { useView } from "../../contexts/ViewContext";
import hero from "../../assets/hero-1.png";
import MainPanel from "../../components/MainPanel/MainPanel";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import QuestPopup from "../../components/QuestPopup/QuestPopup";

const MapPage = () => {
  const {
    quests,
    setQuests,
    setMenuOpen,
    activeMarker,
    setActiveMarker,
    viewport,
    setSelectedLocation,
    setViewport,
    defaultViewPort,
    resetQuestsView,
    userLocation,
    setUserLocation,
    selectedCategory,
    isPopupVisible,
    setIsPopupVisible,
    selectedQuest,
    setPanelView,
  } = useView();
  const mainPanelRef = useRef(null);
  const markerRefs = useRef([]);
  const popupRef = useRef(null);

  const defaultUserLocation = {
    latitude: 60.16213071353617,
    longitude: 24.905526255182103,
  };

  useEffect(() => {
    setUserLocation(defaultUserLocation);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      },
      (error) => {
        console.error("Error getting user location:", error.message);
      }
    );
  }, []);

  const markers = Object.keys(questsData.locationBoundQuests).map((key) => {
    return {
      title: key,
      latitude: parseFloat(questsData.locationBoundQuests[key].latitude),
      longitude: parseFloat(questsData.locationBoundQuests[key].longitude),
    };
  });

  useEffect(() => {
    // Update markerRefs array based on markers
    markerRefs.current = markers.map(
      (_, i) => markerRefs.current[i] || React.createRef()
    );
  }, [markers]);

  // Combine refs
  const allRefs = [popupRef, mainPanelRef, ...markerRefs.current];

  useOnClickOutside(allRefs, () => {
    console.log("Clicked outside of MainPanel and markers");
    // Your logic for handling outside clicks

    setViewport(defaultViewPort);
    setMenuOpen(false);
    setPanelView(null);
    resetQuestsView();
    setActiveMarker(null);
  });

  useEffect(() => {
    if (activeMarker) {
      const marker = markers.find((marker) => marker.title === activeMarker);
      const newViewPort = {
        latitude: marker.latitude,
        longitude: marker.longitude - 0.02,
        zoom: 14,
      };
      setViewport(newViewPort);
    }
  }, [activeMarker]);

  const handleOnMarkerClick = (marker) => {
    console.log(marker.title);

    setSelectedLocation(marker.title);

    const newViewPort = {
      latitude: marker.latitude,
      longitude: marker.longitude - 0.02,
      zoom: 14,
    };

    const prevActiveMarker =
      activeMarker === marker.title ? null : marker.title;
    const prevViewPort = prevActiveMarker ? newViewPort : defaultViewPort;

    setViewport(prevViewPort);
    setActiveMarker(prevActiveMarker);

    if (activeMarker && !prevActiveMarker) {
      setPanelView(null);
      setMenuOpen(false);
      setSelectedLocation(null);
    }
  };

  const updateQuestCompletion = (id) => {
    setIsPopupVisible(false);
    setQuests((prevQuests) => {
      // Initialize updates with current quests
      let updatedLocationFreeQuests = prevQuests.locationFreeQuests;
      let updatedLocationBoundQuests = prevQuests.locationBoundQuests;

      if (selectedCategory === "locationFree") {
        // Update for locationFreeQuests
        updatedLocationFreeQuests = updatedLocationFreeQuests.map((quest) =>
          quest.id === id ? { ...quest, completed: 1 } : quest
        );
      } else if (selectedCategory === "locationBound") {
        // Update for locationBoundQuests
        updatedLocationBoundQuests = Object.entries(
          updatedLocationBoundQuests
        ).reduce((acc, [location, data]) => {
          const updatedQuests = data.quests.map((quest) =>
            quest.id === id ? { ...quest, completed: 1 } : quest
          );

          return { ...acc, [location]: { ...data, quests: updatedQuests } };
        }, {});
      }

      return {
        locationFreeQuests: updatedLocationFreeQuests,
        locationBoundQuests: updatedLocationBoundQuests,
      };
    });
  };

  // const mapStyle = "mapbox://styles/leighhalliday/cjufmjn1r2kic1fl9wxg7u1l4";
  const mapStyle = "mapbox://styles/mapbox/dark-v10";

  return (
    <>
      {isPopupVisible && (
        <QuestPopup
          ref={popupRef}
          quest={selectedQuest}
          onClose={() => setIsPopupVisible(false)}
          onCompletion={updateQuestCompletion}
        />
      )}

      <MainPanel ref={mainPanelRef} />

      <div className="map">
        <ReactMapGL
          {...viewport}
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
          mapStyle={mapStyle}
          onViewportChange={(newViewport) => setViewport(newViewport)}
          doubleClickZoom={true}
        >
          {userLocation && (
            <Marker
              latitude={userLocation.latitude}
              longitude={userLocation.longitude}
            >
              <img
                src={hero}
                alt="hero"
                style={{ width: "30px", height: "30px" }}
              />
            </Marker>
          )}

          {markers.map((marker, index) => (
            <Marker
              key={marker.title}
              latitude={marker.latitude}
              longitude={marker.longitude}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <div ref={markerRefs.current[index]}>
                <CustomMarker
                  isActive={activeMarker === marker.title}
                  marker={marker}
                  onClick={() => handleOnMarkerClick(marker)}
                />
              </div>
            </Marker>
          ))}
        </ReactMapGL>
      </div>
    </>
  );
};

export default MapPage;
