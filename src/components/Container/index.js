import React from "react";
import ContainerWrapper from "./styles";

const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  mobileGutter,
  width,
  ...rest
}) => {
  // Add all classs to an array
  const addAllClasses = ["container"];
  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ContainerWrapper
      className={addAllClasses.join(" ")}
      fullWidth={fullWidth}
      noGutter={noGutter}
      width={width}
      mobileGutter={mobileGutter}
      {...rest}
    >
      {children}
    </ContainerWrapper>
  );
};

export default Container;
