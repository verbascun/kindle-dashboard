// config.js
var DASHBOARD_CONFIG = {
  timezone: 'Europe/Warsaw',        // just a label for reference
  standardOffset: 1,                // CET UTC+1 offset during standard time (CET)
  dstOffset: 2,                     // CEST UTC+2 offset during daylight saving (CEST)
  latitude: 51.300954064150204,     // Wieruszów
  longitude: 18.16495781270237      // Wieruszów
};


// weatherSymbols.js
// Map Open-Meteo weather codes to SVG filenames
// Each code points to the SVG that represents its weather
var WEATHER_SYMBOLS = {
  0: 'clear_sky.svg',       // Clear sky

  1: 'mainly_clear.svg',    // Mainly clear
  2: 'mainly_clear.svg',    // Partly cloudy
  3: 'mainly_clear.svg',    // Overcast

  45: 'fog.svg',            // Fog
  48: 'fog.svg',            // Depositing rime fog

  51: 'drizzle.svg',        // Drizzle: Light
  53: 'drizzle.svg',        // Drizzle: Moderate
  55: 'drizzle.svg',        // Drizzle: Dense intensity

  56: 'freezing_drizzle.svg', // Freezing Drizzle: Light
  57: 'freezing_drizzle.svg', // Freezing Drizzle: Dense intensity

  61: 'rain.svg',            // Rain: Slight
  63: 'rain.svg',            // Rain: Moderate
  65: 'rain.svg',            // Rain: Heavy intensity

  66: 'freezing_rain.svg',   // Freezing Rain: Light
  67: 'freezing_rain.svg',   // Freezing Rain: Heavy intensity

  71: 'snow.svg',            // Snow fall: Slight
  73: 'snow.svg',            // Snow fall: Moderate
  75: 'snow.svg',            // Snow fall: Heavy intensity

  77: 'snow_grains.svg',     // Snow grains

  80: 'rain_showers.svg',    // Rain showers: Slight
  81: 'rain_showers.svg',    // Rain showers: Moderate
  82: 'rain_showers.svg',    // Rain showers: Violent

  85: 'snow_showers.svg',    // Snow showers: Slight
  86: 'snow_showers.svg',    // Snow showers: Heavy

  95: 'thunderstorm.svg',    // Thunderstorm: Slight or moderate
  96: 'thunderstorm_hail.svg', // Thunderstorm with slight hail
  99: 'thunderstorm_hail.svg'  // Thunderstorm with heavy hail
};



