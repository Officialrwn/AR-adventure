import React from "react";
import { PopupBackground, PopupContainer } from "./QuestPopup.styled"; // Adjust the import path as needed

const QuestPopup = React.forwardRef(({ quest, onClose, onCompletion }, ref) => {
  if (!quest) return null;

  const handleFinish = () => {
    if (quest.completed === 0) {
      onCompletion(quest.id);
    }
  };

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

          <div className="buttons-container">
            <button onClick={onClose}>
              <b>Close</b>
            </button>
            {quest.completed === 0 && (
              <button className="finish" onClick={handleFinish}>
                <b>I finish it</b>
              </button>
            )}
          </div>
        </PopupContainer>
      </PopupBackground>
    </div>
  );
});

export default QuestPopup;
