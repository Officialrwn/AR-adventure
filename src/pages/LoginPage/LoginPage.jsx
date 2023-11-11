// LoginPage.jsx
import React, { useState } from "react";
import { PlayButton, LoginPageContainer } from "./LoginPage.styled";
import { useView } from "../../contexts/ViewContext";

const LoginPage = () => {
  const { setLoggedIn } = useView();
  const [playClicked, setPlayClicked] = useState(false);

  const handlePlayClick = () => {
    // Handle the play click (e.g., redirect to the game or open a login modal)
    console.log("Play button clicked");

    setPlayClicked(true);

    setTimeout(() => {
      setLoggedIn(true);
    }, 2000); // Adjust time to match your fade-out duration
  };

  return (
    <LoginPageContainer fadeOut={playClicked}>
      <PlayButton onClick={handlePlayClick}>Let's epic life</PlayButton>
    </LoginPageContainer>
  );
};

export default LoginPage;
