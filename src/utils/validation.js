export const inputPositiveNumber = (number) => {
  return !typeof (number === "number") ? false : number >= 0 ? true : false;
};
