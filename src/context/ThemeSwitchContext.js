import React, { useContext } from "react";
import theme from "../theme";

const ThemeSwitchContext = React.createContext({
  theme,
  setTheme: () => {}
});

export default ThemeSwitchContext;

export const useThemeSwitchContext = () => useContext(ThemeSwitchContext);
