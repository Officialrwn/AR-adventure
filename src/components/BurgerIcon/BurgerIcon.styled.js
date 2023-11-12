// Burger.styled.js
import styled from "styled-components";

export const StyledBurgerIcon = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:hover::before {
    background-color: #f8c537;
  }

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
    width: 4rem; /* Increased size of the circle */
    height: 4rem; /* Increased size of the circle */
    background: #f2f2f2; /* Change to your desired color */
    border-radius: 50%;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5); /* Darker and larger shadow */
    z-index: -1;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) =>
      open ? theme.primaryDark : theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      /* Removed the transform for the second line */
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
