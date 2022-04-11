import React from "react";
import styled from "styled-components";
import { layout, space, typography, border } from "styled-system";
import { Slide } from "react-reveal";
import Segment from "../../components/Segment";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Icon from "react-icons-kit";
import { mapPin } from "react-icons-kit/feather";
import { Section } from "./styles";
import ImageEffect from "../../components/ImageEffect";
import f2 from "../../assets/f2.jpg";
import { calendar } from "react-icons-kit/feather";

const TextTitle = styled.h1`
  display: inline-block;
  font-weight: 900;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 1px;
  color: white;
  ${layout};
  ${typography};
  ${space};
  em {
    color: ${(p) => p.theme.colors.primary};
  }
`;
const TextInfo = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  color: white;
  ${space};
  ${typography};

  a {
    span {
      margin-left: 8px;
      border-bottom: 1px dotted ${(p) => p.theme.colors.primary};
    }
  }
`;
const TextTag = styled.h4`
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 1px;
  color: ${(p) => p.theme.colors.black};
  ${space};
  ${typography};
  em {
    font-weight: 800;
    color: ${(p) => p.theme.colors.primary};
  }
  @media ${(props) => props.theme.devices.sm} {
    font-size: 32px;
    line-height: 32px;
  }
`;
const TextCaption = styled.p`
  margin-top: 0px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  color: ${(p) => p.theme.colors.black70};
  ${layout};
  ${space};
  ${typography};
  ${border};
`;
const Card = styled(Segment)`
  transition: box-shadow 500ms ease;
  &:hover {
    transition: box-shadow 500ms ease;
    box-shadow: ${(p) => p.theme.colors.boxShadowHover};
  }
`;
const DateAndVenue = () => {
  return (
    <Section id="datevenue" bg="primaryHover">
      <Container noGutter mobileGutter>
        <Row justifyContent="center" alignItems="center">
          <Col sm={12} md={12} lg={5}>
            <Segment>
              <Segment className="is-desktop" textAlign="center">
                <TextTitle color="#fff" fontSize={40} lineHeight={"50px"}>
                  Date & Venue
                </TextTitle>
              </Segment>
              <Segment className="is-mobile" textAlign="center">
                <TextTitle color="#fff" fontSize={40} lineHeight={"50px"}>
                  Date & Venue
                </TextTitle>
              </Segment>
              <TextInfo mb={20} textAlign="center" color="#fff">
                The Date
              </TextInfo>
              <Slide left>
                <Card
                  mb={20}
                  mx={24}
                  bg="white"
                  position="relative"
                  borderRadius={0}
                >
                  <Row p={24}>
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <TextCaption mb={0} pr={16} textAlign="center">
                        Saturday
                      </TextCaption>
                      <TextTag mb={0} pr={16} textAlign="center">
                        <em>May 21, 2022</em>
                      </TextTag>
                      <TextTag mb={16} pr={16} textAlign="center">
                        <TextCaption mb={0} mr={8} display="inline">
                          at
                        </TextCaption>
                        <em>12pm - 2.30pm</em>
                      </TextTag>
                      <TextInfo mb={0} textAlign="center">
                        <a
                          target="_blank"
                          href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MHVtbW1rbGltN3VjbG1sOGNyZHM2a2c0OGggbTQ4dGFibXJ2Y251MHBrbHIwbTJoNXZvaThAZw&tmsrc=m48tabmrvcnu0pklr0m2h5voi8%40group.calendar.google.com"
                          rel="noreferrer"
                        >
                          <Icon icon={calendar} size={20} />
                          <span>Add to Calendar</span>
                        </a>
                      </TextInfo>
                    </Col>
                  </Row>
                </Card>
              </Slide>
              <TextInfo mb={20} textAlign="center" color="#fff">
                The Venue
              </TextInfo>
              <Slide left delay={200}>
                <Card
                  mb={20}
                  mx={24}
                  bg="white"
                  position="relative"
                  borderRadius={0}
                >
                  <Row p={24}>
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <TextTag mb={8} pr={16} textAlign="center">
                        <em>Grha Toelangan</em>
                      </TextTag>
                      <TextCaption mb={16} pr={16} textAlign="center">
                        Jl. Raya Tulangan, Tulangan Tengah, Tulangan, Kec.
                        Tulangan, Kabupaten Sidoarjo, Jawa Timur 61273
                      </TextCaption>
                      <TextInfo mb={0} pr={16} textAlign="center">
                        <a
                          href="https://www.google.com/maps/place/GRHA+MAHAR+AGUNG/@-7.4761313,112.6491948,15z/data=!4m2!3m1!1s0x0:0x5bedd045f4a4c1fc?sa=X&ved=2ahUKEwiJoZyj4_n2AhUAzzgGHQZhDQMQ_BJ6BAhYEAU"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon icon={mapPin} size={20} />
                          <span>View Location</span>
                        </a>
                      </TextInfo>
                    </Col>
                  </Row>
                </Card>
              </Slide>
            </Segment>
          </Col>
          <Col sm={12} md={12} lg={5}>
            <ImageEffect image={f2} position="right" />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default DateAndVenue;
