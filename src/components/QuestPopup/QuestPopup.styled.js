import styled from "styled-components";

export const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const PopupContainer = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 560px;
  text-align: left;

  div {
    color: #333;
  }

  h2 {
    color: #333;
    margin-bottom: 20px;
    font-size: 1.8rem;
  }

  p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .quest-details {
    background-color: #f2f2f2;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .reward {
    font-weight: bold;
    color: #4caf50;
  }

  .buttons-container {
    display: flex;
    justify-content: space-between;
  }

  button {
    background-color: #f8c537;
    color: #333;
    border: none;
    margin-top: 10px;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e6b530;
    }

    &.finish {
      background-color: #4cb944;
      color: white;
    }

    &.finish:hover {
      background-color: #44a63d;
    }
  }
`;
