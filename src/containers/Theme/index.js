import React, { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import useLocalStorage from "../../hooks/useLocalStorage";
import { getTheme } from "../../theme";

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
  audio: false,
  setAudio: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const themeProps = useMemo(() => getTheme(theme), [theme]);
  const [audio, setAudio] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, audio, setAudio }}>
      <StyledThemeProvider theme={themeProps}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};

export default ThemeProvider;
