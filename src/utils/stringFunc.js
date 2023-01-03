export const capitalLetter = (word) => {
  const words = word.split(" ");
  words.forEach((element, i) => {
    words[i] = element[0].toUpperCase() + element.substr(1);
  });
  return words.join(" ");
};

export const cleanValue = (inputValue) => {
  return inputValue.replace(/\s{2,}/g, " ").trim();
};
