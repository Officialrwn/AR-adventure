// Quests.jsx
import React from "react";

const Quests = () => {
  const dailyQuests = [
    "Collect 10 magical herbs",
    "Defeat the shadow dragon",
    "Explore the forgotten dungeon",
    "Craft a potion of healing",
    // Add more quests as needed
  ];

  return (
    <div>
      <h2>Daily Quests</h2>
      <ul>
        {dailyQuests.map((quest, index) => (
          <li key={index}>{quest}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quests;
