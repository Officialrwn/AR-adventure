import { StyledHeroPage, HeroIcon, HeroStats } from "./Hero.styled";
import heroData from "../../data/hero.json";
import hero1 from "../../assets/hero-1.png";

const Hero = () => {
  const { name, level, gold, experience, questsCompleted, icon } = {
    ...heroData,
  };

  const heroIconSrc = icon === "1" ? hero1 : null;

  return (
    <StyledHeroPage>
      <HeroIcon src={heroIconSrc} alt="Hero Icon" />
      <HeroStats>
        <h2>{name}</h2>
        <h3>Level: {level}</h3>
        <p>
          <b>Gold:</b> {gold}
        </p>
        <p>
          <b>Experience:</b> {experience}
        </p>
        <p>
          <b>Quests Completed:</b> {questsCompleted}
        </p>
      </HeroStats>
    </StyledHeroPage>
  );
};

export default Hero;
