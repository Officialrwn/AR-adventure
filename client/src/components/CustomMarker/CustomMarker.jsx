import React from "react";
import icon from "../../assets/questicon.png";
import "./index.css";

const CustomMarker = ({ isActive, title, onClick }) => {
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

  return (
    <div>
      {isActive && (
        <div className="popup">
          <button>View quest</button>
          <button>Get directions to quest</button>
        </div>
      )}
      <div
        className="custom-marker"
        style={isActive ? markerStyle : defaultStyle}
        onClick={() => onClick(title)}
      >
        <img src={icon} alt="quest icon" style={iconStyle} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default CustomMarker;
