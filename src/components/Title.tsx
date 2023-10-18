import { Typography } from "@mui/material";
import React from "react";
import { TPropsTitle } from "../types";
import { theme } from "../theme";

function Title(props: TPropsTitle) {
  const { title } = props;
  return (
    <Typography
      variant="h3"
      sx={{ color: theme.colors.primary, textAlign: "center" }}
    >
      {title}
    </Typography>
  );
}

export default Title;
