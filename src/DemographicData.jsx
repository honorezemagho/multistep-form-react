import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Buttons from "./Buttons";

export default function DemographicData(props) {
  return (
    <>
      <div>
        <Typography variant="h4">Demographic Data</Typography>
        <TextField
          id="name"
          type="text"
          label="Name"
          name="name"
          onChange={(event) => props.handleInput(event)}
          value={props.inputs.name}
          variant="outlined"
        />
        <TextField
          id="age"
          type="text"
          label="Age"
          name="age"
          onChange={(event) => props.handleInput(event)}
          value={props.inputs.age}
          variant="outlined"
        />
        <TextField
          id="sex"
          type="text"
          label="Sex"
          name="sex"
          onChange={(event) => props.handleInput(event)}
          value={props.inputs.sex}
          variant="outlined"
        />
        <TextField
          id="occupation"
          type="text"
          label="Occupation"
          name="occupation"
          onChange={(event) => props.handleInput(event)}
          value={props.inputs.occupation}
          variant="outlined"
        />
        <TextField
          id="maritalStatus"
          type="text"
          label="Marital Status"
          name="maritalStatus"
          onChange={(event) => props.handleInput(event)}
          value={props.inputs.maritalStatus}
          variant="outlined"
        />
        <TextField
          id="address"
          type="text"
          label="Address"
          name="address"
          onChange={(event) => props.handleInput(event)}
          value={props.inputs.address}
          variant="outlined"
        />
        <TextField
          id="religion"
          type="text"
          label="Religion"
          name="religion"
          onChange={(event) => props.handleInput(event)}
          value={props.inputs.religion}
          variant="outlined"
        />
        <TextField
          id="tribe"
          type="text"
          label="Tribe"
          name="tribe"
          onChange={(event) => props.handleInput(event)}
          value={props.inputs.tribe}
          variant="outlined"
        />

        <Buttons nav="first" nextHandler={() => props.nextHandler()} />
      </div>
    </>
  );
}
