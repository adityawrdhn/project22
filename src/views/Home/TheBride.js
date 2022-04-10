import React from "react";
import styled, { css } from "styled-components";
import { layout, space, typography } from "styled-system";
import { Fade } from "react-reveal";
import Segment from "../../components/Segment";
import { Section } from "./styles";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import f1 from "../../assets/f1.jpg";
import ImageEffect from "../../components/ImageEffect";

const TextInfo = styled.h4`
  font-family: "The Amsterdam", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: 1px;
  color: ${(p) => p.theme.colors.black};
  margin-bottom: 0px;
  color: ${(p) => p.theme.colors.primary};
  background: linear-gradient(
    45deg,
    ${(p) => p.theme.colors.secondary} 0%,
    ${(p) => p.theme.colors.primary} 100%
  );
  font-weight: 400;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 100% 100%;
  background-position: 100%;
  transition: background-position 500ms ease;
  text-decoration: none;
  ${layout}
  ${typography};
  ${space}
  i {
    color: ${(p) => p.theme.colors.primary};
    padding-left: 8px;
    padding-right: 8px;
  }
  a {
    padding-left: 8px;
    padding-right: 8px;
    text-decoration: underline !important;
  }
  @media ${(props) => props.theme.devices.sm} {
    a {
      color: ${(p) => p.theme.colors.black} !important;
      text-decoration: underline !important;
    }
  }
`;
const TextTitle = styled.h1`
  display: inline-block;
  font-weight: 900;
  font-size: 48px;
  line-height: 60px;
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
const TextCaption = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  color: ${(p) => p.theme.colors.black70};
  text-align: center;
  margin: 4px;
  ${layout};
  ${space};
  ${typography};
  em {
    text-decoration: underline;
    color: ${(p) => p.theme.colors.primary};
    a:-webkit-any-link {
      color: ${(p) => p.theme.colors.primary};
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
const OverrideSegment = styled(Segment)`
  text-align: center;
`;

const TheBride = () => {
  return (
    <Section id="introduction">
      <Container noGutter mobileGutter>
        <Row justifyContent="center" alignItems="center">
          <Col sm={12} md={12} lg={5}>
            <ImageEffect image={f1} />
          </Col>
          <Col sm={12} md={12} lg={5}>
            <OverrideSegment mb={48}>
              <Fade up>
                <Segment className="is-desktop">
                  <TextTitle mb={48} canHover>
                    The Groom & Bride
                  </TextTitle>
                </Segment>
                <Segment className="is-mobile">
                  <TextTitle
                    mb={48}
                    className="is-mobile"
                    canHover
                    fontSize={40}
                    lineHeight="50px"
                  >
                    The Groom & Bride
                  </TextTitle>
                </Segment>
              </Fade>
              <Fade up delay={100}>
                <TextInfo px={8}>Aditya Bayu Wardhana</TextInfo>
                <TextCaption>
                  Son of Mr. Musbaful Munir & Mrs. Rohmaniswati
                </TextCaption>
              </Fade>
              <OverrideSegment my={28}>
                <TextInfo fontSize={60}>&</TextInfo>
              </OverrideSegment>
              <Fade up delay={100}>
                <TextInfo px={8}>Putri Rizky Wulandari</TextInfo>
                <TextCaption>
                  Daughter of Mr. H. Nachmad & Mrs. Hj. Namilatin
                </TextCaption>
              </Fade>
            </OverrideSegment>
          </Col>
        </Row>
        {/* <Row justifyContent="center" mt={40}>
          <Col>
            <Slide up delay={200}>
              <Segment
                display="flex"
                flexDirection="column"
                alignItems="center"
                color="black70"
              >
                <TextCaption
                  mx={20}
                  my={0}
                  fontStyle="italic"
                  textAlign="center"
                >
                  "Apa yang tak ku temukan di dalam filsafat, aku temukan pada
                  dirimu."
                </TextCaption>
                <TextCaption
                  mx={20}
                  my={0}
                  fontStyle="italic"
                  textAlign="center"
                >
                  ~ Sutan Sjahrir kepada istrinya, Maria Duchateau, 1935 ~
                </TextCaption>
              </Segment>
            </Slide>
          </Col>
        </Row> */}
      </Container>
    </Section>
  );
};

export default TheBride;
