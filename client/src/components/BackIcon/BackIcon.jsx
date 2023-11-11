// BackIcon.jsx
import React from "react";
import { StyledBackIcon } from "./BackIcon.styled";
import { func } from "prop-types";

const BackIcon = ({ onClick }) => {
  return <StyledBackIcon onClick={onClick}></StyledBackIcon>;
};

BackIcon.propTypes = {
  onClick: func.isRequired,
};

export default BackIcon;
