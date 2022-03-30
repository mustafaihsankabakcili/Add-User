import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input!',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Age!',
        message: 'Please enter a valid age (>0).'
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setenteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setenteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message}  onHandleError={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            type="text"
            name="age"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
