import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Paper, Typography } from "@material-ui/core";
import { navigate } from "gatsby";

const useStyles = makeStyles(theme => ({}));
const CategoryCard = ({ href, title, description }) => {
  const classes = useStyles();
  return (
    <Paper onClick={() => navigate(href)}>
      <Box m={1}>
        <Box display="flex" justifyContent="center">
          <Typography variant="h1">{title}</Typography>
        </Box>
        {description}
      </Box>
    </Paper>
  );
};
export default CategoryCard;
