export const addPeople = (name, age) => {
  return {
    type: "ADD_PEOPLE",
    name,
    age,
  };
};

const getData = () => {
  return fetch("http://localhost:3001/users");
};

const deleteData = id => {
  return fetch(`http://localhost:3001/users/${id}`, {
    method: "DELETE",
  });
};

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
  });
};

const getPeoplesRequest = () => {
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

export const getPeoples = () => {
  return dispatch => {
    dispatch(getPeoplesRequest());
    getData()
      .then(resp => resp.json())
      .then(json => dispatch(getPeoplesSucces(json)))
      .catch(err => dispatch(getPeopleFailure()));
  };
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

export const pushPeople = (name, age) => {
  return dispatch => {
    dispatch(pushPeoplesRequest());
    pushData(name, age)
      .then(resp => resp.json())
      .then(json => dispatch(pushPeoplesSucces(json)))
      .catch(err => dispatch(pushPeopleFailure()));
  };
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

export const deletePeople = id => {
  return dispatch => {
    dispatch(deletePeoplesRequest());
    deleteData(id)
      .then(resp => dispatch(deletePeoplesSucces(id)))
      .catch(err => dispatch(deletePeopleFailure()));
  };
};
