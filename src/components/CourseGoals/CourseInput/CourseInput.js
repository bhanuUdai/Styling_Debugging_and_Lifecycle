import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);  // assuming input field have text initially i.e true, 
  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);                         // .trim() basically trim extra space around text, if .trim().length==0 means no text 
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);                        
      return;                                    // after changing boolean, it returns and function will stop i.e nothing will entered in list below
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>   
        {/* if input is empty i.e isValid=false, label become red , else black and same for input below with backgroundColor and borderColor */}
        <input
          type="text"
          style={{
            backgroundColor: !isValid ? "yellow" : "transparent",
            borderColor: !isValid ? "red" : "pink",
          }}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
