import styled, { keyframes } from "styled-components";
import Segment from "../Segment";

const animateScroll = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const InfiniteScrollAnimation = styled(Segment)`
  margin: 0 auto;
  position: relative;
  transform: translate3d(0, 0, 0);
  display: flex;
  width: 100%;
  overflow: hidden;

  div {
    font-weight: 800;
    font-size: 28px;
    text-transform: uppercase;
    white-space: nowrap;
    color: ${(p) => p.theme.colors.white};
    background-color: tranparent;
    height: 100%;
    transform: translate3d(0, 0, 0);
    display: flex;
    animation: ${animateScroll} 40s linear infinite;
    animation-direction: ${(p) => (p.reverse ? "reverse" : "normal")};

    img {
      width: auto;
      height: 200px;
      object-fit: contain;
    }
  }

  span {
    -webkit-text-stroke: 2px ${(p) => p.theme.colors.white};
    color: ${(p) => p.theme.colors.transparent};
  }

  &:hover {
    div {
    }
  }
`;

const InfiniteScroll = ({ children, reverse }) => {
  return (
    <Segment position="relative" width="100vw" overflow="hidden">
      <InfiniteScrollAnimation reverse={reverse}>
        {children}
      </InfiniteScrollAnimation>
      <Segment
        className="img-hover"
        position="absolute"
        width="100%"
        height="100%"
        left="0%"
        top="0%"
      />
    </Segment>
  );
};

export default InfiniteScroll;
