import React from "react";
import { Typography, Box } from "@material-ui/core/";

const Header = ({ title }) => {
  return (
    <Box header="true">
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
