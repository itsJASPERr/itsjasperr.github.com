import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/styles";

import { red, green } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import Layout from "../../../components/Layout";
import { Typography } from "@material-ui/core";
import { useThemeSwitchContext } from "../../../context/ThemeSwitchContext";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: green.A700
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  }
});

const Software = ({ children }) => {
  const { setTheme } = useThemeSwitchContext();
  useEffect(() => {
    console.log("software did mount");
    setTheme(theme);
  }, []);
  return (
    <Layout>
      <Typography variant="h1">Software</Typography>
    </Layout>
  );
};
export default Software;
