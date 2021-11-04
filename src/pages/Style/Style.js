import styled, { keyframes } from "styled-components";

// header navbar
export const NavBar = styled.div`
  width: 100%;
  height: 70px;
  background-color: #303030;
  line-height: 70px;
  position: fixed;
  z-index: 99999;

  .scroll {
    justify-content: space-between;
    align-items: center;
    display: flex;
  }

  .start {
    transition: 0.3s;
    background-color: white;
    div {
      color: #303030;
    }
    a {
      color: #303030;
    }
  }
`;

export const MenuContainer = styled.div`
  margin-right: 25px;

  a {
    color: white;
    margin-left: 40px;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }

  a:hover {
    color: yellow;
  }
`;

export const LogoContainer = styled.div`
  color: white;
  text-indent: 20px;
  font-size: 25px;
  font-weight: bold;
`;

export const BackGroundModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 15px 15px;
  background: rgba(0, 0, 0, 0.3);
  opacity: 1;
  transition: opacity 0.15s linear;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const showDialog = keyframes`
   from {
    opacity: 0;
    transform: translateY(-200px);
   }
   to{
    opacity: 1;
    transform: translateY(0px);
   }
`;

export const ModalDialog = styled.div`
  display: block;
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px 30px;
  border-radius: 20px;
  border: 2px solid gray;
  max-width: calc(100% - 0.01px) !important;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 999999;
  opacity: 1;
  animation: ${showDialog} 0.5s forwards;
  .closeBtn {
    display: flex;
    justify-content: flex-end;
  }
  .fa-times {
    font-size: 25px;
    padding: 15px;
    color: lightgrey;
    cursor: pointer;
  }
  .title {
    text-align: center;
  }
`;

// about component style
export const AboutMe = styled.div`
  width: 60%;
  margin: auto;
  padding: 80px 10px 50px 10px;

  .title {
    font-family: "Anton", sans-serif;
    font-size: 50px;
    letter-spacing: 2px;
    word-spacing: 5px;
    margin: 15px 0px;
  }
  @media screen and (max-width: 1000px) {
    width: 70%;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

// 자기소개 sectioon1, 2
export const Section1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 800px) {
    display: block;
    justify-content: center;
  }
`;

export const Section2 = styled.div`
  display: flex;
  border-radius: 10px;
  transition: 0.3s;
  padding: 10px;
  &:hover {
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const SefieBox = styled.div`
  img {
    width: 300px;
    height: 350px;
    border-radius: 10px;
  }
`;

export const SefieDescription = styled.div`
  width: 100%;
  margin-left: 10px;

  p {
    padding: 0px 20px;
    line-height: 35px;
  }

  .strong {
    font-weight: bold;
    padding: 0px 4px;
    background-color: #f8f0df;
    font-size: 17px;
  }

  .underline {
    text-decoration: underline;
    text-indent: 20px;
  }
`;

// skills css section3
export const Section3 = styled.div`
  width: 100%;
  display: flex;
  border-radius: 10px;
  padding: 10px;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const Skills = styled.div`
  width: 50%;
  background-color: #fbf7f0;
  border-radius: 10px;
  padding: 15px 10px;

  .title-sign {
    font-weight: bold;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Educations = styled.div`
  width: 50%;
  background-color: #fbf7f0;
  border-radius: 10px;
  margin-left: 5px;
  padding: 15px 10px;

  .title-sign {
    font-weight: bold;
  }

  .term {
    font-size: 13px;
    color: grey;
    padding-left: 10px;
  }

  p {
    line-height: 30px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 15px;
  }
`;

export const Section = styled.div`
  padding: 10px;
`;

export const CategorySign = styled.span`
  font-size: 16px;
  padding: 15px 0px;
`;
export const ButtonTag = styled.button`
  border: none;
  padding: 5px 15px;
  border-radius: 20px;
  background-color: #d9e4dd;
  margin: 5px;
  font-weight: 700;
`;

// FAQ section
export const BookStoryBox = styled.div`
  display: flex;
  align-items: center;

  div {
    padding: 0px 10px;
  }

  .text {
    width: 100%;
    text-align: right;
    padding-top: 10px;
    color: gray;
    font-weight: 400;
  }

  .remark {
    font-weight: 700;
    background-color: #fbf7f0;
    padding: 20px;
    border-radius: 10px;
  }
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const QuestionBox = styled.div``;

export const Question = styled.div``;

export const Answer = styled.div`
  padding: 10px;

  img {
    width: 250px;
    height: 300px;
    border-radius: 10px;
  }

  p {
    padding: 0px 10px;
    line-height: 25px;
  }

  .strong {
    font-weight: bold;
    padding: 0px 4px;
    background-color: #f8f0df;
    font-size: 17px;
  }

  .strong_1 {
    font-size: 18px;
    font-weight: bold;
    padding-right: 10px;
  }
  border-radius: 10px;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.3);
  }
`;
