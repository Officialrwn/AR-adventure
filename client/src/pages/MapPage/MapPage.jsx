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

		map.current.on('move', () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});
	});
	return (
		<div className="main">
			<div className="header">
				<h1>Map Page</h1>
			</div>
			<div className="map">
				<div className="sidebar">
					Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
				</div>
				<div ref={mapContainer} className="map-container" />
			</div>
		</div>
	)
}

export default MapPage