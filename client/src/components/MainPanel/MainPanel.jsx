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
  const {
    defaultViewPort,
    menuOpen,
    setMenuOpen,
    viewingQuests,
    setViewingQuests,
    setActiveMarker,
    setViewport,
    resetQuestsView,
  } = useView();

  const node = useRef();

  useOnClickOutside(node, () => {
    setViewport(defaultViewPort);
    setMenuOpen(false);
    setViewingQuests(false);
    resetQuestsView();
    setActiveMarker(null);
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
