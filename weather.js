// Weather Forecast Tracker

// Array to store city weather data
let weatherData = [];

// 1. Add City Weather: Function to add a new city weather object
const addCityWeather = (cityName, temperature, condition) => {
  if (typeof temperature !== "number" || !["Sunny", "Cloudy", "Rainy"].includes(condition)) {
    console.error("Invalid data. Temperature must be a number and condition must be 'Sunny', 'Cloudy', or 'Rainy'.");
    return;
  }
  weatherData.push({ cityName, temperature, condition });
};

// 2. Find Hottest City: Use find() to identify the city with the highest temperature
const findHottestCity = () => {
  if (weatherData.length === 0) return null;
  return weatherData.reduce((hottest, city) => (city.temperature > hottest.temperature ? city : hottest));
};

// 3. Filter by Condition: Use filter() to list all cities with a specific weather condition
const filterByCondition = (condition) => {
  return weatherData.filter(city => city.condition === condition);
};

// 4. Map city names with their temperatures
const getCityTemperatureList = () => {
  return weatherData.map(city => `City: ${city.cityName}, Temp: ${city.temperature}°C`);
};

// 5. Log details of the hottest city using destructuring
const logHottestCityDetails = () => {
  const hottestCity = findHottestCity();
  if (!hottestCity) {
    console.log("No data available to determine the hottest city.");
    return;
  }
  const { cityName, temperature, condition } = hottestCity;
  console.log(`Hottest City: ${cityName}, Temp: ${temperature}°C, Condition: ${condition}`);
};

// 6. Log weather summary for all cities using template literals
const logWeatherSummary = () => {
  if (weatherData.length === 0) {
    console.log("No weather data available.");
    return;
  }
  console.log("Weather Summary:");
  weatherData.forEach(({ cityName, temperature, condition }) => {
    console.log(`City: ${cityName}, Temp: ${temperature}°C, Condition: ${condition}`);
  });
};

// Example Usage
addCityWeather("New York", 30, "Sunny");
addCityWeather("Los Angeles", 35, "Sunny");
addCityWeather("Chicago", 25, "Cloudy");
addCityWeather("Seattle", 20, "Rainy");

console.log("\nCity Temperature List:");
console.log(getCityTemperatureList());

console.log("\nHottest City Details:");
logHottestCityDetails();

console.log("\nCities with Condition 'Sunny':");
console.log(filterByCondition("Sunny"));

console.log("\nWeather Summary:");
logWeatherSummary();
