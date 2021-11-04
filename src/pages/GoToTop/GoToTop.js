import React from "react";
import styled from "styled-components";

function GoToTop() {
  return (
    <Gototop onClick={() => window.scrollTo(0, 0)} />
  );
}

const Gototop = styled.div`
  z-index: 11;
  position: fixed;
  width: 40px;
  height: 64px;
  right: 20px;
  bottom: 25px;
  border: 2px solid #303030;
  border-radius: 50px;
  cursor: pointer;
  ::before {
    content: "";
    position: absolute;
    top: 90%;
    left: 50%;
    border: 2px solid #303030;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%) rotate(45deg);
    border-bottom: transparent;
    border-right: transparent;
    animation: MoveArrow 1s ease-in-out infinite;
  }
  ::after {
    top: 30%;
    animation-delay: 0.3s;
  }
  @keyframes MoveArrow {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      top: 20%;
    }
  }
`;

export default GoToTop;
