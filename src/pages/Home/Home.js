import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {} from "../Style/Style";
import styled from "styled-components";
import ScrollDown from "./ScrollDown/ScrollDown";

const { Swiper } = window;

const Home = () => {
  const [position, setPosition] = useState(0);

  const onScroll = () => {
    setPosition(window.scrollY);
  };

  useEffect(() => {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <HomeContainer>
      {position === 0 ? <ScrollDown /> : ""}
      <FaceTopage>
        <div className='wrapper'>
          <div className='stactic-txt'>I'm a</div>
          <ul
            className={position === 0 ? "dynamic-txts dynamic" : "dynamic-txts"}
          >
            <li>
              <span>Front-End Developer</span>
            </li>
          </ul>
        </div>
        <Link to='/about'>
          <div className='btn-box'>
            <button>
              Show More <span className='icon'>→</span>
            </button>
          </div>
        </Link>
      </FaceTopage>

      <Section>
        <CardContainer>
          <div className='title'>My Works</div>
          <div className='swiper mySwiper'>
            <div className='swiper-wrapper'>
              <div
                className={
                  position > 350 ? "swiper-slide slide" : "swiper-slide"
                }
              >
                <img src='../image/eatmeup/eatmeup.png' alt='eatmeup' />
                <div className='subtitle'>EatMeUp</div>
                <div></div>
              </div>
              <div
                className={
                  position > 350 ? "swiper-slide slide" : "swiper-slide"
                }
              >
                <img src='../image/brrrrng/brrrrng.png' alt='brrrrng' />
                <div className='subtitle'>BRRRRng</div>
                <div></div>
              </div>
              <div
                className={
                  position > 350 ? "swiper-slide slide" : "swiper-slide"
                }
              >
                <img src='../image/cog/cog.png' alt='cog' />
                <div className='subtitle'>BRAIN</div>
                <div></div>
              </div>
              <div
                className={
                  position > 350 ? "swiper-slide slide" : "swiper-slide"
                }
              >
                <img src='../image/portfolio.png' alt='cog' />
                <div className='subtitle'>세경's Portfolio</div>
                <div></div>
              </div>
            </div>

            <div className='swiper-pagination'></div>
          </div>
        </CardContainer>
      </Section>

      <Section>
        <ContactInfo>
          <div>
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
          </div>
        </ContactInfo>
        <Footer>Copyright © Segyong by 2021</Footer>
      </Section>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const FaceTopage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #303030;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 100%;
  margin: auto;
  position: relative;

  .title {
    font-family: "Anton", sans-serif;
    font-size: 40px;
    letter-spacing: 2px;
    word-spacing: 5px;
    margin: 15px 0px 15px 50px;
  }
`;

const ContactInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .contacts {
    line-height: 30px;
  }

  i {
    margin-right: 10px;
  }
`;

const Footer = styled.div`
  width: 100%;
  text-align: center;
  color: #303030;
  font-size: 13px;
  background-color: #fef9ef;
  font-weight: bold;
  padding: 10px 0px;
`;
export default Home;
