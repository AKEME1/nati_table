import data from "../data.json";

export const Filter = (title) => {
  const filterData = data.filter((data) => data.title === title);
  return filterData;
};
