// Menu.styled.js
import styled from "styled-components";

export const StyledMenu = styled.div`
  .menu-item {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s linear;
    padding-left: 1rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
      background-color: #f3b509;
    }
  }
`;
