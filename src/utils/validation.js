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

export const notAllowedSymbols = (inputValue) => {
  const allowed = new RegExp("[^a-zA-ZąčęėįšųūĄČĘĖĮŠŲŪ()\\d\\s]");
  return allowed.test(inputValue);
};

export const checkLength = (inputValue) => {
  // const cleanValue = inputValue.replace(/\s{2,}/g, " ").trim();
  return inputValue.split(" ").length < 4 ? true : false;
};
