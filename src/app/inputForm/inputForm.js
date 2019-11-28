import React from "react";
import "./inputForm.css";
import {addPeople} from "../../actions";
import {useDispatch} from "react-redux";

export const InputForm = () => {
  const dispatch = useDispatch();
  let nameInput = "";
  let ageInput = 0;
  const handleChangeName = event => {
    nameInput = event.target.value;
    console.log(nameInput);
  };
  const handleChangeAge = event => {
    ageInput = parseInt(event.target.value);
    console.log(ageInput);
  };
  const handleSubmit = event => {
    dispatch(addPeople(nameInput, ageInput));
    event.preventDefault();
  };

  return (
    <form className="jumbotron inputForm" onSubmit={handleSubmit}>
      <span className="point">Enter your name</span>
      <input className="point" placeholder="name" onChange={handleChangeName}></input>
      <span className="point">Enter your age</span>
      <input className="point" placeholder="age" onChange={handleChangeAge}>
        {}
      </input>
      <button className="point" type="submit">
        Go!
      </button>
    </form>
  );
};
