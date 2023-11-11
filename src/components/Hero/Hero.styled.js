import styled from "styled-components";

export const StyledHeroPage = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f4f4f4; // A light background for contrast
  border-radius: 10px; // Soft rounded corners
  width: 400px; // Limit the width for better focus
  margin: 30px auto; // Center the card
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
`;

export const HeroIcon = styled.img`
  width: 150px; // Increase the size for emphasis
  height: 150px;
  margin: 20px auto; // Add more space above and below the icon
  border-radius: 20%; // Circular icon
  border: 3px solid #007bff; // A colored border
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); // Shadow for the icon
`;

export const HeroStats = styled.div`
  color: #333;
  margin-top: 20px;
  font-size: 1.1em; // Slightly larger font size

  h2,
  h3 {
    color: #007bff; // A primary color for headers
    margin-bottom: 10px; // Spacing between headers and text
  }

  p {
    margin: 5px 0; // Reduce vertical spacing between paragraphs
  }

  b {
    color: #555; // Slightly darker color for bold text
  }
`;
