import React from "react";
import styled, { useTheme } from "styled-components";
import Image from "../Image";
import Segment from "../Segment";

const ImageEffectWrapper = styled(Segment)`
  .img-hover {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  &:hover {
    .img-hover {
      opacity: 0.2;
    }
  }
`;

const ImageEffect = ({ image, position = "left" }) => {
  const theme = useTheme();
  const posProps = position === "left" ? { left: "-5%" } : { right: "-5%" };
  return (
    <ImageEffectWrapper
      position="relative"
      justifyContent="center"
      alignItems="center"
      display="flex"
      mb={12}
    >
      <Segment
        position="absolute"
        width="100%"
        height="100%"
        top="-5%"
        border={`1px solid ${theme.colors.black}`}
        {...posProps}
      />
      <Segment
        className="img-hover"
        position="absolute"
        width="100%"
        height="100%"
        left="0%"
        top="0%"
        background="#f6e6ec"
      />
      <Image src={image} alt="f1" width="100%" />
    </ImageEffectWrapper>
  );
};

export default ImageEffect;
