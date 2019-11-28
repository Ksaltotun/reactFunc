import React, {useState} from "react";
import "./app.css";
import InputForm from "./inputForm";
import GuestsTable from "./guestsTable";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../reducers";

const App = () => {
  const store = createStore(reducer);
  console.log(store.getState());

  return (
    <Provider store={store}>
      {
        <div className="app">
          <InputForm />
          <GuestsTable peoples={store.getState().peoples} />
        </div>
      }
    </Provider>
  );
};

export default App;
