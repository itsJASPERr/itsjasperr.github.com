import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import ProTip from "../components/ProTip";
import Link from "../components/Link";
import Layout from "../components/Layout";
import CategoryCard from "../components/CategoryCard";
import { Box } from "@material-ui/core";
import Hero from "../components/Hero";
import { useThemeSwitchContext } from "../context/ThemeSwitchContext";
import theme from "../theme";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Index({ uri, path }) {
  const { setTheme } = useThemeSwitchContext();
  useEffect(() => {
    console.log("index did mount");
    setTheme(theme);
  }, []);
  return (
    <Layout uri={uri} path={path}>
      <Hero></Hero>
      {/* <Typography variant="h4" component="h1" gutterBottom>
        Gatsby v4-beta example
      </Typography>
      <Link to="/about" color="secondary">
        Go to the about page
      </Link> */}

      <Box my={2} display="flex">
        <Box width={1 / 3} m={1}>
          <CategoryCard
            href="/c/software"
            title={`</>`}
            description={<>I do stuff</>}
          />
        </Box>
        <Box width={1 / 3} m={1}>
          <CategoryCard href="" title="food" description={<>I cook stuff</>} />
        </Box>
        <Box width={1 / 3} m={1}>
          <CategoryCard
            href=""
            title="shrug"
            description={<>I dont do stuff</>}
          />
        </Box>
      </Box>

      <ProTip />
      <Copyright />
    </Layout>
  );
}
