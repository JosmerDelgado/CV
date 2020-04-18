import React from "react";
import { Button, Typography } from "@material-ui/core";
import { Link } from "@reach/router";

export default function AppBarrButton(props) {
  const { value, OnClickMenuButton } = props;
  return (
    <Link to={value.route} style={{ textDecoration: "none" }}>
      <Button
        variant="text"
        style={{
          height: "64px",
          textTransform: "none"
        }}
        onClick={() => OnClickMenuButton(value.route)}
      >
        <Typography>{value.text}</Typography>
      </Button>
    </Link>
  );
}
