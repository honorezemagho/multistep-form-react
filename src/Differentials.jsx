import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Buttons from "./Buttons";

export default function Differentials(props) {
  return (
    <>
      <div>
        <Typography variant="h4">Differentials</Typography>
        <TextField
          id="diff"
          type="text"
          label="Differentials"
          name="differentials"
          value={props.input.differentials}
          onChange={(event) => props.handleInput(event)}
          variant="outlined"
          multiline
          rows={4}
        />

        <Buttons
          nav="sixth"
          nextHandler={() => props.nextHandler()}
          prevHandler={() => props.prevHandler()}
        />
      </div>
    </>
  );
}
