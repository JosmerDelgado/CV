import React from "react";
import {
  Grid,
  Avatar,
  Typography,
  withStyles,
  Popover
} from "@material-ui/core";

const styles = theme => ({
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing(1)
  }
});

const path =
  "https://topesdegama.com/app/uploads/2017/05/Logotipo-Google-Chrome.jpg";
const modeledSteps = [
  {
    imagePath: path,
    date: "1991-03-08",
    text: "Texto",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas acdiam egestas, luctus magna quis, pellentesque massa. Morbi conguelacus sed fringilla lobortis. Suspendisse nec neque libero. Phasellus sed neque sagittis, fringilla risus at, semper eros.Praesent quis purus vehicula, sagittis lectus id, iaculis ex. Insagittis urna non ante sagittis ornare. Aenean varius a ante egetmolestie. Praesent a viverra elit. Nunc pulvinar diam vel nisiblandit eleifend. Integer at convallis dolor. Vivamus non ligula semper nulla imperdiet mollis in eu erat."
  },
  {
    imagePath: path,
    date: "1991-03-08",
    text: "texto",
    description: "Description"
  },
  {
    imagePath: path,
    date: "1991-03-08",
    text: "texto",
    description: "Description"
  },
  {
    imagePath: path,
    date: "1991-03-08",
    text: "texto",
    description: "Description"
  }
];

function TimeLine(props) {
  const { classes, style } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <center style={style}>
      <Grid container direction="column-reverse">
        {modeledSteps.map(value => (
          <Grid xs={8} container direction="row">
            <Grid item xs={4}>
              <center
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div
                  style={{
                    backgroundColor: "yellow",
                    width: "2px",
                    display: "flex",
                    flex: "1",
                    minHeight: "10px"
                  }}
                />
                <Avatar
                  style={{ backgroundColor: "gray" }}
                  src={value.imagePath}
                  aria-owns={open ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                />
                <Popover
                  id="mouse-over-popover"
                  className={classes.popover}
                  classes={{
                    paper: classes.paper
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                >
                  {value.date}
                </Popover>
              </center>
            </Grid>
            <Grid item xs={8}>
              <hr />
              <Typography>{value.text}</Typography>
              {value.description}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </center>
  );
}

export default withStyles(styles)(TimeLine);
