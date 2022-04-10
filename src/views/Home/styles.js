import styled from "styled-components";
import { useTheme } from "styled-components";
import Segment from "../../components/Segment";
export const CircleAbsoluteTop = styled.div`
  position: fixed;
  width: 400px;
  height: 400px;
  left: -140px;
  top: -100px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${(p) => p.theme.colors.transparent} 0%,
    ${(p) => p.theme.colors.white} 80%,
    ${(p) => p.theme.colors.transparent} 100%
  );
  @media ${(props) => props.theme.devices.sm} {
    width: 400px;
    height: 400px;
    left: -200px;
    top: -140px;
  }
`;
export const CircleAbsoluteBottom = styled.div`
  position: fixed;
  width: 300px;
  height: 300px;
  right: -100px;
  bottom: -100px;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    ${(p) => p.theme.colors.secondary} 0%,
    ${(p) => p.theme.colors.primary} 100%
  );
  @media ${(props) => props.theme.devices.sm} {
    width: 400px;
    height: 400px;
    right: -160px;
    bottom: -120px;
  }
`;

export const Section = ({ children, id, bg, flexDirection, zIndex }) => {
  const theme = useTheme();
  return (
    <Segment
      as="section"
      id={id}
      py={80}
      zIndex={zIndex || 10}
      background={theme.colors[bg || "white"]}
      minHeight={"calc(100vh - 160px)"}
      display="flex"
      flexDirection={flexDirection || "row"}
    >
      {children}
    </Segment>
  );
};

export const Particles = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  padding: 0;
  margin: 0;

  li {
    position: absolute;
    list-style: none;
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(p) => p.theme.colors.primary};
    filter: blur(10px);
    bottom: -150px;
    -webkit-animation: square 15s infinite;
    animation: square 15s infinite;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;

    &:nth-child(1) {
      left: 10%;
    }

    &:nth-child(2) {
      left: 20%;
      width: 30px;
      height: 30px;
      -webkit-animation-delay: 2s;
      animation-delay: 2s;
      -webkit-animation-duration: 17s;
      animation-duration: 17s;
      background-color: ${(p) => p.theme.colors.secondary};
    }

    &:nth-child(3) {
      left: 25%;
      -webkit-animation-delay: 4s;
      animation-delay: 4s;
      background-color: ${(p) => p.theme.colors.white};
    }

    &:nth-child(4) {
      left: 40%;
      width: 50px;
      height: 50px;
      -webkit-animation-duration: 22s;
      animation-duration: 22s;
      background-color: ${(p) => p.theme.colors.black70};
    }

    &:nth-child(5) {
      left: 70%;
    }

    &:nth-child(6) {
      left: 80%;
      width: 20px;
      height: 20px;
      -webkit-animation-delay: 3s;
      animation-delay: 3s;
      background-color: ${(p) => p.theme.colors.black70};
    }

    &:nth-child(7) {
      left: 32%;
      width: 60px;
      height: 60px;
      -webkit-animation-delay: 7s;
      animation-delay: 7s;
      background-color: ${(p) => p.theme.colors.black};
    }

    &:nth-child(8) {
      left: 55%;
      width: 20px;
      height: 20px;
      -webkit-animation-delay: 15s;
      animation-delay: 15s;
      -webkit-animation-duration: 40s;
      animation-duration: 40s;
      background-color: ${(p) => p.theme.colors.primary};
    }

    &:nth-child(9) {
      left: 25%;
      width: 10px;
      height: 10px;
      -webkit-animation-delay: 2s;
      animation-delay: 2s;
      -webkit-animation-duration: 40s;
      animation-duration: 40s;
      background-color: rgba(255, 255, 255, 0.3);
      background-color: ${(p) => p.theme.colors.black};
    }

    &:nth-child(10) {
      left: 90%;
      width: 20px;
      height: 20px;
      -webkit-animation-delay: 11s;
      animation-delay: 11s;
    }
  }

  @keyframes square {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-1000px) rotate(600deg);
      transform: translateY(-1000px) rotate(600deg);
    }
  }
`;
