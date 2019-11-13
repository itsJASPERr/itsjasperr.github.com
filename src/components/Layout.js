import React from "react";
import {
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TopNavigation from "./TopNavigation";
import Link from "./Link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Layout = ({ path, uri, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Box bgcolor="primary">
                <Button color="inherit" to="/" component={Link}>
                  JP
                </Button>
              </Box>
            </Typography>
            <TopNavigation uri={uri} path={path} />
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
        <Box my={4}>{React.Children.map(children, child => child)}</Box>
      </Container>
    </div>
  );
};
export default Layout;
