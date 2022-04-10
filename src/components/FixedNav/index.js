import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
const FixedNavWrapper = styled.nav`
  color: ${(p) => p.theme.colors.black};
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const NavTop = styled.div`
  position: absolute;
  top: 2.77778vw;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  overflow: hidden;

  &.with-logo {
    left: 2.77778vw;
  }

  .logo {
    color: ${(p) => p.theme.colors.black};
    pointer-events: all;

    span {
      display: block;
      pointer-events: none;
    }
  }

  &.with-date {
    right: 2.61111vw;
  }

  .date {
    pointer-events: all;
    cursor: pointer;
  }

  ${({ theme }) => css`
    @media ${theme.devices.sm} {
      font-size: 12px;
      line-height: 16px;
    }
  `}
`;

const NavBottom = styled.div`
  position: absolute;
  left: 3.38889vw;
  bottom: 2.66667vw;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.02778vw;
  font-weight: 500;

  ${({ theme }) => css`
    @media ${theme.devices.sm} {
      font-size: 10px;
      line-height: 14px;
    }
  `}
`;
const FixedNav = () => {
  return (
    <FixedNavWrapper>
      <NavTop className="with-logo">
        <a className="logo" href="/">
          <span className="vertical">
            <span>A</span> <span>/</span> <span>P</span>
          </span>
        </a>
      </NavTop>
      <NavTop className="with-date">
        <div className="date light">
          <div className="vertical">
            <div>21</div>
            <div>/</div>
            <div>05</div>
          </div>
        </div>
      </NavTop>
      <NavBottom>GRHA TOELANGAN, SDA</NavBottom>
    </FixedNavWrapper>
  );
};

export default FixedNav;
