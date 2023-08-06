export const now = new Date();
export const currentHours = now.getHours();

export const fullDate = now.toLocaleDateString(undefined, {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

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
