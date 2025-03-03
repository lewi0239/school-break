const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  let [hours, minutes] = startTime.split(":").map(Number);
  let totalMinutes = hours * 60 + minutes;

  let [startHours, startMinutes] = dayStart.split(":").map(Number);
  let workStart = startHours * 60 + startMinutes;

  let [endHours, endMinutes] = dayEnd.split(":").map(Number);
  let workEnd = endHours * 60 + endMinutes;

  let meetingEnd = totalMinutes + durationMinutes;

  if (totalMinutes < workStart || meetingEnd > workEnd) {
    return false;
  }
  return true;
}

//Coercion practice!
// console.log(scheduleMeeting("7:00", 15)); // false
// console.log(scheduleMeeting("07:15", 30)); // false
// console.log(scheduleMeeting("7:30", 30)); // true
// console.log(scheduleMeeting("11:30", 60)); // true
// console.log(scheduleMeeting("17:00", 45)); // true
// console.log(scheduleMeeting("17:30", 30)); // false
// console.log(scheduleMeeting("18:00", 15)); // false

// console.log(undefined == 0); // ?
// console.log(undefined === 0); // ?
// console.log(Number(undefined)); // ?

// console.log([] == 0); // ?
// console.log([] === 0); // ?
// console.log([1] == 1); // ?
// console.log([1, 2] == "1,2"); // ?
// console.log({} == "[object Object]"); // ?
// console.log({} + []); // ?
