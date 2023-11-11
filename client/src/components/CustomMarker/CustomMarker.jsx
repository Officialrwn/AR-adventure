import React from 'react';
import icon from '../../assets/questicon.png';
import './index.css';

const CustomMarker = ({ isActive, title, onClick }) => {
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
		<div>
			{ isActive && <div className="popup">
				<button>View quest</button>
				<button>Get directions to quest</button>
			</div> }
			<div className="custom-marker" style={ isActive ? markerStyle : defaultStyle } onClick={() => onClick(title)}>
				<img src={icon} alt="quest icon" style={iconStyle} />
				<p>{title} Quest</p>
			</div>
		</div>
  );
};

export default CustomMarker;