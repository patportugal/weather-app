let currentTime = new Date();
let dayTime = document.querySelector("#time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let week = days[currentTime.getDay()];

let hour = currentTime.getHours();
let minutes = currentTime.getMinutes();

dayTime.innerHTML = week + " " + hour + ":" + minutes;

let city = document.querySelector("h1");
let city2 = document.querySelector("#searching");

city2.addEventListener("submit", local);

function local(event) {
  event.preventDefault();
  let cidade = document.querySelector("#city").value;
  city.innerHTML = cidade;
}
