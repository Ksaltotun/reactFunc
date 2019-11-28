import React from "react";
import "./app.css";
import InputForm from "./inputForm";
import GuestsTable from "./guestsTable";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../reducers";

const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});
const App = () => {
  return (
    <Provider store={store}>
      {
        <div className="app">
          <InputForm />
          <GuestsTable />
        </div>
      }
    </Provider>
  );
};

export default App;
