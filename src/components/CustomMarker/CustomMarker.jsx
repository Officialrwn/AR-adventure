import React from "react";
import icon from "../../assets/questicon.png";
import "./index.css";
import axios from 'axios';
import { useView } from "../../contexts/ViewContext";
import polyline from '@mapbox/polyline';

const CustomMarker = ({ isActive, marker, onClick }) => {
	const {	userLocation, setRoute } = useView();
	
  const iconStyle = {
    width: "20px",
    height: "20px",
  };

  const markerStyle = {
    border: "2px solid green",
    backgroundColor: "#F8C537",
    color: "#000000", // Changed text color to #F8C537
    padding: "5px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "24px", // Increased font size, adjust as needed
    textShadow: "0 0 0 #000000", // Added text shadow for better visibility
  };

  const defaultStyle = {
    fontWeight: "bold",
    color: "#F8C537", // Changed text color to #FF70A6
    fontSize: "18px", // Increased font size, adjust as needed
    textShadow: "2px 0 0 #000000", // Added white text shadow for visibility
  };

	const getDirections = async (marker) => {
		const accessToken = process.env.REACT_APP_MAPBOX_API_KEY;
		if (!userLocation) {
			console.log("ERROR", userLocation, marker);
			return null;
		}
		const user = userLocation ?? "60.16213071353617, 24.905526255182103"
		const start = `${user.latitude}, ${user.longitude}`;
		const end = `${marker.latitude}, ${marker.longitude}`;
		const apiUrl = `https://api.mapbox.com/directions/v5/mapbox/walking/${start};${end}?access_token=${accessToken}`;
		try {
			const response = await axios.get(apiUrl);
			// console.log(response.data);
			return response.data;
		} catch (error) {
			console.error('Error fetching directions:', error.message);
			return null;
		}
	};
	
	const handleOnClickGetDirections = async (marker) => {
		const directions = await getDirections(marker);
		console.log("directions:", directions);
		if (directions && directions.routes && directions.routes.length > 0) {
			const route = polyline.decode(directions.routes[0].geometry);
			const coordinates = route.map((coord) => ({
				latitude: coord[0],
				longitude: coord[1]
			}));
			// Update state with the route
			console.log("routes", coordinates[0]);
			setRoute(coordinates);
		}
	}
	
  return (
    <div>
      {isActive && (
        <div className="popup">
          <button onClick={async () => await handleOnClickGetDirections(marker)}>Show path</button>
        </div>
      )}
      <div
        className="custom-marker"
        style={isActive ? markerStyle : defaultStyle}
        onClick={() => onClick(marker)}
      >
        <img src={icon} alt="quest icon" style={iconStyle} />
        <p>{marker.title}</p>
      </div>
    </div>
  );
};

export default CustomMarker;
