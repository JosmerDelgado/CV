import React from "react";
import { Paper, Typography, makeStyles, Icon, Grid } from "@material-ui/core";
import ContactMail from "@material-ui/icons/ContactMail";
import { ReactComponent as TwitterLogo } from "../../icons/Twitter_Logo_Blue.svg";

const useStyles = makeStyles(() => ({
  mainPaper: {
    backgroundColor: "gray"
  },
  infoContainer: {}
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.mainPaper}>
      <Grid container>
        <Grid item xs={4}>
          <div
            style={{
              margin: 0,
              position: "relative",
              top: "30%"
            }}
          >
            <Typography variant="h4" component="h4">
              Josmer J. Delgado R.
            </Typography>
            <Typography variant="h5" component="h5">
              Contact me
            </Typography>
            <div className={classes.infoContainer}>
              <div>
                <ContactMail />
                Email:
                <a href="mailto:josmerdev@gmail.com">josmerdev@gmail.com</a>
              </div>
              <div>
                <Icon>
                  <TwitterLogo
                    style={{ width: "34px", height: "34px" }}
                  ></TwitterLogo>
                </Icon>
                Twitter:
                <a href="https://twitter.com/DelgadoJosmer"> @delgadoJosmer </a>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={8}
          style={{
            backgroundImage: "url(https://picsum.photos/200/300)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "500px"
          }}
        ></Grid>
      </Grid>
    </Paper>
  );
};

export default Contact;
