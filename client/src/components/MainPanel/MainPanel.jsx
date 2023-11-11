// MainPanel.jsx
import React from "react";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
import BackIcon from "../BackIcon/BackIcon"; // You need to create this component
import Menu from "../Menu/Menu";
import Quests from "../Quests/Quests"; // You need to create this component
import { StyledMainPanel } from "./MainPanel.styled";
import { useView } from "../../contexts/ViewContext";

const MainPanel = React.forwardRef((props, ref) => {
  const { menuOpen, setMenuOpen, viewingQuests, setViewingQuests } = useView();

  const handleQuestClick = () => {
    setViewingQuests(true);
  };

  const handleBackClick = () => {
    setViewingQuests(false);
  };

  return (
    <div ref={ref}>
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
});

export default MainPanel;
