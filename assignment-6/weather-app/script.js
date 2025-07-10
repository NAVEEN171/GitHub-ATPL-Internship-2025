const API_KEY = "5ba5dfd54df84eb6820165049250907";
const API_URL = "http://api.weatherapi.com/v1/current.json";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const cityButtons = document.querySelectorAll(".city-btn");

const cityName = document.querySelector(".city-name");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const feelsLike = document.querySelector(".feels-like");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

searchBtn.addEventListener("click", handleSearch);
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});

cityButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const city = e.target.dataset.city;
    searchWeather(city);
  });
});

function handleSearch() {
  const city = cityInput.value.trim();
  if (city) {
    searchWeather(city);
  }
}

async function searchWeather(city) {
  showLoading();
  hideError();
  hideWeatherResult();

  try {
    const weatherData = await getWeatherData(city);
    displayWeatherData(weatherData);
  } catch (err) {
    console.log("Error fetching weather:", err);
    showError();
  }
}

async function getWeatherData(city) {
  const response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}&aqi=no`);

  if (!response.ok) {
    throw new Error("City not found");
  }

  return await response.json();
}

function displayWeatherData(data) {
  hideLoading();

  cityName.textContent = data.location.name;
  temperature.textContent = `${Math.round(data.current.temp_c)}°C`;
  description.textContent = data.current.condition.text;
  feelsLike.textContent = `${Math.round(data.current.feelslike_c)}°C`;
  humidity.textContent = `${data.current.humidity}%`;
  windSpeed.textContent = `${data.current.wind_kph} km/h`;

  showWeatherResult();
}

function showLoading() {
  loading.classList.remove("hidden");
}

function hideLoading() {
  loading.classList.add("hidden");
}

function showError() {
  hideLoading();
  error.classList.remove("hidden");
}

function hideError() {
  error.classList.add("hidden");
}

function showWeatherResult() {
  weatherResult.classList.remove("hidden");
}

function hideWeatherResult() {
  weatherResult.classList.add("hidden");
}
