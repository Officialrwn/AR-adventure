import React, { useRef, useEffect, useState } from "react";
import "./index.css";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapPage = () => {
  const [viewport, setViewport] = useState({
    latitude: 60.17000701866055,
    longitude: 24.93737401348124,
    width: "100vw",
    height: "100vh",
    zoom: 12,
  });

  // const mapStyle = "mapbox://styles/leighhalliday/cjufmjn1r2kic1fl9wxg7u1l4";
  const mapStyle = "mapbox://styles/mapbox/streets-v11";

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        mapStyle={mapStyle}
        onViewportChange={(newViewport) => setViewport(newViewport)}
        doubleClickZoom={true}
      >
        MAP
      </ReactMapGL>
    </div>
  );
};

export default MapPage;
