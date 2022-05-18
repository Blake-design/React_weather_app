import { DateTime } from "luxon";

const getHour = (unix, zone) => {
  const time = DateTime.fromSeconds(unix, { zone: zone });
  let hour = time.c.hour;
  if (hour >= 12) {
    hour = hour % 12 || 12;
    return hour;
  } else {
    hour = hour % 12 || 12;
    return hour;
  }
};

const getMeridian = (unix, zone) => {
  const hour = getHour(unix, zone);
  if (hour >= 12) {
    return "AM";
  } else {
    return "PM";
  }
};

function getTimeandDay() {
  const day = DateTime.now().weekdayLong;
  const time = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE);
  return `${day}, ${time}`;
}

export { getHour, getMeridian, getTimeandDay };
