import React from "react";
import { Fade, Slide } from "react-reveal";
import styled, { css } from "styled-components";
import { typography } from "styled-system";
import { space } from "styled-system";
import { layout } from "styled-system";
import Button from "../../components/Button";
import Col from "../../components/Col";
import Mouse from "../../components/Mouse";
import Row from "../../components/Row";
import AnchorLink from "../../components/ScrollSpyMenu/AnchorLink";
import Segment from "../../components/Segment";
import { useTheme } from "../../containers/Theme";
import { Section } from "./styles";
const TextTitle = styled.h1`
  ${({ theme, cover }) => css`
    font-family: "The Amsterdam", sans-serif;
    position: relative;
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 80px;
    letter-spacing: 0.2px;
    color: ${theme.colors.black};
    ${space};
    em {
      padding: 0 24px;
      color: ${theme.colors.primary};
      background: ${cover
        ? "white"
        : `linear-gradient(
        45deg,
        ${theme.colors.secondary} 0%,
        ${theme.colors.primary} 100%
      )`};
      font-weight: 400;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 100% 100%;
      background-position: 100%;
      transition: background-position 500ms ease;
      text-decoration: none;
      white-space: pre;
    }
    @media ${theme.devices.sm} {
      font-size: 52px;
    }
  `}
`;
const TextCaption = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 1px;
  color: ${(p) => (p.cover ? "white" : p.theme.colors.black)};
  ${layout};
  ${space};
  ${typography};
  em {
    text-decoration: underline;
    color: ${(p) => (p.cover ? "white" : p.theme.colors.black)};
    font-weight: 600;
    a:-webkit-any-link {
      color: ${(p) => (p.cover ? "white" : p.theme.colors.black)};
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const TextInfo = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${(p) => (p.cover ? "white" : p.theme.colors.black)};
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

const Hero = ({ guest, cover, onClick }) => {
  const { setAudio } = useTheme();
  return (
    <Section id="hero" bg="whiteHover" flexDirection="row" cover={cover}>
      <Segment
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection="column"
        width="100%"
      >
        <Fade up>
          <TextInfo mb={16} cover={cover}>
            THE WEDDING OF
          </TextInfo>
          <TextTitle mb={16} px={8} cover={cover}>
            <em>Aditya & Putri</em>
          </TextTitle>
        </Fade>
      </Segment>
      <Segment
        position="absolute"
        bottom={100}
        left={0}
        right={0}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {guest && cover && (
          <TextCaption cover={cover} textAlign="center">
            Dear, <em>{guest}</em>
            <br /> you're invited to
            <br /> our wedding celebration!
          </TextCaption>
        )}
        {cover ? (
          <AnchorLink
            onClick={() => {
              onClick();
              setAudio(true);
            }}
          >
            <Button>Open Invitation</Button>
          </AnchorLink>
        ) : (
          <Row justifyContent="center" mt={40}>
            <Col>
              <Slide up delay={200}>
                <Segment
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  color="black70"
                  mb={16}
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
              <AnchorLink href="#introduction">
                <Mouse />
              </AnchorLink>
            </Col>
          </Row>
        )}
      </Segment>
    </Section>
  );
};

export default Hero;
