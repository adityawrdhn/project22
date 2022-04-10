import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "react-icons-kit";
import { sun, moon } from "react-icons-kit/feather";
import Button from "../Button";
import ScrollSpyMenu from "../ScrollSpyMenu";
import Segment from "../Segment";
import { useTheme } from "../../containers/Theme";
import sound from "../../assets/sound.mp3";
import { play, pause } from "react-icons-kit/feather";
import { position } from "styled-system";
import ReactAudioPlayer from "react-audio-player";

export const MENU_ITEMS = [
  {
    label: "The Groom & Bride",
    path: "#introduction",
    offset: "0",
  },
  {
    label: "Love Story",
    path: "#ourstory",
    offset: "0",
  },
  {
    label: "Our Happiness",
    path: "#gallery",
    offset: "0px",
  },
  {
    label: "Date & Venue",
    path: "#datevenue",
    offset: "0px",
  },
  {
    label: "Wishes & Greetings",
    path: "#greetings",
    offset: "0px",
  },
];

const NavbarWrapper = styled.nav`
  @media (min-width: ${(props) => props.theme.breakpoints.sm + 1}px) {
    position: fixed;
    top: 50vh;
    right: 0;
    transform: translateY(-50%);
    z-index: 1000;
    width: 40px;
    pointer-events: none;
    &::before {
      content: ".";
      display: block;
      height: 0;
      overflow: hidden;
    }
    &::after {
      content: ".";
      display: block;
      height: 0;
      overflow: hidden;
      clear: both;
    }
    .scrollspy__menu {
      float: right;
      list-style: none;
      li {
        a {
          font-family: "Raleway", sans-serif;
          position: relative;
          display: block;
          transform: translateX(calc(100% - 40px));
          line-height: 40px;
          padding: 0 1.0625em;
          white-space: nowrap;
          font-size: 1em;
          font-weight: 500;
          pointer-events: auto;
          transition: background 0.4s cubic-bezier(0.77, 0, 0.175, 1),
            color 0.4s cubic-bezier(0.77, 0, 0.175, 1),
            -webkit-transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
          transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1),
            background 0.4s cubic-bezier(0.77, 0, 0.175, 1),
            color 0.4s cubic-bezier(0.77, 0, 0.175, 1);
          transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1),
            background 0.4s cubic-bezier(0.77, 0, 0.175, 1),
            color 0.4s cubic-bezier(0.77, 0, 0.175, 1),
            -webkit-transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
          text-decoration: none;
          color: ${(p) => p.theme.colors.black};
          border: 1px solid ${(p) => p.theme.colors.transparent};
          border-right: 0px;
          box-sizing: border-box;
          .scrollspy__menu__ticker {
            span,
            i {
              opacity: 0;
              transition: opacity 0.4s cubic-bezier(0.42, 0, 1, 1);
              font-size: 0.875em;
              line-height: 2.8571428571em;
              letter-spacing: 2px;
            }
          }
          &:hover {
            &:before {
              transform: scaleX(1);
              transform-origin: left center 0;
              transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
            }
          }
          &:before {
            content: "";
            position: absolute;
            width: calc(100% - 16px);
            height: 16px;
            background: linear-gradient(
              45deg,
              ${(p) => p.theme.colors.secondary} 0%,
              ${(p) => p.theme.colors.primary} 100%
            );
            bottom: 8px;
            left: 8px;
            z-index: -1;
            transform: scaleX(0);
            transform-origin: right center 0;
            transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
          }
        }
        hr {
          width: 6px;
          background: ${(p) => p.theme.colors.black};
          opacity: 0.5;
          margin: 0px 17px 0 auto;
          border-width: 0px;
          height: 1px;
        }
        &.is-active,
        :hover {
          a {
            color: ${(p) => p.theme.colors.black};
            background: ${(p) => p.theme.colors.white};
            border: 1px solid ${(p) => p.theme.colors.primary};
            border-right: 0px;
            transform: translateX(0);
            transition-duration: 0.7s;
            transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
            .scrollspy__menu__ticker {
              span,
              i {
                opacity: 1;
                transition-duration: 0.7s;
                transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
              }
            }
          }
        }
        &:last-child {
          hr {
            display: none;
          }
        }
      }
    }
  }
  @media ${(props) => props.theme.devices.sm} {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1030;
    width: 100vw;
    height: 60px;
    pointer-events: none;
    background: tranparent;
    cursor: none;
  }
`;
const ToggleTheme = styled(Segment)`
  bottom: 50px;
  right: 0px;
  position: fixed;
  z-index: 1030;
  transition: width 500ms ease, max-width 350ms ease;
  button {
    transition: width 500ms ease, max-width 350ms ease;
    width: 40px;
    &:hover,
    :focus {
      transition: width 500ms ease, max-width 350ms ease;
      width: 40px;
    }
    span {
      transition: width 500ms ease, max-width 350ms ease;
      color: transparent;
      max-width: 0px;
    }
  }
  &:hover,
  :focus {
    transition: width 500ms ease, max-width 350ms ease;
    button {
      transition: width 500ms ease, max-width 350ms ease;
      width: 165px;
      &:hover,
      :focus {
        transition: width 500ms ease, max-width 350ms ease;
        width: 165px;
      }
      span {
        transition: width 500ms ease, max-width 350ms ease;
        color: inherit;
        max-width: 120px;
        padding-left: 8px;
      }
    }
  }

  @media ${(p) => p.theme.devices.sm} {
    &:hover,
    :focus {
      transition: none;
      button {
        transition: none;
        width: 40px;

        &:hover,
        :focus {
          transition: none;
          width: 40px;
        }
        span {
          transition: none;
          color: transparent;
          max-width: 0px;
          padding-left: 0px;
        }
      }
    }
  }
  ${position}
`;

const Navbar = () => {
  const { theme, setTheme, audio } = useTheme();
  const [playing, setPlaying] = useState(false);

  const handleChange = () => {
    theme === "light" || !theme ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    const audio = document.getElementById("audio");
    playing ? audio?.play() : audio?.pause();
  }, [playing]);

  useEffect(() => {
    audio && setPlaying(true);
  }, [audio]);

  return (
    <Fragment>
      <NavbarWrapper>
        <ScrollSpyMenu
          className="is-desktop"
          menuItems={MENU_ITEMS}
          offset={0}
        />
      </NavbarWrapper>
      <ToggleTheme>
        <Button
          onClick={() => handleChange()}
          bg="white"
          color={"black"}
          borderRight="0px"
          boxShadow="none"
        >
          <Icon icon={theme === "dark" ? sun : moon} size={14} />
          <span>{theme === "dark" ? "Light" : "Dark"} Mode</span>
        </Button>
      </ToggleTheme>
      <ToggleTheme bottom={100}>
        <Button
          onClick={() => setPlaying(!playing)}
          bg="white"
          color={"black"}
          borderRight="0px"
          boxShadow="none"
          id="playbutton"
        >
          <Icon icon={playing ? pause : play} size={14} />
          <span>{playing ? "Pause" : "Play"}</span>
        </Button>
        <Segment display="none">
          <iframe
            title="audioFrame"
            src={sound}
            type="audio/mp3"
            allow="autoplay"
            style={{ display: "none" }}
          ></iframe>
          <ReactAudioPlayer
            id="audio"
            src={sound}
            autoPlay
            controls
            loop
            volume={0.2}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
        </Segment>
      </ToggleTheme>
    </Fragment>
  );
};
export default Navbar;
