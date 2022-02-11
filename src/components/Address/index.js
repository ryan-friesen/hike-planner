import styles from './styles.module.css';

/**
 * @typedef {Object} Address
 * @property {string} street
 * @property {string} city
 * @property {string} state
 * @property {number} zip
 * @property {string} country
 */

/**
 * @typedef {Object} Props
 * @property {Address} address
 */

/** JSDoc: shortcut = /** then press enter when above a function.
 * @param {Props} props
 */
const Address = (props) => {
  /*
  Below is an example of destructuring an object- in this case,
  props.address that was declared and initialized on lines 13 and 14

  You want to destructure out of Props what the component needs.
  This acts as an upfront declaration of everything the component needs from
  props

  Destructuring can be done directly in the param section between the
  parentheses of the function
  */
  const { street, city, state, zip, country } = props.address;
  return (
    <span className={`${styles.addressContainer}`}>
      {street}, {city}, {state}, {zip}, {country}
    </span>
  );
};

export default Address;
