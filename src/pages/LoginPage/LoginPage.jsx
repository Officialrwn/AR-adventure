// LoginPage.jsx
import React from "react";
import { PlayButton, LoginPageContainer } from "./LoginPage.styled";
import { useView } from "../../contexts/ViewContext";

const LoginPage = () => {
  const { setLoggedIn } = useView();

  const handlePlayClick = () => {
    // Handle the play click (e.g., redirect to the game or open a login modal)
    console.log("Play button clicked");

    setLoggedIn(true);
  };

  return (
    <LoginPageContainer>
      <PlayButton onClick={handlePlayClick}>Play Game</PlayButton>
    </LoginPageContainer>
  );
};

export default LoginPage;
