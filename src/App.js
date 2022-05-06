import {
  ContentWrapper,
  FixedWrapper,
  GlobalStyle,
  ScrollWrapper,
} from "./theme/GlobalStyle";
import DrawerProvider from "./containers/Drawer";
import Navbar from "./components/Navbar";
import ThemeProvider from "./containers/Theme";
import FixedNav from "./components/FixedNav";
import { CircleAbsoluteBottom } from "./views/Home/styles";
import { lazy, Suspense, useEffect, useState } from "react";
import Segment from "./components/Segment";
import "./App.css";
import Hero from "./views/Home/Hero";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Home = lazy(() => import("./views/Home"));

const StyledCover = styled(Segment)`
  top: 0;
  transition: all 1s ease-in-out;

  &.uncovered {
    top: -150%;
  }
`;

function App() {
  const [query] = useSearchParams();
  const guest = query.get("guest");
  const [cover, setCover] = useState(true);

  useEffect(() => {
    cover
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [cover]);

  return (
    <div>
      <ThemeProvider>
        <GlobalStyle />
        <FixedWrapper id="fixedBody">
          <StyledCover
            className={cover ? "covered" : "uncovered"}
            position="fixed"
            zIndex={10000}
            top="0"
            left="0"
            width="100vw"
            height="100vh"
          >
            <Hero guest={guest} cover onClick={() => setCover(false)} />
          </StyledCover>
          <DrawerProvider>
            <Navbar />
          </DrawerProvider>
          <FixedNav />
          <ContentWrapper id="content">
            <ScrollWrapper fullWidth noGutter id="scroller">
              <Suspense
                fallback={
                  <Segment
                    position="fixed"
                    left="0"
                    top="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                    width="100%"
                    bg="white"
                  >
                    loading...
                  </Segment>
                }
              >
                <Home />
              </Suspense>
            </ScrollWrapper>
            <CircleAbsoluteBottom />
          </ContentWrapper>
        </FixedWrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
