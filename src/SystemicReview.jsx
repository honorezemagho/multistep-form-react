import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Buttons from "./Buttons";

export default function SystemicReview(props) {
  return (
    <>
      <div>
        <Typography variant="h4">Review of Systems</Typography>
        <TextField
          id="review"
          type="text"
          label="Review of Systems"
          name="systemicReview"
          value={props.input.systemicReview}
          onChange={(event) => props.handleInput(event)}
          variant="outlined"
          multiline
          rows={4}
        />

        <Buttons
          nav="fourth"
          nextHandler={() => props.nextHandler()}
          prevHandler={() => props.prevHandler()}
        />
      </div>
    </>
  );
}
