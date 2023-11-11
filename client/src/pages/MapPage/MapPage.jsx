import React, { useState, useEffect, useRef } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import questsData from "../../data/questsData.json";
import CustomMarker from "../../components/CustomMarker/CustomMarker";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";
import { useView } from "../../contexts/ViewContext";
import hero from "../../assets/hero.png";
import MainPanel from "../../components/MainPanel/MainPanel";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

const MapPage = () => {
  const {
    setViewingQuests,
    setMenuOpen,
    activeMarker,
    setActiveMarker,
    viewport,
    setSelectedLocation,
    setViewport,
    defaultViewPort,
    resetQuestsView,
		userLocation,
		setUserLocation
  } = useView();
  const mainPanelRef = useRef(null);
  const markerRefs = useRef([]);
	const defaultUserLocation = { latitude: 60.16213071353617, longitude: 24.905526255182103 };

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
  const allRefs = [mainPanelRef, ...markerRefs.current];

  useOnClickOutside(allRefs, () => {
    console.log("Clicked outside of MainPanel and markers");
    // Your logic for handling outside clicks

    setViewport(defaultViewPort);
    setMenuOpen(false);
    setViewingQuests(false);
    resetQuestsView();
    setActiveMarker(null);
  });

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

    if (prevActiveMarker) {
      setViewingQuests(true);
      setMenuOpen(true);
    }
  };

  // const mapStyle = "mapbox://styles/leighhalliday/cjufmjn1r2kic1fl9wxg7u1l4";
  const mapStyle = "mapbox://styles/mapbox/dark-v10";

  return (
    <>
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
