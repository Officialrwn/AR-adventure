// Quests.styled.js
import styled from "styled-components";

export const QuestsContainer = styled.div`
  padding: 2rem; // Adjust as per your layout
  text-align: left; // Assuming menu items are left-aligned
`;

export const QuestItem = styled.div`
  font-size: 1rem; // Adjust font size as needed
  text-transform: uppercase; // If your menu items are uppercase
  padding: 1rem 0;
  font-weight: bold;
  color: ${({ theme }) =>
    theme.primaryDark}; // Adjust the color based on your theme
  border-bottom: 1px solid ${({ theme }) => theme.primaryLight}; // If you have borders in menu items
  cursor: pointer;
  transition: color 0.3s linear;

  &:hover {
    color: ${({ theme }) => theme.primaryHover}; // Adjust hover color
  }
`;
