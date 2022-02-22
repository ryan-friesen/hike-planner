import styles from './styles.module.css';
import Address from '../Address';
import Weather from '../Weather';

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
  const {
    hike: { name, completed, address },
  } = props;

  return (
    <div className={[styles.hike].join(' ')}>
      <h2>Name: {name}</h2>
      <p>Complete: {completed ? '✅' : '❌'}</p>
      <Address address={address} />
      <Weather address={address} />
    </div>
  );
};

export default Hike;
