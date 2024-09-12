// Import constants for DAYS and MONTHS if needed
import { MONTHS, DAYS } from "./DateConstants";

// Function to get the current IST time with seconds
export function getISTTime() {
  const date = new Date();
  const istTime = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZone: "Asia/Kolkata", // Timezone for IST
  });
  return istTime;
}

// Function to get the current local time with seconds
export function getLocalTime() {
  const date = new Date();
  const localTime = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });
  return localTime;
}

// Function to get the weekdays (useful for weather forecasts)
export function getWeekDays() {
  const dayInAWeek = new Date().getDay();
  const days = DAYS.slice(dayInAWeek, DAYS.length).concat(
    DAYS.slice(0, dayInAWeek)
  );
  return days;
}

// Function to get the current day and month
export function getDayMonthFromDate() {
  const date = new Date();
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const day = date.getUTCDate();
  return day + " " + month;
}

// Function to transform date into YYYY-MM-DD HH:MM:SS format
export function transformDateFormat() {
  const date = new Date();
  const month = date.toLocaleString("en-US", { month: "2-digit" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  const time = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });

  const newFormatDate = `${year}-${month}-${day} ${time}`;
  return newFormatDate;
}

// Function to get current UTC date and time in YYYY-MM-DD HH:MM format
export function getUTCDatetime() {
  const date = new Date();
  const utcTime = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZone: "Asia/Kolkata",
  });

  const isoDateString = date.toISOString();
  const utcDate = isoDateString.split("T")[0].concat(" ", utcTime);
  return utcDate;
}

// Live clock function that updates both local and IST time in the DOM
export function startLiveClock() {
  const localTimeElement = document.getElementById("local-time");
  const istTimeElement = document.getElementById("ist-time");

  if (!localTimeElement || !istTimeElement) {
    console.error(
      'HTML elements with IDs "local-time" and "ist-time" are required.'
    );
    return;
  }

  setInterval(() => {
    const localTime = getLocalTime();
    const istTime = getISTTime();

    // Update the DOM with the live time values
    localTimeElement.textContent = `Local Time: ${localTime}`;
    istTimeElement.textContent = `IST Time: ${istTime}`;
  }, 1000); // Update every second
}
