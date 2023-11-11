import React from "react";
import {
  StyledAchievements,
  Achievement,
  AchievementIcon,
  AchievementDetails,
} from "./Achievements.styled";
import {
  adventurerIcon,
  cameraIcon,
  questIcon,
  routeIcon,
  treasureIcon,
} from "../../assets/icons";

/**
 * ICONS CREDIT
 *
 * Rpg icons created by max.icons - Flaticon
 * Treasure icons created by max.icons - Flaticon
 * Camera icons created by Freepik - Flaticon
 * Navigation icons created by Freepik - Flaticon
 * Rpg icons created by David Carapinha - Flaticon
 *
 */
const achievementsData = [
  {
    id: 1,
    title: "Explorer Initiate",
    description: "Complete 5 quests",
    icon: adventurerIcon,
  },
  {
    id: 2,
    title: "Treasure Hunter",
    description: "Find 3 hidden treasures",
    icon: treasureIcon,
  },
  {
    id: 3,
    title: "The Photogenic",
    description: "Take 10 selfies with a statue",
    icon: cameraIcon,
  },
  {
    id: 4,
    title: "Master Navigator",
    description: "Travel 100 km",
    icon: routeIcon,
  },
  {
    id: 5,
    title: "Quest Master",
    description: "Complete all quests in a region",
    icon: questIcon,
  },
];

const Achievements = () => {
  return (
    <StyledAchievements>
      {achievementsData.map((achievement) => (
        <Achievement key={achievement.id}>
          <AchievementIcon src={achievement.icon} alt={achievement.title} />
          <AchievementDetails>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </AchievementDetails>
        </Achievement>
      ))}
    </StyledAchievements>
  );
};

export default Achievements;
