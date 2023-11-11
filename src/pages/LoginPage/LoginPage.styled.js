// LoginPage.styled.js
import styled from "styled-components";

export const LoginPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("../../assets/login-background.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlayButton = styled.button`
  padding: 15px 30px;
  font-size: 1.5rem;
  color: white;
  background-color: #4caf50; // Example color, change as needed
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3e8e41;
  }
`;
