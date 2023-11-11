// MainPanel.jsx
import React from "react";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
import BackIcon from "../BackIcon/BackIcon"; // You need to create this component
import Menu from "../Menu/Menu";
import Quests from "../Quests/Quests"; // You need to create this component
import { StyledMainPanel } from "./MainPanel.styled";
import { useView } from "../../contexts/ViewContext";
import Hero from "../Hero/Hero";
import Achievements from "../Achievements/Achievements";

const MainPanel = React.forwardRef((props, ref) => {
  const { menuOpen, setMenuOpen, panelView, setPanelView } = useView();

  return (
    <div ref={ref}>
      {!menuOpen && (
        <BurgerIcon
          open={menuOpen}
          setOpen={setMenuOpen}
          onClick={() => setPanelView("menu")}
        />
      )}
      {menuOpen && panelView !== "menu" && (
        <BackIcon onClick={() => setPanelView("menu")} />
      )}
      {menuOpen && panelView === "menu" && (
        <BackIcon onClick={() => setMenuOpen(false)} />
      )}

      <StyledMainPanel open={menuOpen}>
        {panelView === "quests" && <Quests />}
        {panelView === "hero" && <Hero />}
        {panelView === "achievements" && <Achievements />}
        {panelView === "menu" && <Menu open={menuOpen} />}
      </StyledMainPanel>
    </div>
  );
});

export default MainPanel;
