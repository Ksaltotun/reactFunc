const initpeoples = {
  peoples: [
    {
      name: "John",
      age: 20,
      id: 1,
    },
  ],
};

export const reducer = (state = initpeoples, action) => {
  const nextId = state.peoples[state.peoples.length - 1].id + 1;
  switch (action.type) {
    case "ADD_PEOPLE":
      return {
        peoples: state.peoples.concat({
          name: action.name,
          age: action.age,
          id: nextId,
        }),
      };

    default:
      return state;
  }
};
