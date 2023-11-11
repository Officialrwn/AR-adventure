// BackIcon.jsx
import React from "react";
import { StyledBackIcon } from "./BackIcon.styled";
import { func } from "prop-types";
import { useView } from "../../contexts/ViewContext";

const BackIcon = ({ onClick }) => {
  const { resetQuestsView } = useView();

  const handleBackClick = () => {
    onClick();
    resetQuestsView();
  };

  return <StyledBackIcon onClick={handleBackClick}></StyledBackIcon>;
};

BackIcon.propTypes = {
  onClick: func.isRequired,
};

export default BackIcon;
