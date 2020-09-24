import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Buttons from "./Buttons";

export default function DetailedHistory(props) {
  return (
    <>
      <div>
        <Typography variant="h4">Detailed History</Typography>
        <TextField
          id="hpc"
          type="text"
          label="History of Presenting Complaints"
          name="detailedHistory"
          value={props.input.detailedHistory}
          onChange={(event) => props.handleInput(event)}
          variant="outlined"
          multiline
          rows={4}
        />

        <Buttons
          nav="third"
          nextHandler={() => props.nextHandler()}
          prevHandler={() => props.prevHandler()}
        />
      </div>
    </>
  );
}
