import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useRef, useEffect, useState } from 'react';
import './index.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

const MapPage = () => {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-70.9);
	const [lat, setLat] = useState(42.35);
	const [zoom, setZoom] = useState(9);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
		container: mapContainer.current,
		style: 'mapbox://styles/mapbox/streets-v12',
		center: [lng, lat],
		zoom: zoom
		});
	});
	return (
		<>
			<h1>Map Page</h1>
			<div ref={mapContainer} className="map-container" />
		</>
	)
}

export default MapPage