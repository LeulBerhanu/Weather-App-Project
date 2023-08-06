export const now = new Date();
export const currentHours = now.getHours();

const date = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();

export const fullDate = `${date}-${month}-${year}`;

export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const todayIndex = now.getDay();
export const today = daysOfWeek[todayIndex];
