import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "./TopBar";
import DemographicData from "./DemographicData";
import PresentingComplaints from "./PresentingComplaints";
import DetailedHistory from "./DetailedHistory";
import SystemicReview from "./SystemicReview";
import ExaminationFindings from "./ExaminationFindings";
import Differentials from "./Differentials";
import Investigations from "./Investigations";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

export default function App() {
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    sex: "",
    occupation: "",
    maritalStatus: "",
    address: "",
    religion: "",
    tribe: "",
    complaint1: "",
    complaint2: "",
    otherComplaints: "",
    detailedHistory: "",
    SystemicReview: "",
    examinationFindings: "",
    differentials: "",
    investigations: ""
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputs(() => ({
      ...inputs,
      [name]: value
    }));
  };

  const steps = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "last"
  ];
  const classes = useStyles();
  const [step, setStep] = useState("first");
  const nextHandler = () => {
    let nextIndex = steps.indexOf(step) + 1;
    setStep(steps[nextIndex]);
    localStorage.setItem("persistStep", steps[nextIndex]);
  };
  const prevHandler = () => {
    let prevIndex = steps.indexOf(step) - 1;
    setStep(steps[prevIndex]);
    localStorage.setItem("persistStep", steps[prevIndex]);
  };
  const saveHandler = (event) => {
    event.preventDefault();
    //API call to POST to Database here
    alert("Saved to database. Click 'Ok' to View Collected Data");
    alert(`Name:${inputs.name} 
    Age:${inputs.age} 
    Sex:${inputs.sex} 
    Occupation: ${inputs.occupation} 
    Marital Status: ${inputs.maritalStatus} 
    Address:${inputs.address} 
    Religion:${inputs.religion} 
    Tribe:${inputs.tribe} 
    Complaint 1:${inputs.complaint1} 
    Complaint 2:${inputs.complaint2} 
    Other Complaints:${inputs.otherComplaints} 
    Detailed History:${inputs.detailedHistory} 
    Systemic Review:${inputs.systemicReview} 
    Examination Findings:${inputs.examinationFindings} 
    Investigations:${inputs.investigations} `);
  };

  return (
    <>
      <TopBar />
      <form className={classes.root} noValidate autoComplete="off">
        {step === "first" && (
          <DemographicData
            step="first"
            nextHandler={nextHandler}
            inputs={inputs}
            handleInput={handleInput}
          />
        )}
        {step === "second" && (
          <PresentingComplaints
            step="second"
            input={inputs}
            handleInput={handleInput}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
          />
        )}
        {step === "third" && (
          <DetailedHistory
            step="third"
            input={inputs}
            handleInput={handleInput}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
          />
        )}
        {step === "fourth" && (
          <SystemicReview
            step="fourth"
            input={inputs}
            handleInput={handleInput}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
          />
        )}
        {step === "fifth" && (
          <ExaminationFindings
            step="fifth"
            input={inputs}
            handleInput={handleInput}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
          />
        )}
        {step === "sixth" && (
          <Differentials
            step="sixth"
            input={inputs}
            handleInput={handleInput}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
          />
        )}
        {step === "last" && (
          <Investigations
            step="last"
            input={inputs}
            handleInput={handleInput}
            prevHandler={prevHandler}
            saveHandler={saveHandler}
          />
        )}
      </form>
    </>
  );
}
