import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  gridContainer: {
    marginTop: "0",
    width: "100%"
  }
}));

const mockProjects = [
  {
    name: "Project Name",
    date: " March 08, 1991",
    avatar: "J",
    image: "https://sitechecker.pro/wp-content/uploads/2018/01/page-size.png",
    imageDescription: "WebPage",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
  },
  {
    name: "Project Name",
    date: " March 08, 1991",
    avatar: "J",
    image: "https://sitechecker.pro/wp-content/uploads/2018/01/page-size.png",
    imageDescription: "WebPage",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
  },
  {
    name: "Project Name",
    date: " March 08, 1991",
    avatar: "J",
    image: "https://sitechecker.pro/wp-content/uploads/2018/01/page-size.png",
    imageDescription: "WebPage",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
  },
  {
    name: "Project Name",
    date: " March 08, 1991",
    avatar: "J",
    image: "https://sitechecker.pro/wp-content/uploads/2018/01/page-size.png",
    imageDescription: "WebPage",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
  },
  {
    name: "Project Name",
    date: " March 08, 1991",
    avatar: "J",
    image: "https://sitechecker.pro/wp-content/uploads/2018/01/page-size.png",
    imageDescription: "WebPage",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
  },
  {
    name: "Project Name",
    date: " March 08, 1991",
    avatar: "J",
    image: "https://sitechecker.pro/wp-content/uploads/2018/01/page-size.png",
    imageDescription: "WebPage",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
  },
  {
    name: "Project Name",
    date: " March 08, 1991",
    avatar: "J",
    image: "https://sitechecker.pro/wp-content/uploads/2018/01/page-size.png",
    imageDescription: "WebPage",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
  },
  {
    name: "Project Name",
    date: " March 08, 1991",
    avatar: "J",
    image: "https://sitechecker.pro/wp-content/uploads/2018/01/page-size.png",
    imageDescription: "WebPage",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
  }
];

export default function Projects() {
  const classes = useStyles();
  console.log(
    "divisibility Condition:::",
    mockProjects.length / 3 - Number.parseInt(mockProjects.length / 3)
  );
  const nonDivisibility = number =>
    mockProjects.length / number -
      Number.parseInt(mockProjects.length / number) >
    0;
  return (
    <center>
      <Grid container spacing={3} className={classes.gridContainer}>
        {mockProjects.map((project, key) => {
          const diffPosition = () => mockProjects.length - key;
          const columnCondition = () =>
            diffPosition() < 3 && nonDivisibility(3);
          const pairColumnCondition = () => nonDivisibility(2);
          return (
            <Grid
              item
              xs={6}
              md={
                columnCondition()
                  ? pairColumnCondition()
                    ? diffPosition() === 2
                      ? 4
                      : 12
                    : 6
                  : 4
              }
              key={`list:${key}`}
            >
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      {project.avatar}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="Settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={project.name}
                  subheader={project.date}
                />
                <CardMedia
                  className={classes.media}
                  image={project.image}
                  title={project.imageDescription}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </center>
  );
}
