import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true); // assuming input field have text initially i.e true,
  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true); // .trim() basically trim extra space around text, if .trim().length==0 means no text
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return; // after changing boolean, it returns and function will stop i.e nothing will entered in list below
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        
        {/* if isValid=false,=> invalid otherwise empty("") */}
        {/* here to make class dynamic, template litreals are used */}

        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button
        type="submit"
        className={`button-control ${!isValid ? "invalid" : ""}`}
      >
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
