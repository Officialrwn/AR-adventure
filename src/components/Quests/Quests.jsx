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
    setSelectedQuest,
    setIsPopupVisible,
    setViewport,
    defaultViewPort,
  } = useView();

  const handleQuestClick = (quest) => {
    setSelectedQuest(quest);
    setIsPopupVisible(true);
  };

  const toggleCategory = (category) => {
    setViewport(defaultViewPort);
    setSelectedCategory(selectedCategory === category ? null : category);
    // Reset selectedLocation when switching categories or re-toggling the same category
    setSelectedLocation(null);
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(selectedLocation === location ? null : location);
  };

  return (
    <div className="quest-container">
      <LocationButton onClick={() => toggleCategory("locationFree")}>
        Location-free Quests
      </LocationButton>
      {selectedCategory === "locationFree" && (
        <QuestList>
          {questsData.locationFreeQuests.map((quest, index) => (
            <QuestListItem
              key={quest.id}
              onClick={() => handleQuestClick(quest)}
            >
              {index + 1}. {quest.title}
            </QuestListItem>
          ))}
        </QuestList>
      )}

      <LocationButton onClick={() => toggleCategory("locationBound")}>
        Location-bound Quests
      </LocationButton>
      {selectedCategory === "locationBound" && (
        <>
          {Object.entries(questsData.locationBoundQuests).map(
            ([location, locationData], index) => (
              <div key={index}>
                <SubLocationButton
                  onClick={() => handleLocationClick(location)}
                >
                  {location}
                </SubLocationButton>
                {selectedLocation === location && (
                  <QuestList>
                    {locationData.quests.map((quest, questIndex) => (
                      <QuestListItem
                        key={questIndex}
                        onClick={() => handleQuestClick(quest)}
                      >
                        {questIndex + 1}. {quest.title}
                      </QuestListItem>
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
