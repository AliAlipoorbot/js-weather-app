const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getWeekDay = (date) => {
  return DAYS[new Date(date.dt * 1000).getDay()];
};

export { getWeekDay };
