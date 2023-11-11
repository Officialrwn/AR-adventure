import styled from "styled-components";

export const StyledAchievements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const Achievement = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  width: 90%;
`;

export const AchievementIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

export const AchievementDetails = styled.div`
  h3 {
    margin: 0;
    color: #007bff; // Primary color for titles
  }

  p {
    margin: 5px 0 0;
    font-size: 0.9em;
    color: #555; // Darker text for description
  }
`;
