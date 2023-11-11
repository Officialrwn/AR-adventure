// MainPanel.jsx
import React, { useRef, useState } from "react";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
import BackIcon from "../BackIcon/BackIcon"; // You need to create this component
import Menu from "../Menu/Menu";
import Quests from "../Quests/Quests"; // You need to create this component
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { StyledMainPanel } from "./MainPanel.styled";

const MainPanel = () => {
  const [open, setOpen] = useState(false);
  const [viewingQuests, setViewingQuests] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

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
        <BurgerIcon open={open} setOpen={setOpen} />
      )}
      <StyledMainPanel open={open}>
        {viewingQuests ? (
          <Quests />
        ) : (
          <Menu open={open} onQuestClick={handleQuestClick} />
        )}
      </StyledMainPanel>
    </div>
  );
};

export default MainPanel;
