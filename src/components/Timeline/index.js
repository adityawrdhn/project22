import React from "react";
import styled, { css } from "styled-components";
const TimelineWrapper = styled.ul`
  ${({ theme }) => css`
    border-left: 2px solid ${theme.colors.primary};
    color: ${theme.colors.black70};
    margin-left: 30%;
    letter-spacing: 0.5px;
    position: relative;
    line-height: 1.4em;
    font-size: 1.03em;
    padding: 12px;
    list-style: none;
    text-align: left;
    font-weight: 100;

    li {
      border-bottom: 1px dashed ${theme.colors.primary};
      padding-bottom: calc(12px * 0.5);
      margin-bottom: 12px;
      position: relative;
      background: ${theme.colors.white};
      padding: 12px;

      &:last-of-type {
        margin-bottom: 0;
      }

      &:before,
      &:after {
        position: absolute;
        display: block;
        top: 0;
      }

      &:before {
        left: calc((((120px * 0.6) + 12px + 2px + 2px + (4px * 2)) * 1.5) * -1);
        color: ${theme.colors.black};
        content: attr(data-date);
        text-align: right;
        font-weight: 100;
        font-size: 0.9em;
        min-width: 120px;
      }

      &:after {
        box-shadow: 0 0 0 4px ${theme.colors.primary};
        left: calc((12px + 3px + (3px * 0.35)) * -1);
        background: ${theme.colors.black70};
        border-radius: 50%;
        height: 6px;
        width: 6px;
        content: "";
        top: 5px;
      }

      h3 {
        color: ${theme.colors.black}
      }
    }
  `}
`;
const Timeline = ({ children }) => {
  return <TimelineWrapper>{children}</TimelineWrapper>;
};

export default Timeline;
