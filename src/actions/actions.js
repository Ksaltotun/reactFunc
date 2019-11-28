export const addPeople = (name, age) => {
  return {
    type: "ADD_PEOPLE",
    name,
    age,
  };
};
