import React from "react";
import { Box, ContactBox } from "../Style/Style";

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

export default Contact;
