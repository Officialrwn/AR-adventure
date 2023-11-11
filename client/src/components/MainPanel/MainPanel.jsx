// MainPanel.jsx
import React, { useRef, useState } from "react";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
import Menu from "../Menu/Menu";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { StyledMainPanel } from "./MainPanel.styled";

const MainPanel = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <BurgerIcon open={open} setOpen={setOpen} />
      <StyledMainPanel open={open}>
        <Menu open={open} />
      </StyledMainPanel>
    </div>
  );
};

export default MainPanel;
