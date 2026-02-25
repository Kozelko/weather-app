import "./style.css";

const API_KEY = process.env.API_KEY;

const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const unitToggle = document.getElementById("unit-toggle");

let currentUnit = "metric";
let lastFetchedData = null;

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`,
    );
    const data = await response.json();
    lastFetchedData = processWeatherData(data);
    displayWeather();
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function displayWeather() {
  if (!lastFetchedData) return;

  const { temp, ...rest } = lastFetchedData;
  const displayTemp = currentUnit === "metric" ? temp : (temp * 9) / 5 + 32;
  const unitSymbol = currentUnit === "metric" ? "°C" : "°F";

  console.log({ ...rest, temp: `${displayTemp.toFixed(1)} ${unitSymbol}` });
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
