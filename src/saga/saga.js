import {put, call} from "redux-saga/effects";

const getData = () => {
  return fetch("http://localhost:3001/users").then(resp => resp.json());
};

const getPeoplesRequest = () => {
  console.log("request");
  return {
    type: "GET_PEOPLE_REQUEST",
  };
};

const getPeoplesSucces = resp => {
  return {
    type: "GET_PEOPLE_SUCCES",
    peoples: resp,
  };
};

const getPeopleFailure = () => {
  console.log("epic fail");
  return {
    type: "GET_PEOPLE_FAILURE",
  };
};

export function* getPeoples() {
  try {
    yield put(getPeoplesRequest());
    const peoples = yield call(getData);
    yield put(getPeoplesSucces(peoples));
  } catch (e) {
    yield put(getPeopleFailure());
    console.error(e);
  }
}

const pushData = (name, age) => {
  const man = {
    name,
    age,
  };

  return fetch("http://localhost:3001/users", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(man),
  }).then(resp => resp.json());
};

const pushPeoplesRequest = () => {
  return {
    type: "PUSH_PEOPLE_REQUEST",
  };
};

const pushPeoplesSucces = resp => {
  return {
    type: "PUSH_PEOPLE_SUCCES",
    name: resp.name,
    age: resp.age,
  };
};

const pushPeopleFailure = () => {
  console.log("epic fail");
  return {
    type: "PUSH_PEOPLE_FAILURE",
  };
};

export function* pushPeople(name, age) {
  try {
    yield put(pushPeoplesRequest());
    const peoples = yield call(() => pushData(name, age));
    yield put(pushPeoplesSucces(peoples));
  } catch (e) {
    yield put(pushPeopleFailure());
    console.error(e);
  }
}

const deleteData = id => {
  return fetch(`http://localhost:3001/users/${id}`, {
    method: "DELETE",
  }).then(resp => resp.json());
};

const deletePeoplesRequest = () => {
  return {
    type: "DELETE_PEOPLE_REQUEST",
  };
};

const deletePeoplesSucces = id => {
  return {
    type: "DELETE_PEOPLE_SUCCES",
    id: id,
  };
};

const deletePeopleFailure = () => {
  console.log("epic fail");
  return {
    type: "DELETE_PEOPLE_FAILURE",
  };
};

export function* deletePeople(id) {
  try {
    yield put(deletePeoplesRequest());
    yield call(() => deleteData(id));
    yield put(deletePeoplesSucces(id));
  } catch (e) {
    yield put(deletePeopleFailure());
    console.error(e);
  }
}
