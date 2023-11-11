// LoginPage.styled.js
import styled, { css } from "styled-components";
import backgroundImage from "../../assets/login-background.png";

const fadeInBackground = css`
  animation: fadeIn 2s ease-in forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const LoginPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.fadeOut ? "0" : "1")};
  transition: opacity 2s ease-out;
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
