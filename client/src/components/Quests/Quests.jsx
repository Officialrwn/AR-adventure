// Quests.jsx
import React from "react";
import { QuestsContainer, QuestItem } from "./Quests.styled"; // Adjust the import path as needed

const Quests = () => {
  const dailyQuests = [
    "Collect 10 magical herbs",
    "Defeat the shadow dragon",
    "Explore the forgotten dungeon",
    "Craft a potion of healing",
    // ...more quests
  ];

  return (
    <QuestsContainer>
      <h2>Daily Quests</h2>
      {dailyQuests.map((quest, index) => (
        <QuestItem key={index}>{quest}</QuestItem>
      ))}
    </QuestsContainer>
  );
};

export default Quests;
