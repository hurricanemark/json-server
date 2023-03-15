const air = require('./air-Quality.json');
const weather = require('./weather.json');
// Something more

module.exports = () => ({
  AirQuality: air,
  WeatherForecast: weather
  // Something more
});