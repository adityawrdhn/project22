import React from "react";
import { Fade } from "react-reveal";
import styled, { css } from "styled-components";
import { space } from "styled-system";
import { typography } from "styled-system";
import { layout } from "styled-system";
import Col from "../../components/Col";
import Container from "../../components/Container";
import InfiniteScroll from "../../components/InfiniteScroll";
import Row from "../../components/Row";
import Segment from "../../components/Segment";
import Timeline from "../../components/Timeline";
import { Section } from "./styles";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";
import img11 from "../../assets/11.jpg";
import img12 from "../../assets/12.jpg";
import img13 from "../../assets/13.jpg";
import img14 from "../../assets/14.jpg";
import img15 from "../../assets/15.jpg";
import img16 from "../../assets/16.jpg";
import img17 from "../../assets/17.jpg";
import img18 from "../../assets/18.jpg";
import img19 from "../../assets/19.jpg";
import img20 from "../../assets/20.jpg";
import img21 from "../../assets/21.jpg";
import img22 from "../../assets/22.jpg";
import img23 from "../../assets/23.jpg";
import Image from "../../components/Image";
const TextTitle = styled.h1`
  font-weight: 900;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 1px;
  color: ${(p) => p.theme.colors.black};
  background: linear-gradient(
    45deg,
    ${(p) => p.theme.colors.secondary} 0%,
    ${(p) => p.theme.colors.primary} 50%,
    ${(p) => p.theme.colors[p.color] || p.theme.colors.black} 50%
  );
  margin-bottom: 16px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 210% 100%;
  background-position: 100%;
  transition: background-position 500ms ease;
  text-decoration: none;
  display: inline-block;
  ${layout};
  ${typography};
  ${space};
  em {
    color: ${(p) => p.theme.colors.primary};
  }
  &:hover {
    color: ${(p) => p.theme.colors.primary};
    ${(p) =>
      p.canHover &&
      css`
        background-position: 0 100%;
      `}
  }
`;
const TextInfo = styled.p`
  margin-top: 0px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  color: ${(p) => p.theme.colors.black70};
  ${layout}
  ${space}
  ${typography}
`;

const OurStory = () => {
  return (
    <Section id="ourstory">
      <Container noGutter mb={100}>
        <Row justifyContent="center">
          <Col md={12} lg={6} wide={6}>
            <Segment className="is-desktop" textAlign="center">
              <TextTitle
                textAlign="center"
                color="black"
                fontSize={48}
                canHover
                lineHeight={"50px"}
              >
                Love Story
              </TextTitle>
            </Segment>
            <Segment className="is-mobile" textAlign="center">
              <TextTitle
                color="black"
                canHover
                fontSize={48}
                lineHeight={"50px"}
              >
                Love Story
              </TextTitle>
            </Segment>
            <TextInfo textAlign="center">The rest of our lives.</TextInfo>
            <Segment height={240}>
              <InfiniteScroll>
                <div>
                  <Image src={img1} alt="our-story" />
                  <Image src={img2} alt="our-story" />
                  <Image src={img3} alt="our-story" />
                  <Image src={img4} alt="our-story" />
                  <Image src={img5} alt="our-story" />
                  <Image src={img6} alt="our-story" />
                  <Image src={img7} alt="our-story" />
                  <Image src={img8} alt="our-story" />
                  <Image src={img9} alt="our-story" />
                  <Image src={img10} alt="our-story" />
                  <Image src={img11} alt="our-story" />
                  <Image src={img12} alt="our-story" />
                  <Image src={img13} alt="our-story" />
                  <Image src={img14} alt="our-story" />
                  <Image src={img15} alt="our-story" />
                  <Image src={img16} alt="our-story" />
                  <Image src={img17} alt="our-story" />
                  <Image src={img18} alt="our-story" />
                  <Image src={img19} alt="our-story" />
                  <Image src={img20} alt="our-story" />
                  <Image src={img21} alt="our-story" />
                  <Image src={img22} alt="our-story" />
                  <Image src={img23} alt="our-story" />
                </div>
                <div>
                  <Image src={img1} alt="our-story" />
                  <Image src={img2} alt="our-story" />
                  <Image src={img3} alt="our-story" />
                  <Image src={img4} alt="our-story" />
                  <Image src={img5} alt="our-story" />
                  <Image src={img6} alt="our-story" />
                  <Image src={img7} alt="our-story" />
                  <Image src={img8} alt="our-story" />
                  <Image src={img9} alt="our-story" />
                  <Image src={img10} alt="our-story" />
                  <Image src={img11} alt="our-story" />
                  <Image src={img12} alt="our-story" />
                  <Image src={img13} alt="our-story" />
                  <Image src={img14} alt="our-story" />
                  <Image src={img15} alt="our-story" />
                  <Image src={img16} alt="our-story" />
                  <Image src={img17} alt="our-story" />
                  <Image src={img18} alt="our-story" />
                  <Image src={img19} alt="our-story" />
                  <Image src={img20} alt="our-story" />
                  <Image src={img21} alt="our-story" />
                  <Image src={img22} alt="our-story" />
                  <Image src={img23} alt="our-story" />
                </div>
              </InfiniteScroll>
            </Segment>
          </Col>
        </Row>
        <Row justifyContent="center">
          <Col md={12} lg={6} wide={6}>
            <Fade up>
              <Timeline>
                <li className="event" data-date="April 2021">
                  <h3>First Meet</h3>
                  <p>
                    By the irony of fate, we met at a stationery shop in our
                    hometown & chewed the fat for about five mins which brought
                    both of us to realize that we live in the same neighborhood,
                    work in Jakarta, and currently at home due to the
                    pandemic, but not in any way knew each other before. Who
                    would have thought, rite? We were thoroughly bowled over! 🙀😹
                  </p>
                </li>
                <li className="event" data-date="June 2021">
                  <h3>Start Dating</h3>
                  <p>
                    We went through four meetings and had dinner at the fourth
                    one, which grew from small chitchat to a long and
                    interesting tête-à-tête that we ended up marking the day as
                    our official dating date.👩🏻‍🤝‍👨🏼👩🏻‍❤️‍👨🏻  
                  </p>
                </li>
                <li className="event" id="date" data-date="August 2021">
                  <h3>Engagement</h3>
                  <p>
                    Our relationship is turning out to be as easy as pie. Both
                    of our parents give us approval! Then we both wouldn't
                    dilly-dally and set up an engagement only within fourteen
                    days! &&& ta-da! Finally we got engaged! 💐💍
                  </p>
                </li>
                <li className="event" data-date="May 2022">
                  <h3>Yes!, We'll be married</h3>
                  <p>
                    Here we are now! Counting down to our big day of our life &
                    invite you to celebrate it with us. Psst, our hearts are
                    getting pit-a-pat day by day 😍🥰💓
                  </p>
                </li>
              </Timeline>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default OurStory;
