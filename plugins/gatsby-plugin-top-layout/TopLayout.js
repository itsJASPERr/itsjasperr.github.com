import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "../../src/theme";
import ThemeSwitchContext from "../../src/context/ThemeSwitchContext";

export default function TopLayout(props) {
  const [theme, setTheme] = React.useState(defaultTheme);
  return (
    <ThemeSwitchContext.Provider value={{ setTheme }}>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ThemeSwitchContext.Provider>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node
};
