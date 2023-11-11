// MainPanel.styled.js
import styled from "styled-components";

export const StyledMainPanel = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 120px;
  padding-left: 2rem;
  padding-right: 2rem;
  background: ${({ theme }) => theme.primaryLight};
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  height: 100vh;
  max-height: 100vh;
  width: 500px;
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  div {
    text-align: start;
  }
`;
