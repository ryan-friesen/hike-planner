/* 
This service will contain the URLs used for API requests in our app.
This helps avoid repeating API URLs and API request functionality in multiple
places (components) that need to use the APIs.

Example, if an API url changes or some associated logic for the API request
changes, we only need to change it here and not everywhere the API is being
called.
*/

import axios from 'axios';

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
 */
export const getWeatherByCity = async (city, stateCode) => {
  return axios.get(makeWeatherApiUrl(`q=${city},${stateCode}`));
};

/**
 * @param {string} latitude
 * @param {string} longitude
 */
export const getWeatherByLatLong = async (latitude, longitude) => {
  return axios.get(makeWeatherApiUrl(`lat=${latitude}&lon=${longitude}`));
};
