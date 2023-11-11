// BackIcon.styled.js
import styled from "styled-components";

export const StyledBackIcon = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  /* Colored circle behind the icon */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4rem;
    height: 4rem;
    background: #f2f2f2;
    border-radius: 50%;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  /* Back Arrow */
  &::after {
    content: "←";
    font-size: 2rem;
    color: ${({ theme }) => theme.primaryDark};
  }
`;
