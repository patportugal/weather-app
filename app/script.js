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

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = `753ef61a4c9704b0boa8ce19973atca6`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=753ef61a4c9704b0boa8ce19973atca6&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}
