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
  const nextId =
    state.peoples.length > 0 ? state.peoples[state.peoples.length - 1].id + 1 : 1;
  switch (action.type) {
    case "ADD_PEOPLE":
      return {
        peoples: state.peoples.concat({
          name: action.name,
          age: action.age,
          id: nextId,
        }),
      };
    case "DELETE_PIPLE":
      return {
        peoples: state.peoples.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
};
