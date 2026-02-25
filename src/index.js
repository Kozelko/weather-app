import "./style.css";

const API_KEY = process.env.API_KEY;

const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`,
    );
    const data = await response.json();
    const processedData = processWeatherData(data);
    console.log(processedData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function processWeatherData(data) {
  const current = data.currentConditions;
  return {
    location: data.resolvedAddress,
    description: data.description,
    temp: current.temp,
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
