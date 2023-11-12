import hero1 from "../../assets/hero-1.png";
import {
  StyledHeroPage,
  HeroIcon,
  HeroStats,
  LevelBar,
  LevelProgress,
} from "./Hero.styled";
import { useView } from "../../contexts/ViewContext";

const Hero = () => {
  const { hero, quests } = useView();

  const {
    name,
    level,
    gold,
    experience,
    questsCompleted,
    icon,
    maxExperience,
  } = {
    ...hero,
  };

  function calculateTotals() {
    let totalCompletedQuests = 0;
    let totalGold = 0;
    let totalExperience = 0;

    // Calculate for locationFreeQuests
    quests.locationFreeQuests.forEach((quest) => {
      if (quest.completed === 1) {
        totalCompletedQuests += 1;
        totalGold += quest.reward.gold;
        totalExperience += quest.reward.exp;
      }
    });

    // Calculate for locationBoundQuests
    Object.values(quests.locationBoundQuests).forEach((location) => {
      location.quests.forEach((quest) => {
        if (quest.completed === 1) {
          totalCompletedQuests += 1;
          totalGold += quest.reward.gold;
          totalExperience += quest.reward.exp;
        }
      });
    });

    return { totalCompletedQuests, totalGold, totalExperience };
  }

  const heroIconSrc = icon === "1" ? hero1 : null;
  const progressPercentage =
    (calculateTotals().totalExperience / maxExperience) * 100; // Calculate the progress percentage

  return (
    <StyledHeroPage>
      <HeroIcon src={heroIconSrc} alt="Hero Icon" />
      <HeroStats>
        <h2>{name}</h2>
        <h3>Level: {level}</h3>
        <LevelBar>
          <LevelProgress width={progressPercentage} />
        </LevelBar>
        <p>
          <b>Experience:</b> {calculateTotals().totalExperience} /{" "}
          {maxExperience}
        </p>
        <p>
          <b>Gold:</b> {calculateTotals().totalGold}
        </p>
        <p>
          <b>Quests Completed:</b> {calculateTotals().totalCompletedQuests}
        </p>
      </HeroStats>
    </StyledHeroPage>
  );
};

export default Hero;
