export const inputPositiveNumber = (number) => {
  return !typeof (number === "number") ? false : number >= 0 ? true : false;
};

export const validInput = (inputValue) => {
  if (inputValue) {
    return true;
  }
};

export const teamIsUnique = (inputValue, teams) => {
  if (
    ![...teams].filter(
      (team) =>
        team.name.toLowerCase().trim() === inputValue.toLowerCase().trim()
    ).length
  ) {
    return true;
  }
};
