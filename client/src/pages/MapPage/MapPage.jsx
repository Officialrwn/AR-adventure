import React, { useRef, useEffect, useState } from 'react';
import './index.css'
import ReactMapGL from 'react-map-gl'

const MapPage = () => {
	const [viewport, setViewport] = useState({
		latitude: 60.1674881,
		longitute: 24.9427473,
		width: "100vw",
		height: "100vh",
		zoom: 10,
	});

	return (
		<div className="main">
			<div className="header">
				<h1>Map Page</h1>
			</div>
			<div className="map">
			<ReactMapGL {...viewport} mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}>
				MAP
			</ReactMapGL>
			</div>
		</div>
	)
}

export default MapPage