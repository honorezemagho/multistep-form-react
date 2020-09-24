import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function Buttons({
  nav,
  prevHandler,
  nextHandler,
  saveHandler
}) {
  const classes = useStyles();

  return (
    <div>
      {nav !== "first" && (
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<ArrowBackIosIcon />}
          onClick={() => prevHandler()}
        >
          Previous
        </Button>
      )}

      {nav !== "last" && (
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<NavigateNextIcon />}
          onClick={() => nextHandler()}
        >
          Continue
        </Button>
      )}
      {nav === "last" && (
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<FavoriteBorderIcon />}
          onClick={(event) => saveHandler(event)}
        >
          Save To Medical Records
        </Button>
      )}
    </div>
  );
}
