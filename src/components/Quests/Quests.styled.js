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
  overflow: auto;
  background-color: #f8c537;

  &:hover {
    background-color: #f3b509;
  }

  &:focus {
    outline: none;
  }

  &.active {
    background-color: #f8c537;
  }
`;

export const SubLocationButton = styled(LocationButton)`
  background-color: #b2dfdb; // Different color for subheadings
  font-size: 1.2rem; // Smaller than main headings
  padding: 10px 15px; // Smaller padding than main headings
  cursor: pointer;

  &:hover {
    background-color: #8ed0ca;
  }

  &.active {
    background-color: #ff8360;
  }
`;

export const QuestList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
  cursor: pointer;
`;

export const QuestListItem = styled.li`
  color: #333;
  margin: 5px 0;
  padding: 8px 12px; // Slightly smaller than headings
  border-radius: 4px;
  transition: background-color 0.3s ease;
  font-size: 1rem; // Smaller font for quests
  cursor: pointer;

  &:hover {
    background-color: #d1e5fc;
  }

  &.completed {
    background-color: #c8e6c9;
    font-style: italic;
    text-decoration: line-through;
  }

  &.completed:hover {
    background-color: #a5d6a7;
  }

  &.normal {
  }

  &.epic {
    color: white;
    background-color: #bf1363;
  }

  &.epic:hover {
    background-color: #e81d7b;
  }
`;
