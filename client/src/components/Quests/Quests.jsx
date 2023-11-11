// Quests.jsx
import React, { useState } from "react";
import questsData from "../../data/questsData.json"; // Adjust the import path
import { LocationButton, QuestList, QuestListItem } from "./Quests.styled";

const Quests = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // Reset location selection when switching categories
    setSelectedLocation(null);
  };

  const toggleLocation = (location) => {
    setSelectedLocation(selectedLocation === location ? null : location);
  };

  return (
    <div>
      {!selectedCategory && (
        <>
          <LocationButton onClick={() => handleCategoryClick("locationFree")}>
            Location-free Quests
          </LocationButton>
          <LocationButton onClick={() => handleCategoryClick("locationBound")}>
            Location-bound Quests
          </LocationButton>
        </>
      )}

      {selectedCategory === "locationFree" && (
        <QuestList>
          {questsData.locationFreeQuests.map((quest, index) => (
            <QuestListItem key={index}>{quest}</QuestListItem>
          ))}
        </QuestList>
      )}

      {selectedCategory === "locationBound" &&
        Object.entries(questsData.locationBoundQuests).map(
          ([location, quests], index) => (
            <div key={index}>
              <LocationButton onClick={() => toggleLocation(location)}>
                {location}
              </LocationButton>
              {selectedLocation === location && (
                <QuestList>
                  {quests.map((quest, questIndex) => (
                    <QuestListItem key={questIndex}>{quest}</QuestListItem>
                  ))}
                </QuestList>
              )}
            </div>
          )
        )}
    </div>
  );
};

export default Quests;
