// Burger.js
import React from "react";
import { bool, func } from "prop-types";
import { StyledBurgerIcon } from "./BurgerIcon.styled";

const BurgerIcon = ({ open, setOpen, onClick }) => {
  return (
    <StyledBurgerIcon
      open={open}
      onClick={() => {
        setOpen(!open);
        onClick();
      }}
    >
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
