import React, { useState, useEffect } from "react";
import {
  QuestionBox,
  Question,
  Answer,
  AboutMe,
  Section1,
  SefieBox,
  SefieDescription,
  Section2,
  Section3,
  Skills,
  Educations,
  BookStoryBox,
  CategorySign,
  ButtonTag,
  Section,
} from "../Style/Style";
import GoToTop from "../GoToTop/GoToTop";

const About = () => {
  const [position, setPosition] = useState(0);

  const onScroll = () => {
    setPosition(window.scrollY);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {position > 0 ? <GoToTop /> : ""}
      <AboutMe>
        {/* 자기소개서 */}
        <div className='title'>👩🏻‍💻About Me</div>
        <Section1>
          <SefieBox>
            <img src='../../image/me_2.jpg' alt='me' />
          </SefieBox>
          <SefieDescription>
            <h1 className='underline'>뇌졸중환자 치료사에서 이젠 IT개발자</h1>
            <p>
              저는 지금은 <strong>React</strong> 중심으로 Web 개발이 가능하며,{" "}
              <strong>Redux</strong> 사용하여 웹 개발 경험이 있습니다.
              프로젝트에서 백 엔드를 맡진 않았지만, clone 코딩을 통해서 혼자
              공부하며 배워 <strong>Node.js</strong>와 <strong>MongoDB</strong>,{" "}
              <strong>mySQL</strong>에 대한 이해도가 있는
              <span className='strong'>프론트 엔드 개발자 이세경</span> 입니다.
            </p>
          </SefieDescription>
        </Section1>

        <h1>■ Introduction</h1>
        <Section2>
          <SefieDescription>
            <p>
              저는 뇌졸중환자를 치료하는 <strong>작업치료사</strong>에서 이젠
              <strong> IT개발자</strong>, 이세경입니다. <br />
              IT개발자, '<strong>프론트엔드 개발자</strong>'로서 저를
              소개해보도록 하겠습니다. <br /> <br />
              저는 <span className='strong'>3가지의 핵심 역량</span>을 갖춘{" "}
              <strong>프론트엔드 개발자</strong>입니다. <br />
              <strong>👉 팀플레이를 잘하는 리더십</strong> : 코드스테이츠
              수강하는 수강생분들과 함께 공부하고자 스터디모임을 개설 후 같이
              성장하고 있습니다. <button
                onClick={() =>
                  window.open(
                    "https://github.com/dagchigo-ssgtudy/dagchigo-ssgtudy",
                  )
                }
              >[개발자 스터디 모임 깃헙 레포]</button>
              <br />
              <strong>👉 계속 공부하며 성장에 대한 열정</strong>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/segyong56/TIL",
                  )
                }
              >[TIL 깃헙 레포]</button> <br />
              <strong>
                👉 의학적 지식과 IT기술을 접목시킬 줄 아는 전문가
              </strong>{" "}
              : 작업치료사로 일하며 인체역학, 신경계, 일상생활동작에 있어서
              동작분석에 대한 지식을 갖추고 치료해 왔습니다.{" "}
              <button
                onClick={() =>
                  window.open(
                    "https://sunny-droplet-027.notion.site/Occupation-therapist-b71337d9bbd94a7991bcaba085db1571",
                  )
                }
              >
                [작업치료사]
              </button>
              <span className='small_txt'>
                (제가 작업치료사로서 어떻게 일해왔는 지, 무엇을 배웠는지
                간단하게 정리해보았습니다)
              </span>
            </p>
          </SefieDescription>
        </Section2>

        {/* Skills */}
        <h1>■ Skills</h1>
        <Section3>
          <Skills>
            <div className='title-sign'>👆 Language & Library</div>
            <Section>
              <CategorySign>✅ Strong Language</CategorySign>
              <br />
              <ButtonTag>React</ButtonTag>
              <ButtonTag>Redux</ButtonTag>
              <ButtonTag>Javascript</ButtonTag>
              <ButtonTag>CSS </ButtonTag>
            </Section>
            <Section>
              <CategorySign>✅ Familiar Language</CategorySign>
              <br />
              <ButtonTag>Styled-Component</ButtonTag>
              <ButtonTag>Node.js</ButtonTag>
              <ButtonTag>MongoDB </ButtonTag>
              <ButtonTag>MySQL </ButtonTag>
            </Section>
            <Section>
              <CategorySign>✅ I'm learning</CategorySign>
              <br />
              <ButtonTag>Typescript</ButtonTag>
              <ButtonTag>React native</ButtonTag>
            </Section>
          </Skills>
          <Educations>
            <div className='title-sign'>👆 Education</div>
            <p>
              🎓 코드스테이츠 (CodeStates) Software Engineering 30기
              <span className='term'>2021.05 - 2021.10</span> <br />
              🎓 국가평생교육진흥원 컴퓨터공학과(학사)학위취득{" "}
              <span className='term'>2019-05 - 2022-02</span>
              <br />
              🎓 더조은 컴퓨터학원(국비지원학원) 자바(JAVA)프로그래밍(초급)
              <span className='term'>2019-01-22 - 2019-03-21</span> <br />
              🎓 더조은 컴퓨터학원(국비지원학원) 2D그래픽(일러스트,포토샵)
              <span className='term'>2019-01-29 - 2019-03-28</span>
            </p>
          </Educations>
        </Section3>

        {/* Q&A */}
        <h1>■ FAQ</h1>

        <QuestionBox>
          <Question>
            <h2>
              Q. 개발자가 된 계기가 무엇이며, 왜 개발자라는 직업을 선택하게
              되었나요?
            </h2>
          </Question>
          <Answer>
            <BookStoryBox>
              <div className='image'>
                <img src='../../image/book_1.jpg' alt='me' />
              </div>
              <div className='remark'>
                <div>
                  “인생은 어떤 정보가 손에 들어오는 지에 따라 달라질 가능성이
                  있다”
                </div>
                <div className='text'>
                  - 래리 페이지(구글창업자) - <br />
                  '구글의 철학” 중에서
                </div>
              </div>
            </BookStoryBox>
            <div>
              <p>
                처음에는 흥미로 시작하게 되었습니다. 책을 계기로 개발자라는
                직업에 대해서 간접경험을 하며 흥미를 갖게 되었고 아이디어를 내어
                작은 프로그램을 만들면서 개발자라는 직업을 직업으로 삼고싶다고
                생각이 들어 이직을 선택하게 되었습니다. <br />
                <br />
                저에게는 개발자로 이직을 선택하게 된{" "}
                <span className='strong'>확실한 3가지 이유</span>가 있습니다.{" "}
                <br />
                💎{" "}
                <strong>
                  [potentiality, 가능성] 작은아이디어가 세상의 혁신을 만들 수
                  있다는 가능성
                </strong>
                , <br />
           
                💎{" "}
                <strong>
                  [Personality–job fit, 적합성] INTJ와 ENTJ성격으로 개발자
                  직무에 적합한 성격
                </strong>
                , <br />
             
                💎{" "}
                <strong>
                  [inquisitiveness, 강한 호기심] 끝까지 알때까지 포기하지 않고
                  파고드는 성격 입니다
                </strong>
                .
              </p>
            </div>
          </Answer>
        </QuestionBox>
        <br />
        <QuestionBox>
          <Question>
            <h2>Q. 앞으로 어떤 개발자가 되고싶나요?</h2>
          </Question>
          <Answer>
            <p>
              앞으로
              <spna className='strong'>
                사용자의 인체역학을 생각하며 손쉬운 사용을 유도하는 UX를
                개발하는 개발자
              </spna>
              가 되려고 노력할 것 입니다. <br />
              <br />
              <strong>
                "스마트폰 사용 중 엄지손가락 '욱신'…드퀘르뱅증후군 주의"
              </strong>
              이러한 기사를 보았습니다. <br />
              <strong>드퀘르뱅 증후군</strong>은 안쪽과 중앙, 바깥쪽에 있는 여러
              개의 힘줄(건)을 감싸고 있는 막에 생긴 염증으로 인한 질환입니다.
              이러한 증후군 같은 경우는 엄지손가락의 운동이 굽힘, 운동범위
              이상의 폄, 벌림운동의 반복으로 인한 근육 피로도에 의해 생겨나게
              됩니다. <br />
              스마트폰을 사용할 때 스크롤을 올리고 내리는 동작을 생각해보면
              엄지손가락의 운동이 굽힘, 운동범위 이상의 폄, 벌림운동의
              반복적으로 일어납니다. 반복적인 사용에 의한 근육 피로도를 최소화
              하기 위해서 프론트엔드 개발자는 아래쪽 하단을 두번 탭하여 스크롤을
              내릴 수 있도록 하는 기능, 또는 하단에 버튼조작으로 스크롤을 내릴
              수 있는 기능을 추가하게 된다면 엄지손가락의 운동범위을 넘어서
              나오지 않게 됩니다. <br />
              이렇게 엄지손가락 사용을 최소화하게 된다면, 근육피로도를 줄일 수
              있습니다. <br />
              피로도를 줄인 만큼 서비스를 이용하는 이용자는 저희 서비스에 더
              오래 머물도록 할 수 있다고 생각합니다. <br />
            </p>
          </Answer>
        </QuestionBox>
      </AboutMe>
    </>
  );
};

export default About;
