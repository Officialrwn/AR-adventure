// Quests.jsx
import React, { useState } from "react";
import questsData from "../../data/questsData.json"; // Ensure correct path
import {
  LocationButton,
  SubLocationButton,
  QuestList,
  QuestListItem,
} from "./Quests.styled";
import { useView } from "../../contexts/ViewContext";

const Quests = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
  } = useView();

  const toggleCategory = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    // Reset selectedLocation when switching categories or re-toggling the same category
    setSelectedLocation(null);
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(selectedLocation === location ? null : location);
  };

  return (
    <div>
      <LocationButton onClick={() => toggleCategory("locationFree")}>
        Location-free Quests
      </LocationButton>
      {selectedCategory === "locationFree" && (
        <QuestList>
          {questsData.locationFreeQuests.map((quest, index) => (
            <QuestListItem key={index}>{quest}</QuestListItem>
          ))}
        </QuestList>
      )}

      <LocationButton onClick={() => toggleCategory("locationBound")}>
        Location-bound Quests
      </LocationButton>
      {selectedCategory === "locationBound" && (
        <>
          {Object.entries(questsData.locationBoundQuests).map(
            ([location, quests], index) => (
              <div key={index}>
                <SubLocationButton
                  onClick={() => handleLocationClick(location)}
                >
                  {location}
                </SubLocationButton>
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
        </>
      )}
    </div>
  );
};

export default Quests;
