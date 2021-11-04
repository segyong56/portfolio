import React from "react";
import styled from "styled-components";
import {} from "../Style/Style";

const Contact = () => {
  return (
    <Box>
      <ContactBox>
        <div className='title'>
          <h1>👩🏻‍💻 Contact Me</h1>
        </div>
        <div className='contacts'>
          <div>
            <i className='fas fa-phone'></i> 010-6689-2121
          </div>
          <div>
            <i className='far fa-envelope'></i> segyong56@gmail.com
          </div>
          <div>
            <i className='fab fa-github'></i>
            <a href='https://github.com/segyong56'>
              https://github.com/segyong56
            </a>
          </div>
        </div>
      </ContactBox>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #303030;
`;
const ContactBox = styled.div`
  padding: 20px 50px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: #fefbf3;

  .title {
    width: 100%;
    text-align: center;
  }

  .contacts {
    margin: auto;
    div {
      margin: 8px 0px;
      font-size: 18px;
      i {
        margin-right: 20px;
      }
    }
  }
`;
export default Contact;
