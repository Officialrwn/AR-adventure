import React from "react";
import { PopupBackground, PopupContainer } from "./QuestPopup.styled"; // Adjust the import path as needed

const QuestPopup = React.forwardRef(({ quest, onClose }, ref) => {
  if (!quest) return null;

  return (
    <div ref={ref}>
      <PopupBackground>
        <PopupContainer>
          <h2>{quest.title}</h2>
          <p>{quest.description}</p>
          <p>
            <b>Difficulty:</b> {quest.type}
          </p>
          <p>
            <b>Status:</b> {quest.completed === 0 ? "Not done" : "Done"}
          </p>
          <p>
            <b>Reward:</b> {quest.reward.gold} Gold, {quest.reward.exp} EXP
          </p>
          <button onClick={onClose}>Close</button>
        </PopupContainer>
      </PopupBackground>
    </div>
  );
});

export default QuestPopup;
