import styled from "styled-components";

export const LocationButton = styled.button`
  background-color: ${({ theme }) => theme.primaryLight}; // Main heading color
  color: ${({ theme }) => theme.primaryDark};
  border: none;
  border-radius: 5px;
  padding: 15px 20px; // Slightly larger padding for main headings
  margin: 5px 0;
  cursor: pointer;
  font-size: 1.4rem; // Larger font for main headings
  text-align: left;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }

  &:focus {
    outline: none;
  }
`;

export const SubLocationButton = styled(LocationButton)`
  background-color: #b2dfdb; // Different color for subheadings
  font-size: 1.2rem; // Smaller than main headings
  padding: 10px 15px; // Smaller padding than main headings
`;

export const QuestList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
`;

export const QuestListItem = styled.li`
  background-color: #c8e6c9; // Quest item color
  color: #333;
  margin: 5px 0;
  padding: 8px 12px; // Slightly smaller than headings
  border-radius: 4px;
  transition: background-color 0.3s ease;
  font-size: 1rem; // Smaller font for quests

  &:hover {
    background-color: #a5d6a7;
  }
`;
