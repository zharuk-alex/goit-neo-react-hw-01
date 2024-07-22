const capitalizeFirstLetter = (str = "") => {
  str = str.toString();
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export { capitalizeFirstLetter };
