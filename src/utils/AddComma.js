export const addComma = (value) => {
  if (value?.toString().includes(".")) {
    return value;
  } else {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
