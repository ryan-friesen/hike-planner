/* 
This service will contain the URLs used for API requests in our app.
This helps avoid repeating API URLs and API request functionality in multiple
places (components) that need to use the APIs.

Example, if an API url changes or some associated logic for the API request
changes, we only need to change it here and not everywhere the API is being
called.
*/

import axios, {
  /* eslint-disable no-unused-vars */ AxiosResponse,
} from 'axios';

/**
 * @see https://openweathermap.org/current#:~:text=wind.speed%20Wind%20speed.,%2C%20Imperial%3A%20miles%2Fhour.
 * @typedef {object} WeatherResponse
 * @property {object} coord
 * @property {number} coord.lon
 * @property {number} coord.lat
 * @property {object[]} weather
 * @property {number} weather.id
 * @property {string} weather.main
 * @property {string} weather.description
 * @property {string} weather.icon
 * @property {string} base
 * @property {object} main
 * @property {number} main.temp
 * @property {number} main.feels_like
 * @property {number} main.temp_min
 * @property {number} main.temp_max
 * @property {number} main.pressure
 * @property {number} main.humidity
 * @property {number} visibility
 * @property {object} wind
 * @property {number} wind.speed meters/sec
 * @property {number} wind.deg
 * @property {object} clouds
 * @property {number} clouds.all
 * @property {number} dt
 * @property {object} sys
 * @property {number} sys.type
 * @property {number} sys.id
 * @property {string} sys.country
 * @property {number} sys.sunrise
 * @property {number} sys.sunset
 * @property {number} timezone
 * @property {number} id
 * @property {string} name
 * @property {number} cod
 */

/**
 * Prepends the base URL to the endpoint and appends the API key.
 * @param {string} endpoint
 */
const makeWeatherApiUrl = (endpoint) => {
  return `https://api.openweathermap.org/data/2.5/weather?${endpoint}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`;
};

/**
 * @param {string} city
 * @param {string} stateCode Prefixed with country code.
 * @example
 * ```
 * getWeatherByCity('Seattle', 'US-WA');
 * ```
 * @returns {Promise<AxiosResponse<WeatherResponse>>}
 */
export const getWeatherByCity = async (city, stateCode) => {
  return axios.get(makeWeatherApiUrl(`q=${city},${stateCode}`));
};

/**
 * @param {string} latitude
 * @param {string} longitude
 * @returns {Promise<AxiosResponse<WeatherResponse>>}
 */
export const getWeatherByLatLong = async (latitude, longitude) => {
  return axios.get(makeWeatherApiUrl(`lat=${latitude}&lon=${longitude}`));
};
