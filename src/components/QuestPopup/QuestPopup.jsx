import React from "react";
import { PopupBackground, PopupContainer } from "./QuestPopup.styled"; // Adjust the import path as needed

const QuestPopup = ({ quest, onClose }) => {
  if (!quest) return null;

  return (
    <PopupBackground>
      <PopupContainer>
        <h2>{quest.title}</h2>
        <p>{quest.description}</p>
        <p>
          <b>Difficulty:</b> {quest.difficulty}
        </p>
        <p>
          <b>Status:</b> {quest.completed ? "Not done" : "Done"}
        </p>
        <p>
          <b>Reward:</b> {quest.reward.gold} Gold, {quest.reward.exp} EXP
        </p>
        <button onClick={onClose}>Close</button>
      </PopupContainer>
    </PopupBackground>
  );
};

export default QuestPopup;
