import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Buttons from "./Buttons";

export default function ExaminationFindings(props) {
  return (
    <>
      <div>
        <Typography variant="h4">Examination Findings</Typography>
        <TextField
          id="findings"
          type="text"
          label="Examination Findings"
          name="examinationFindings"
          value={props.input.examinationFindings}
          onChange={(event) => props.handleInput(event)}
          variant="outlined"
          multiline
          rows={4}
        />

        <Buttons
          nav="fifth"
          nextHandler={() => props.nextHandler()}
          prevHandler={() => props.prevHandler()}
        />
      </div>
    </>
  );
}
