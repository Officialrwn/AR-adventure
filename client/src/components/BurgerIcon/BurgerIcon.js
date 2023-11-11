// Burger.js
import React from "react";
import { bool, func } from "prop-types";
import { StyledBurgerIcon } from "./BurgerIcon.styled";

const BurgerIcon = ({ open, setOpen }) => {
  return (
    <StyledBurgerIcon open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurgerIcon>
  );
};

BurgerIcon.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default BurgerIcon;
