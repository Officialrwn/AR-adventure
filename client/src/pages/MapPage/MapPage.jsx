import React, { useRef, useEffect, useState } from 'react';
import './index.css'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

const MapPage = () => {
	const [viewport, setViewport] = useState({
		latitude: 60.1674881,
		longitute: 24.9427473,
		width: "100vw",
		height: "100vh",
		zoom: 5,
	});

	return (
		<div className="map">
			<ReactMapGL
				{...viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
				mapStyle="mapbox://styles/mapbox/streets-v11"
				// onViewportChange={(newViewport) => setViewport(newViewport)}
			>
				MAP
			</ReactMapGL>
		</div>
	)
}

export default MapPage