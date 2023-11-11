import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { useView } from "../../contexts/ViewContext";

const Menu = ({ open }) => {
  const { setPanelView } = useView();

  return (
    <StyledMenu open={open}>
      <div className="menu-item" onClick={() => setPanelView("hero")}>
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        Hero
      </div>
      <div className="menu-item" onClick={() => setPanelView("quests")}>
        <span role="img" aria-label="price">
          &#128214;
        </span>
        Quests
      </div>
      <div className="menu-item" onClick={() => setPanelView("achievements")}>
        <span role="img" aria-label="contact">
          &#127942;
        </span>
        Achievements
      </div>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
