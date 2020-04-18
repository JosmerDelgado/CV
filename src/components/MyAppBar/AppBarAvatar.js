import React from "react";
import { Avatar } from "@material-ui/core";
import person from "../../img/josmer.jpg";

export default function AppBarAvatar(props) {
  return <Avatar alt="Profile Picture" src={person} />;
}
