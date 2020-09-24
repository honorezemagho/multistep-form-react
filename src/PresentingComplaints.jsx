import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Buttons from "./Buttons";

export default function PresentingComplaints(props) {
  return (
    <>
      <div>
        <Typography variant="h4">Presenting Complaints</Typography>
        <TextField
          id="c1"
          type="text"
          label="Complaint 1"
          name="complaint1"
          value={props.input.complaint1}
          onChange={(event) => props.handleInput(event)}
          variant="outlined"
          multiline
          rows={4}
        />
        <TextField
          id="c2"
          type="text"
          label="Complaint 2"
          name="complaint2"
          value={props.input.complaint2}
          onChange={(event) => props.handleInput(event)}
          variant="outlined"
          multiline
          rows={4}
        />
        <TextField
          id="oc"
          type="text"
          label="Other Complaints"
          name="otherComplaints"
          value={props.input.otherComplaints}
          onChange={(event) => props.handleInput(event)}
          variant="outlined"
          multiline
          rows={4}
        />

        <Buttons
          nav="second"
          nextHandler={() => props.nextHandler()}
          prevHandler={() => props.prevHandler()}
        />
      </div>
    </>
  );
}
