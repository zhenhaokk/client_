import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";

const Form = () => { 
  const classes = useStyles();
  return (
    <h1>Form</h1>
  )
}
export default Form;