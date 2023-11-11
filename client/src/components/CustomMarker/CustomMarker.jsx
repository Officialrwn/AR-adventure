import icon from '../../assets/questicon.png'
import './index.css'

const CustomMarker = ({title, onClick}) => {
	const iconStyle = {
		width: "20px",
		height: "20px"
  };
	return (
		<div className="custom-marker" onClick={onClick}>
			<img src={icon} alt="quest icon"  style={iconStyle} />
			<p>{title} Quest</p>
		</div>
	)};

export default CustomMarker;