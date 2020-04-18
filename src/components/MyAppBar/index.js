import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AppBarElements from "./AppBarElements";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  toolBar: {
    justifyContent: "center"
  }
});

const modeledButton = [
  { text: "Home", route: "/" },
  { text: "TimeLine", route: "/timeline" },
  { text: "Projects", route: "/projects" },
  { text: "Resume", route: "/resume" },
  { text: "Contact Me", route: "/contact" },
  { text: "Blog", route: "/blog" }
];

export default function MyAppBar() {
  const classes = useStyles();
  const OnClickMenuButton = route => {
    console.log("Route:::", route);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar className={classes.toolBar}>
          <AppBarElements
            modeledButton={modeledButton}
            buttons={modeledButton}
            OnClickMenuButton={OnClickMenuButton}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
