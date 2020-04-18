import React from "react";
import { Button, withStyles } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import clsx from "clsx";

const styles = theme => ({
  container: {
    backgroundColor: "gray",
    height: "70vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage:
      "url(https://fossbytes.com/wp-content/uploads/2018/03/best-programming-scripting-markup-languages.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
});

const Resume = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Button variant="contained" size="small" className={classes.button}>
        <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
        Resume
      </Button>
    </div>
  );
};

export default withStyles(styles)(Resume);
