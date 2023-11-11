import React, { useState } from 'react';
import icon from '../../assets/questicon.png';
import './index.css';

const CustomMarker = ({ title, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const iconStyle = {
    width: "20px",
    height: "20px"
  };

  const markerStyle = {
    border: '2px solid green',
		backgroundColor: 'green',
		color: 'white',
    padding: '5px',
    borderRadius: '5px',
    cursor: 'pointer'
  };
	
	const defaultStyle = {
		fontWeight: 'bold',
		color: 'green'
	}

  return (
    <div className="custom-marker" style={ clicked ? markerStyle : defaultStyle } onClick={() => { setClicked(!clicked); onClick(); }}>
      <img src={icon} alt="quest icon" style={iconStyle} />
      <p>{title} Quest</p>
    </div>
  );
};

export default CustomMarker;