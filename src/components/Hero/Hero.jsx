import heroData from "../../data/hero.json";
import hero1 from "../../assets/hero-1.png";
import {
  StyledHeroPage,
  HeroIcon,
  HeroStats,
  LevelBar,
  LevelProgress,
} from "./Hero.styled";

const Hero = () => {
  const {
    name,
    level,
    gold,
    experience,
    questsCompleted,
    icon,
    maxExperience,
  } = {
    ...heroData,
  };

  const heroIconSrc = icon === "1" ? hero1 : null;
  const progressPercentage = (experience / maxExperience) * 100; // Calculate the progress percentage

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
          <b>Experience:</b> {experience} / {maxExperience}
        </p>
        <p>
          <b>Gold:</b> {gold}
        </p>
        <p>
          <b>Quests Completed:</b> {questsCompleted}
        </p>
      </HeroStats>
    </StyledHeroPage>
  );
};

export default Hero;
