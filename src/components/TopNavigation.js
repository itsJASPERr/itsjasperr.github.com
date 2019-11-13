import React from "react";
import { Box, Button } from "@material-ui/core";
import Link from "./Link";

const NavButton = ({ active, to, children }) => {
  return (
    <Box display="inline" m={1}>
      <Button
        component={Link}
        to={to}
        variant={active ? "outlined" : "text"}
        color="inherit"
      >
        {children}
      </Button>
    </Box>
  );
};

const TopNavigation = ({ uri, path }) => {
  return (
    <Box>
      <NavButton active={uri === "/about"} to="/about">
        about
      </NavButton>
      <NavButton active={uri === "/blog"} to="/blog">
        blog
      </NavButton>
      <NavButton active={uri === "/work"} to="/work">
        work
      </NavButton>
    </Box>
  );
};

export default TopNavigation;
