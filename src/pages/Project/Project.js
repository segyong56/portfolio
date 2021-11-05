import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  ProjectContainer,
  Title,
  SlideContainer,
  ImageBox,
  DescriptionBox,
} from "../Style/Style";
import GoToTop from "../GoToTop/GoToTop";

const Project = () => {
  const [position, setPosition] = useState(0);

  const onScroll = () => {
    setPosition(window.scrollY);
  };

  useEffect(() => {
    window.scrollTo(0,0)
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {position > 0 ? <GoToTop /> : <div>""</div>}
      <ProjectContainer>
        {/* {position > 0 ? <GoToTop /> : ""} */}
        <Title>
          <div className='title'>🖥 Project</div>
        </Title>
        <SlideContainer>
          <div className='header'>
            👉 냉장고 속 재료 유통기한관리 및 식단을 만들 수 있는 웹/앱
            애플리케이션
          </div>
          <hr />
          <ImageBox>
            <img src='../image/eatmeup/eatmeup.png' alt='project1' />
          </ImageBox>
          <DescriptionBox>
            <div className='title-box'>
              <div className='title'>
                <img src='../image/eatmeup/emu.ico' alt='logo' />
                <h1>EatMeUp</h1>
              </div>
              <hr />
              <div className='subtitle'>
                <span>코드스테이츠 Final Project(4인/4week)</span>
              </div>
            </div>
            <div className='section section1'>
              <div className='section-title'>🔶 서비스</div>
              <div className='section-content'>
                ▪️ 냉장고 안의 식재료를 기반으로 레시피 추천!
                <br />
                ▪️ 정석적인 레시피 뿐만 아니라 다른 사용자가 만든 인기 있는
                레시피도 추천해줍니다.
                <br />
                ▪️ 본인 만든 레시피도 공유할 수 있습니다.
                <br />
                ▪️ 좋아요한 레시피와 냉장고 안의 식재료를 기반으로 받은 추천
                레시피로 식단을 만들 수 있습니다.
                <br />
              </div>
            </div>
            <div className='section section2'>
              <div className='section-title'>🔶 주요기능</div>
              <div className='section-content'>
                ▪️ 드래그 앤 드랍기능 이용하여 냉장고 식재료 보관방법에 정리할
                수 있는 기능
                <br />
                ▪️ 식단 월별보기를 위한 달력 기능
                <br />
                ▪️ 레시피추가/삭제/수정 기능 <br />
                ▪️ 식단 추가/ 삭제/ 월별보기 기능
                <br />
                ▪️ 식단을 짜기 위해 추천된 레시피, 좋아요한 레시피를 볼 수 있는
                기능
                <br />
                ▪️ 레시피 좋아요 기능 <br />
                ▪️ 냉장고 식재료를 기반으로 추천기능
                <br />
              </div>
            </div>
            <div className='section section3'>
              <div className='section-title'>🔶 보러가기</div>
              <div className='section-content'>
                [배포 링크] :
                <button onClick={() => window.open("https://eatmeup.me")}>
                  EatMeUp 보러가기
                </button>
                <br />
                [팀프로젝트문서] :
                <a href='https://codestates.notion.site/7-OSamEil-EatMeUp-9fd80214b01d439b92c9225f34ffe431'>
                  문서보러가기
                </a>
                <br />
                [깃헙 레포] :
                <a href='https://github.com/codestates/EatMeUp'>
                  README.md보러가기
                </a>
              </div>
            </div>
            <div className='section section4'>
              <div className='section-title'>🔶 사용 스택</div>
              <div className='section-content'>
                <span>React </span>
                <span>Redux</span>
                <span>Styled-component</span>
                <span>Javascript</span>
              </div>
            </div>
          </DescriptionBox>
        </SlideContainer>

        <SlideContainer>
          <div className='header'>
            👉 내 주변 전기차 충전소 찾기 및 자주가는 충전소 주소를 저장할 수
            있는 웹/앱 애플리케이션
          </div>
          <hr />
          <ImageBox>
            <img src='../image/brrrrng/brrrrng.png' alt='project2' />
          </ImageBox>
          <DescriptionBox>
            <div className='title-box'>
              <div className='title'>
                <img src='../image/brrrrng/br.ico' alt='logo' />
                <h1>BRRRRng</h1>
              </div>
              <hr />
              <div className='subtitle'>
                <span>코드스테이츠 First Project(4인/2week)</span>
              </div>
            </div>

            <div className='section section1'>
              <div className='section-title'>🔶 서비스</div>
              <div className='section-content'>
                ▪️ 자주가는 충전소를 저장하여 바로 충전소 충전 상태를 확인해
                보세요
                <br />
                ▪️ 내 차가 어떤 충전기 타입 소켓을 가지고 있는 지 검색해서
                내차리스트에 저장할 수 있습니다.
                <br />
                ▪️ 찾고 싶은 주소의 충전소가 어디에 있는지 알고 싶으신가요? 한번
                검색해 보세요!
                <br />
                ▪️ 충전기의 상태를 알 수 있습니다.
                <br />
              </div>
            </div>
            <div className='section section2'>
              <div className='section-title'>🔶 주요기능</div>
              <div className='section-content'>
                ▪️ 전기차 충전기 상태, 전기차 충전기 타입, 주소, 충전기 개수를
                상세히 알 수 있음
                <br />
                ▪️ 주소 검색을 통해 검색한 주소검색 기반 전기차 충전기 위치 표시
                <br />
                ▪️ 자주가는 충전기 주소로 바로 검쌕할 수 있는 기능
                <br />
                ▪️ 자주가는 충전기 주소를 저장할 수 있는 기능
                <br />
                ▪️ 내차를 검색하여 충전기 타입을 알 수 있으며, 차를 내차리스트에
                저장할 수 있는 기능
                <br />
              </div>
            </div>
            <div className='section section3'>
              <div className='section-title'>🔶 보러가기</div>
              <div className='section-content'>
                [배포 링크] :
                <button onClick={() => window.open("https://brrrrng.ga")}>
                  BRRRRng 보러가기
                </button>
                <br />
                [깃헙 레포] :
                <a href='https://github.com/codestates/BRRRRng'>
                  README.md보러가기
                </a>
              </div>
            </div>
            <div className='section section4'>
              <div className='section-title'>🔶 사용 스택</div>
              <div className='section-content'>
                <span>React </span>
                <span>Redux</span>
                <span>Javascript</span>
              </div>
            </div>
          </DescriptionBox>
        </SlideContainer>

        <SlideContainer>
          <div className='header'>
            👉 작업치료사를 위한 환자 인지치료프로그램
          </div>
          <hr />
          <ImageBox>
            <img src='../image/cog/cog.png' alt='project3' />
          </ImageBox>
          <DescriptionBox>
            <div className='title-box'>
              <h1>BRAIN (cognition-training)</h1>
              <hr />
              <div className='subtitle'>
                <span>1인 Project(1인/2month)</span>
              </div>
            </div>
            <div className='section section1'>
              <div className='section-title'>🔶 서비스</div>
              <div className='section-content'>
                ▪️ 작업치료사분들이 인지치료 시 인지훈련 프로그램으로 인지훈련을
                할 수 있습니다.
                <br />
                ▪️ 여러가지 뇌활동 영역별로 인지훈련을 할 수 있습니다.
                <br />
                ▪️ 비싼 인지치료 수가를 대신하는 인지훈련을 체계적으로 할 수
                있습니다. <br />
              </div>
            </div>
            <div className='section section2'>
              <div className='section-title'>🔶 주요기능</div>
              <div className='section-content'>
                ▪️ 여러가지 뇌활동 영역별로 인지 훈련 프로그램을 훈련할 수 있는
                기능
                <br />
                ▪️ 작업치료를 기반으로 환자 인지 재활 치료 훈련
                <br />
              </div>
            </div>
            <div className='section section3'>
              <div className='section-title'>🔶 보러가기</div>
              <div className='section-content'>
                [배포 링크] :
                <button
                  onClick={() => window.open("https://cog-program.vercel.app")}
                >
                  BRAIN 보러가기
                </button>
                <br />
                [깃헙 레포] :
                <a href='https://github.com/segyong56/cogProgram'>
                  README.md보러가기
                </a>
              </div>
            </div>
            <div className='section section4'>
              <div className='section-title'>🔶 사용 스택</div>
              <div className='section-content'>
                <span>HTML</span>
                <span>CSS</span>
                <span>Javascript</span>
              </div>
            </div>
          </DescriptionBox>
        </SlideContainer>


        <SlideContainer>
          <div className='header'>
            👉 세경's portfolio
          </div>
          <hr />
          <ImageBox>
            <img src='../image/portfolio.png' alt='project2' />
          </ImageBox>
          <DescriptionBox>
            <div className='title-box'>
              <div className='title'>
                <img src='../sg.ico' alt='logo' />
                <h1> 세경's portfolio</h1>
              </div>
              <hr />
              <div className='subtitle'>
                <span>1인 Project(1인/1week)</span>
              </div>
            </div>
            <div className='section section2'>
              <div className='section-title'>🔶 기능구현</div>
              <div className='section-content'>
                ▪️ 반응형 페이지 구현
                <br />
                ▪️ GoToTop버튼 구현
                <br />
                ▪️ scroll값에 따른 애니메이션 구현
                <br />
                ▪️ 타이핑효과 애니메이션 구현
                <br />
              </div>
            </div>
            <div className='section section3'>
              <div className='section-title'>🔶 보러가기</div>
              <div className='section-content'>
                [배포 링크] :
                <button onClick={() => window.open("http://segyongportfolio-deploy.s3-website.ap-northeast-2.amazonaws.com")}>
                  Portfolio 보러가기
                </button>
                <br />
                [깃헙 레포] :
                <a href='https://github.com/segyong56/portfolio'>
                  README.md보러가기
                </a>
              </div>
            </div>
            <div className='section section4'>
              <div className='section-title'>🔶 사용 스택</div>
              <div className='section-content'>
                <span>React </span>
                <span>Styled-components</span>
                <span>Css</span>
                <span>Swiper</span>
              </div>
            </div>
          </DescriptionBox>
        </SlideContainer>
      </ProjectContainer>
    </>
  );
};

export default Project;
