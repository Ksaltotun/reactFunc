export const reducer = (state = {peoples: [], spiner: false}, action) => {
  const nextId =
    state.peoples.length > 0 ? state.peoples[state.peoples.length - 1].id + 1 : 1;
  switch (action.type) {
    case "PUSH_PEOPLE_SUCCES":
      return {
        peoples: state.peoples.concat({
          name: action.name,
          age: action.age,
          id: nextId,
        }),
        spiner: false,
      };
    case "PUSH_PEOPLE_REQUEST":
      return {
        peoples: state.peoples,
        spiner: true,
      };
    case "DELETE_PEOPLE_REQUEST":
      return {
        peoples: state.peoples,
        spiner: true,
      };
    case "DELETE_PEOPLE_SUCCES":
      return {
        peoples: state.peoples.filter(item => item.id !== action.id),
        spiner: false,
      };
    case "GET_PEOPLE_REQUEST":
      return {
        peoples: state.peoples,
        spiner: true,
      };

    case "GET_PEOPLE_SUCCES":
      return {
        peoples: action.peoples,
        spiner: false,
      };
    default:
      return state;
  }
};
