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
import { lazy, Suspense } from "react";
import Segment from "./components/Segment";
import "./App.css";

const Home = lazy(() => import("./views/Home"));

function App() {
  return (
    <div>
      <ThemeProvider>
        <GlobalStyle />
        <FixedWrapper id="fixedBody">
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
