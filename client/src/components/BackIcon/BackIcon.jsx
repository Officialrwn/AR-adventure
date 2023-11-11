// BackIcon.jsx
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBackIcon = styled.button`
  position: absolute; // Adjust positioning as needed
  top: 5%;
  left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10; // Ensure it's above other elements

  &:focus {
    outline: none;
  }
`;

const BackIcon = ({ onClick }) => {
  return (
    <StyledBackIcon onClick={onClick}>
      ← {/* This is a simple textual back arrow, replace with SVG if needed */}
    </StyledBackIcon>
  );
};

BackIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackIcon;
