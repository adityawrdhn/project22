import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
import { typography } from "styled-system";
import { layout } from "styled-system";
import { space } from "styled-system";
import Segment from "../../components/Segment";

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
const TextCaption = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 1px;
  text-align: center;
  color: ${(p) => p.theme.colors.black};
  ${layout};
  ${space};
  ${typography};
`;

const Footer = () => {
  return (
    <Segment
      as="section"
      zIndex={10}
      bg="white"
      minHeight={"20vh"}
      display="flex"
      flexDirection={"row"}
    >
      <Segment
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection="column"
        width="100%"
      >
        <Fade up>
          <TextCaption mb={0}>Thank You</TextCaption>
          <TextInfo mb={0} px={4}>{"  Aditya & Putri  "}</TextInfo>
        </Fade>
      </Segment>
    </Segment>
  );
};

export default Footer;
