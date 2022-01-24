export const dateToString = (date) => {
  //Conver date from datepicker to string format
  return (
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate()
  );
};