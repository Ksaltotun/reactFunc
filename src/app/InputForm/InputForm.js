import React, {useState} from "react";
import "./InputForm.css";
import {useDispatch} from "react-redux";
import {pushPeople} from "../../actions";

export const InputForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleChangeName = event => {
    setForm({...form, name: event.target.value});
  };

  const handleChangeAge = event => {
    setForm({...form, age: parseInt(event.target.value, 10)});
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(pushPeople(form.name, form.age));
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
