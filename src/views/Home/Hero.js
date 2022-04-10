import React from "react";
import { Fade } from "react-reveal";
import styled, { css } from "styled-components";
import { typography } from "styled-system";
import { space } from "styled-system";
import { layout } from "styled-system";
import Button from "../../components/Button";
import AnchorLink from "../../components/ScrollSpyMenu/AnchorLink";
import Segment from "../../components/Segment";
import { useTheme } from "../../containers/Theme";
import { Section } from "./styles";
const TextTitle = styled.h1`
  ${({ theme }) => css`
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
      background: linear-gradient(
        45deg,
        ${theme.colors.secondary} 0%,
        ${theme.colors.primary} 100%
      );
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
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${(p) => p.theme.colors.black};
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

const Hero = ({ guest }) => {
  const { setAudio } = useTheme();
  return (
    <Section id="hero" bg="whiteHover" flexDirection="row">
      <Segment
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection="column"
        width="100%"
      >
        <Fade up>
          <TextCaption mb={16}>THE WEDDING OF</TextCaption>
          <TextTitle mb={16} px={8}>
            <em>Aditya & Putri</em>
          </TextTitle>
        </Fade>
      </Segment>
      <Segment
        position="absolute"
        bottom={50}
        left={0}
        right={0}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {guest && (
          <TextCaption textAlign="center">
            Dear, <em>{guest}</em>
            <br /> you're invited to
            <br /> our wedding celebration!
          </TextCaption>
        )}
        <AnchorLink href="#introduction" onClick={() => setAudio(true)}>
          <Button>Open Invitation</Button>
        </AnchorLink>
      </Segment>
    </Section>
  );
};

export default Hero;
