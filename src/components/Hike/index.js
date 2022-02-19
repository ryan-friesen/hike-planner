import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Address from '../Address';
import { getWeatherByCity } from '../../services/httpService';

// Typedef auto generator: https://transform.tools/json-to-jsdoc

// JSDoc

/**
 * @typedef {object} Props
 * @property {object} hike
 * @property {string} hike.name
 * @property {number} hike.elevation
 * @property {number} hike.totalDistance
 * @property {boolean} hike.completed
 * @property {object} hike.address
 * @property {string} hike.address.street
 * @property {string} hike.address.city
 * @property {string} hike.address.state
 * @property {number} hike.address.zip
 * @property {string} hike.address.country
 * @property {string} hike.plannedStartDateTime
 * @property {string} hike.plannedEndDateTime
 * @property {string} hike.actualStartDateTime
 * @property {string} hike.actualEndDateTime
 */

/** JSDoc: shortcut = /** then press enter when above a function.
 * @param {Props} props
 */
const Hike = (props) => {
  /**
   * @type {[import("../../services/httpService.js").WeatherResponse | null, React.Dispatch<import("../../services/httpService.js").WeatherResponse>]}
   */
  const [weather, setWeather] = useState(null);

  const {
    hike: { name, completed, address },
  } = props;

  /* 
  An empty array in the second argument will specify useEffect to run only when
  the component is first executed
  */
  useEffect(() => {
    getWeatherByCity(address.city, `${address.country}-${address.state}`)
      .then((res) => {
        setWeather(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={[styles.hike].join(' ')}>
      <h2>Name: {name}</h2>
      <p>Complete: {completed ? '✅' : '❌'}</p>
      <Address address={address} />
      {/* Render right side of && only when left side is truthy */}
      {weather ? (
        <div>
          <h3>Weather</h3>
          <p>Temp: {weather.main.temp}</p>
        </div>
      ) : (
        <p>LOADING WEATHER</p>
      )}
    </div>
  );
};

export default Hike;
