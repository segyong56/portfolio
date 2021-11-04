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
    window.scrollTo(0,0)
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
            <h1 className='underline'>Who are you?</h1>
            <p>
              저는 지금은 React 중심으로 Web 개발이 가능하며, Redux 사용하여 웹
              개발 경험이 있습니다. 프로젝트에서 백 엔드를 맡진 않았지만, clone
              코딩을 통해서 혼자 공부하며 배워 node.js와 mongoDB, mySQL에 대한
              이해도가 있는
              <span className='strong'>프론트 엔드 개발자 이세경</span> 입니다.
            </p>
          </SefieDescription>
        </Section1>

        <h1>■ Introduction</h1>
        <Section2>
          <SefieDescription>
            <p>
              안녕하세요 <strong>프론트앤드 개발자 이세경</strong>입니다. 저는
              작년까지만 해도
              <strong>작업치료사</strong>였습니다. 지금은{" "}
              <strong>"작업치료사이자 프론트엔드 개발자"</strong>입니다. 네,
              저는
              <span className='strong'>
                새로운 도전을 두려워하지만 두려워하지 않는 사람
              </span>
              입니다. 저에게 두려움을 주었던 부분은 자신이 성장하기 위해서
              얼마나 많은 노력을 해야하는지 어떤 어려움이 있어도 포기하지 않아야
              한다는걸 잘 알고 있었기 때문입니다. 하지만 두려워하지 않는 사람인
              이유는 저에게 주는 두려움을 노력으로 이겨내고 개발자 되었기
              때문이라고 생각합니다. 앞으로 저는 제가 작업치료사로서 일한 경험을
              토대로 몸이 불편하신 분들이 느끼는 불편함 점을 잘 생각해서, 신체적
              장애가 있으셔도 또 앱을 사용하는데있어 어려움을 느끼는시는
              노인분들께서도 서비스를 이용하는데 불편함이 없는 서비스를
              개발하는, 유저입장을 생각하는 개발자가 되고 싶은 개발자 입니다.
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
                제가 처음 개발자라는 직업을 접하게 되었던 것은{" "}
                <span className='strong'>"책"</span> 이였습니다.
                <br />
                래리페이지의 말처럼 저에게 들어온 정보가 저의 인생을 달라지게
                만들었습니다.
                <br />
                <br />
                이직을 해야겠다고 결정한 후 어떤 직업을 선택해야할지, 나는 꿈이
                무엇인지에 대해서 많은 고민을 했던 저에게 어둠 속 한 줄기의
                빛처럼 찾아왔던 직업이 개발자였습니다. <br />
                첫 직업을 가진 후 직업이라는 것에 대해 진지하게 생각하게 되었고
                잘할 수 있고 하고싶은 일을 해야겠다고 생각하면서 이직을 결정하게
                되었습니다.
                <br />
                <br />
                생각이 항상 많았고 생각을 표현하고 싶은 욕구가 강했던 저는
                개발자라는 직업에 흥미를 안끌릴 수 없었으며, 어떤 아이디어를
                실현가능하게 만든다는 매력적인 점이 개발자라는 직업을 하고
                싶다고 생각하게 하였고, 생각이 많은 저에게 제가 가장 잘할 수
                있는 일, 생각하기를 많이 하는 개발자를 하면 잘할수 있을 것
                같다는 생각을 하게 되었습니다. 그렇게 개발자가 되어야겠다고
                생각하게 되었고, 개발자가 되기 위해 인생도전기가 시작되었답니다.
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
              저는
              <span className='strong'>
                "사용하는 유저가 신체적 불편함이 있어도 편리하고 쉽게 이용할 수
                있도록 유저입장에서 생각하는 개발자"
              </span>
              가 되고 싶습니다. 저는 개발자로서 두가지 목표를 가지고 있습니다.
              <br />
              <br />
              <span className='strong_1'>첫번째, </span>작업치료사로 일한 경험을
              토대로 신체적 장애가 있을 때 어떠한 불편함이 있는지를 생각하며
              모든 유저가 서비스 사용하는 데 있어 좀 더 쉽고 편리하게 기능을
              구현하기가 첫번째 목표입니다.
              <br />
              <br />
              <span className='strong_1'>두번째, </span> 몸이 불편하시분들을
              위한 서비스를 만들어 보고 싶습니다. 구체적으로는 택시를 부르는
              앱은 시중에 많이 있습니다. 하지만 신체적 장애가 있으신 분들 혹은
              노인분들이 사용하기에 편한지 한번 생각해보면 사용하기에 많은
              부분이 어렵습니다. 몸이 불편하신 분들을 도와주는 서비스를
              포함한다면 좀 더 많은 사람들이 이용할 수 있지 않을까 생각해
              보았습니다. 이러한 불편함을 편리하게 만들어주는 서비스를 개발하는
              것이 두번째 목표입니다.
              <br />
              <br />
              <strong>
                이렇게 모든 사람이 평등하게 사용할 수 있고, 사용하는 사람들이
                느끼는 불편함이 먼지를 먼저 생각하며 개발하는 개발자가 되도록
                노력할 것 입니다.
              </strong>
            </p>
          </Answer>
        </QuestionBox>
      </AboutMe>
    </>
  );
};

export default About;
