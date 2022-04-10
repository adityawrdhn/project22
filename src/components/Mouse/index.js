import React from "react";
import styled, { keyframes } from "styled-components";
import Segment from "../Segment";

const ScrollDown = styled(Segment)`
  margin: auto;
  width: 34px;
  height: 55px;
`;
const Mousey = styled.div`
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid ${(p) => p.theme.colors.black70};
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
`;
const scroll = keyframes`
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0;}
`;
const Scroller = styled.div`
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: ${(p) => p.theme.colors.primary};
  animation-name: ${scroll};
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;
`;

const Mouse = (props) => {
  return (
    <ScrollDown {...props}>
      <Mousey>
        <Scroller />
      </Mousey>
    </ScrollDown>
  );
};

export default Mouse;
