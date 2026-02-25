/* eslint-disable no-undef */
import "./style.css";

const API_KEY = process.env.API_KEY;

const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const unitToggle = document.getElementById("unit-toggle");
const weatherInfo = document.getElementById("weather-info");
const loadingIndicator = document.getElementById("loading");

let currentUnit = "metric";
let lastFetchedData = null;

async function fetchWeather(city) {
  try {
    loadingIndicator.style.display = "flex";
    weatherInfo.innerHTML = "";

    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`,
    );
    const data = await response.json();
    lastFetchedData = processWeatherData(data);
    displayWeather();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    loadingIndicator.textContent = "Error loading weather data";
  } finally {
    loadingIndicator.style.display = "none";
  }
}

function displayWeather() {
  if (!lastFetchedData) return;

  const { temp, location, description, conditions, humidity, windspeed } =
    lastFetchedData;
  const displayTemp = currentUnit === "metric" ? temp : (temp * 9) / 5 + 32;
  const unitSymbol = currentUnit === "metric" ? "°C" : "°F";

  weatherInfo.innerHTML = `
        <h2>${location}</h2>
        <div class="weather-details">
            <p class="temp">${displayTemp.toFixed(1)} ${unitSymbol}</p>
            <p class="description">${description}</p>
            <p>Conditions: ${conditions}</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind Speed: ${windspeed} km/h</p>
        </div>
    `;
}

function processWeatherData(data) {
  const current = data.currentConditions;
  return {
    location: data.resolvedAddress,
    description: data.description,
    temp: current.temp, // Always Celsius from API
    conditions: current.conditions,
    humidity: current.humidity,
    windspeed: current.windspeed,
    icon: current.icon,
  };
}

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

unitToggle.addEventListener("click", () => {
  currentUnit = currentUnit === "metric" ? "us" : "metric";
  unitToggle.textContent =
    currentUnit === "metric" ? "Switch to °F" : "Switch to °C";
  displayWeather();
});
