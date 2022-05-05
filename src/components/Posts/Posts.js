import React from 'react';
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();

  return (
    <>
      <div>Posts</div>
      <Post />
    </>
  )
}

export default Posts