import styled, { createGlobalStyle } from "styled-components";
import { css } from "styled-components";
import Container from "../components/Container";
import heroImage from "../assets/hero.jpg";

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => css`
      body {
        font-family: "Raleway", sans-serif;
        background: #000;
        margin: 0;

        &::-webkit-scrollbar {
          display: none;
        }
      }
      em {
        font-style: normal;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: "Raleway", sans-serif;
        margin-top: 0;
      }
      a:-webkit-any-link {
        color: ${theme.colors.primary};
        text-decoration: none;
        cursor: pointer;
      }
      section {
        position: relative;
      }
      .is-mobile {
        display: none !important;
      }
      .is-desktop {
        display: block !important;
      }
      @media ${theme.devices.sm} {
        .is-mobile {
          display: block !important;
        }
        .is-desktop {
          display: none !important;
        }
      }
      @media ${theme.devices.sm} {
        .scrollspy__menu {
          list-style: none;
          flex-grow: 1;
          margin-left: 48px;
          padding-left: 0;
          li {
            padding: 20px 0;
            a {
              font-size: 20px;
              font-weight: 500;
              color: ${theme.colors.black50};
              position: relative;
              font-family: "Raleway", sans-serif;
              transition: 0.15s ease-in-out;
              text-decoration: none;
              @media (max-width: 767px) {
                font-size: 32px;
                font-weight: 600;
              }
              &:hover {
                color: ${theme.colors.black};
                &:before {
                  transform: scaleX(1);
                  transform-origin: left center 0;
                  transition: transform 0.35s
                    cubic-bezier(0.43, 0.49, 0.51, 0.68);
                }
              }
              &:before {
                content: "";
                position: absolute;
                width: calc(100% - 8px);
                height: 16px;
                background: linear-gradient(
                  45deg,
                  ${theme.colors.secondary} 0%,
                  ${theme.colors.primary} 100%
                );
                bottom: -4px;
                left: -8px;
                z-index: -1;
                transform: scaleX(0);
                transform-origin: right center 0;
                transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
              }
            }
            hr {
              display: none;
            }
            &.is-active {
              a {
                color: ${theme.colors.black};
                &:before {
                  transform: scaleX(1);
                  transform-origin: left center 0;
                  transition: transform 0.35s
                    cubic-bezier(0.43, 0.49, 0.51, 0.68);
                }
              }
            }
          }
        }
      }
    `}
`;
export const FixedWrapper = styled.div`
  &::before {
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    background: url(${heroImage});
    background-position: 40% 50%;
    background-size: cover;
    filter: blur(10px);
    content: "";
    display: block;
    height: 100vh;
    cursor: move;
    cursor: grab;
    cursor: -webkit-grab;
  }
`;

export const ContentWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;
export const ScrollWrapper = styled(Container)`
  position: relative;
`;
