import React from "react";
import styled from "styled-components";
import {
  compose,
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  textStyle,
} from "styled-system";

const SegmentWrapper = styled("div")(
  compose(
    space,
    color,
    typography,
    layout,
    flexbox,
    grid,
    background,
    border,
    position,
    shadow,
    textStyle
  )
);

const Segment = (props) => {
  return <SegmentWrapper {...props}>{props.children}</SegmentWrapper>;
};

Segment.defaultProps = {
  as: "div",
};

export default Segment;
