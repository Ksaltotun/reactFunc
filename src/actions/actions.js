export const addPeople = (name, age) => {
  return {
    type: "ADD_PEOPLE",
    name,
    age,
  };
};
export const deletePiple = id => {
  return {
    type: "DELETE_PIPLE",
    id,
  };
};
