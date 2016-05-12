const validNumber = (value) => {
  return !isNaN(value);
};

const validNotEmptyString = (value) => {
  return (typeof value === 'string') && value.length !== 0;
};

export {
  validNumber,
  validNotEmptyString,
};
