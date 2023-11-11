// MainPanel.jsx
import React, { useRef, useState } from "react";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
import BackIcon from "../BackIcon/BackIcon"; // You need to create this component
import Menu from "../Menu/Menu";
import Quests from "../Quests/Quests"; // You need to create this component
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { StyledMainPanel } from "./MainPanel.styled";
import { useView } from "../../contexts/ViewContext";

const MainPanel = () => {
  const { menuOpen, setMenuOpen, viewingQuests, setViewingQuests } = useView();

  const node = useRef();

  useOnClickOutside(node, () => {
    setMenuOpen(false);
    setViewingQuests(false);
  });

  const handleQuestClick = () => {
    setViewingQuests(true);
  };

  const handleBackClick = () => {
    setViewingQuests(false);
  };

  return (
    <div ref={node}>
      {viewingQuests ? (
        <BackIcon onClick={handleBackClick} />
      ) : (
        <BurgerIcon open={menuOpen} setOpen={setMenuOpen} />
      )}
      <StyledMainPanel open={menuOpen}>
        {viewingQuests ? (
          <Quests />
        ) : (
          <Menu open={menuOpen} onQuestClick={handleQuestClick} />
        )}
      </StyledMainPanel>
    </div>
  );
};

export default MainPanel;
