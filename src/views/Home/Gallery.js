import React, { Fragment, memo, useCallback, useEffect, useState } from "react";
import { Fade } from "react-reveal";
import Segment from "../../components/Segment";
import g1 from "../../assets/g1.jpg";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg";
import g4 from "../../assets/g4.jpg";
import g5 from "../../assets/g5.jpg";
import g6 from "../../assets/g6.jpg";
import g7 from "../../assets/g7.jpg";
import g8 from "../../assets/g8.jpg";
import g9 from "../../assets/g9.jpg";
import g10 from "../../assets/g10.jpg";
import g11 from "../../assets/g11.jpg";
import g12 from "../../assets/g12.jpg";
import g13 from "../../assets/g13.jpg";
import g14 from "../../assets/g14.jpg";
import g15 from "../../assets/g15.jpg";
import g16 from "../../assets/g16.jpg";
import { Plock } from "react-plock";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import { Section } from "./styles";
import styled, { css } from "styled-components";
import { layout, typography, space } from "styled-system";
import InfiniteScroll from "../../components/InfiniteScroll";
import Image from "../../components/Image";

const TextTitle = styled.h1`
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

const ImageCard = styled(Segment)`
  .bg-hover {
    transition: opacity 0.5s ease-in-out;
  }

  &:hover {
    .bg-hover {
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
  }
`;

const ImageElement = memo(({ value, key }) => (
  <ImageCard
    borderRadius={10}
    width="100%"
    position="relative"
    overflow="hidden"
    height="100%"
  >
    <Image src={value} alt={key} style={{ width: "100%", height: "100%" }} />
    <Segment
      className="bg-hover"
      position="absolute"
      left={0}
      top={0}
      bottom={0}
      right={0}
      bg="#222831"
      opacity="0.4"
    />
  </ImageCard>
));

const initialImages = [
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12,
  g13,
  g14,
  g15,
  g16,
];
const Gallery = () => {
  const [images, setImages] = useState(initialImages);
  const settingColumns = useCallback(() => {
    if (window.innerWidth >= 800) return 4;
    if (window.innerWidth >= 500) return 3;
    return 2;
  }, []);

  const [column, setColumn] = useState(() => settingColumns());

  useEffect(() => {
    window.addEventListener("resize", () => setColumn(() => settingColumns()));

    return window.removeEventListener("resize", () =>
      setColumn(() => settingColumns())
    );
  }, [setColumn, settingColumns]);

  useEffect(() => {
    if (column === 2) {
      // const temp = images[11];
      // images[11] = images[12];
      // images[12] = temp;
      images.splice(2, 1);

      setImages([...images]);
    } else {
      setImages([...initialImages]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [column]);

  return (
    <Section id="gallery">
      <Container noGutter mobileGutter>
        <Row alignItems="center" justifyContent="center">
          <Col md={12} lg={12} wide={12}>
            <Segment className="is-desktop" textAlign="center" mb={24}>
              <TextTitle canHover>
                <em>Our Happiness</em>
              </TextTitle>
            </Segment>
            <Segment className="is-mobile" textAlign="center" mb={24}>
              <TextTitle canHover color="black" fontSize={40} lineHeight="50px">
                <em>Our Happiness</em>
              </TextTitle>
            </Segment>
            <Plock nColumns={column} gap={16}>
              {images.map((item, i) => (
                <Fragment key={i}>
                  <Fade up>
                    <ImageElement value={item} />
                  </Fade>
                </Fragment>
              ))}
            </Plock>
          </Col>
        </Row>
      </Container>
      <Segment position="absolute" top={0} left={0} width="100vw">
        <InfiniteScroll>
          <div>
            ADITYA<span>PUTRI-</span>ADITYA<span>PUTRI-</span>ADITYA
            <span>PUTRI-</span>ADITYA<span>PUTRI-</span>
            ADITYA<span>PUTRI-</span>ADITYA<span>PUTRI-</span>ADITYA
            <span>PUTRI-</span>ADITYA<span>PUTRI-</span>
          </div>
          <div>
            ADITYA<span>PUTRI-</span>ADITYA<span>PUTRI-</span>ADITYA
            <span>PUTRI-</span>ADITYA<span>PUTRI-</span>
            ADITYA<span>PUTRI-</span>ADITYA<span>PUTRI-</span>ADITYA
            <span>PUTRI-</span>ADITYA<span>PUTRI-</span>
          </div>
        </InfiniteScroll>
        <InfiniteScroll reverse>
          <div>
            <span>ADITYA</span>PUTRI-<span>ADITYA</span>PUTRI-
            <span>ADITYA</span>PUTRI-<span>ADITYA</span>PUTRI-
            <span>ADITYA</span>PUTRI-<span>ADITYA</span>PUTRI-
            <span>ADITYA</span>PUTRI-<span>ADITYA</span>PUTRI-
          </div>
          <div>
            <span>ADITYA</span>PUTRI-<span>ADITYA</span>PUTRI-
            <span>ADITYA</span>PUTRI-<span>ADITYA</span>PUTRI-
            <span>ADITYA</span>PUTRI-<span>ADITYA</span>PUTRI-
            <span>ADITYA</span>PUTRI-<span>ADITYA</span>PUTRI-
          </div>
        </InfiniteScroll>
      </Segment>
    </Section>
  );
};

export default Gallery;
