// Quests.styled.js
import styled from "styled-components";

export const LocationButton = styled.button`
  background-color: ${({ theme }) =>
    theme.primaryLight}; // Adjust to match your theme
  color: ${({ theme }) => theme.primaryDark};
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 5px 0;
  cursor: pointer;
  font-size: 1.2rem; // Adjust as needed
  text-align: left;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }

  &:focus {
    outline: none;
  }
`;

export const QuestList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
`;

export const QuestListItem = styled.li`
  background-color: #c8e6c9; // A light green that contrasts well with #EFFFFA
  color: #333; // Dark text for better readability
  margin: 5px 0;
  padding: 10px 15px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a5d6a7; // A lighter green for hover
  }
`;
