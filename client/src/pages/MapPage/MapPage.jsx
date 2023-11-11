import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { parks } from "../../data/parks";
import CustomMarker from "../../components/CustomMarker/CustomMarker";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";
import { useView } from "../../contexts/ViewContext";

const MapPage = () => {
  const { setViewingQuests, setMenuOpen } = useView();

  const [activeMarker, setActiveMarker] = useState(null);
  const defaultViewPort = {
    latitude: 60.17000701866055,
    longitude: 24.93737401348124,
    width: "100vw",
    height: "100vh",
    zoom: 12,
  };
  const [viewport, setViewport] = useState(defaultViewPort);
  const markers = parks;

  const handleOnMarkerClick = (marker) => {
    console.log(marker.title);
    const newViewPort = {
      latitude: marker.latitude,
      longitude: marker.longitude - 0.01,
      zoom: 14,
      transition: {
        duration: 5000,
      },
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
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        mapStyle={mapStyle}
        onViewportChange={(newViewport) => setViewport(newViewport)}
        doubleClickZoom={true}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.title}
            latitude={marker.latitude}
            longitude={marker.longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <CustomMarker
              isActive={activeMarker === marker.title}
              title={marker.title}
              onClick={() => handleOnMarkerClick(marker)}
            />
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default MapPage;
