import React from 'react'
import styled from 'styled-components';

const ScrollDown = () => {
  return (
    <ScrollD />
  )
}


const ScrollD = styled.div`
  z-index: 11;
  position: fixed;
  width: 40px;
  height: 64px;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  border: 2px solid #ffffff;
  border-radius: 50px;
  cursor: pointer;
  ::before {
    content: "";
    position: absolute;
    top: 20%;
    left: 50%;
    border: 2px solid #ffffff;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%) rotate(45deg);
    border-top: transparent;
    border-left: transparent;
    animation: Scrolldown 1s ease-in-out infinite;
  }
  ::after {
    top: 30%;
    animation-delay: 0.3s;
  }
  @keyframes Scrolldown {
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
      top: 90%;
    }
  }
`;

export default ScrollDown
