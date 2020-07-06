import React, {useState} from "react";
import "./InputForm.css";

export const InputForm = ({onPushPeople}) => {
  const [form, setForm] = useState({});

  const handleChangeName = event => {
    setForm({...form, name: event.target.value});
  };

  const handleChangeAge = event => {
    setForm({...form, age: parseInt(event.target.value, 10)});
  };

  const handleSubmit = event => {
    event.preventDefault();
    onPushPeople(form.name, form.age);
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
