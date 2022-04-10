import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";

const ImgComponent = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  @keyframes fadeIn {
    0% {
      opacity: 0.1;
    }

    100% {
      opacity: 1;
    }
  }

  &.loaded:not(.has-error) {
    animation: fadeIn 1s ease-in-out;
  }

  &.has-error {
    content: "";
    background: ${(p) => p.theme.colors.black50};
  }
`;

const Placeholder = styled.div`
  background: ${(p) => p.theme.colors.whiteHover};
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
`;
const THRESHOLD = 0.01;
const ROOT_MARGIN = "75%";
/**
 * Lazy Load Image Component
 * src: String, placeholder: String|Node
 * able to use content loader component for image placeholder
 * @param {*} props
 */
const LazyLoadImage = ({
  src,
  className,
  placeholder = <Placeholder />,
  ...rest
}) => {
  // lazy load not working if placeholder not found and image will be rendered as usual
  const [imageSrc, setImageSrc] = useState(
    placeholder ? (typeof placeholder === "string" ? placeholder : "") : src
  );
  const [imageRef, setImageRef] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const onLoad = (e) => {
    e.target.classList.add("loaded");
  };

  const onError = (e) => {
    e.target.classList.add("has-error");

    setError(true);
  };

  useEffect(() => {
    let observer;
    let cancel = false;
    // start observe when image on condition not error and still loading
    if (imageRef && !error) {
      if (IntersectionObserver) {
        // support intersectionObserver
        observer = new IntersectionObserver(
          (entries) => {
            // callback function to load image source
            entries.forEach((entry) => {
              if (
                !cancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                setLoaded(true);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            // options
            threshold: THRESHOLD,
            rootMargin: ROOT_MARGIN,
          }
        );
        // call listener
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(src);
        setLoaded(true);
      }
    }
    return () => {
      cancel = true;
      // on component cleanup, remove the listener
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, imageSrc, imageRef]);

  // render node or html placeholder when image still loading
  if (placeholder && typeof placeholder !== "string" && !loaded) {
    return React.cloneElement(React.Children.only(placeholder), {
      ref: setImageRef,
    });
  }

  return (
    <ImgComponent
      ref={setImageRef}
      src={imageSrc}
      className={className}
      onLoad={onLoad}
      onError={onError}
      {...rest}
    />
  );
};

const propsAreEqual = (prev, next) => prev.src === next.src;

export default memo(LazyLoadImage, propsAreEqual);
