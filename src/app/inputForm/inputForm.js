import React, {useState} from "react";
import "./inputForm.css";
import addPeople from "../../actions";
import {useDispatch, useSelector, useStore} from "react-redux";

export const InputForm = () => {
  const dispatch = useDispatch();
  const click = () => {
    dispatch(addPeople("Bill", 66));
  };

  return (
    <div className="jumbotron inputForm">
      <span className="point">Enter your name</span>
      <input className="point" placeholder="name">
        {}
      </input>
      <span className="point">Enter your age</span>
      <input className="point" placeholder="age">
        {}
      </input>
      <button className="point" onClick={click}>
        Go!
      </button>
    </div>
  );
};
