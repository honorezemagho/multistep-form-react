import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Buttons from "./Buttons";

export default function Investigations(props) {
  return (
    <>
      <div>
        <Typography variant="h4">Investigations</Typography>
        <TextField
          id="inv"
          type="text"
          label="Investigations"
          name="investigations"
          value={props.input.investigations}
          onChange={(event) => props.handleInput(event)}
          variant="outlined"
          multiline
          rows={4}
        />

        <Buttons
          nav="last"
          saveHandler={(event) => props.saveHandler(event)}
          prevHandler={() => props.prevHandler()}
        />
      </div>
    </>
  );
}
