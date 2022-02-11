import styles from './styles.module.css';
import Address from '../Address';

/** JSDoc: shortcut = /** then press enter when above a function.
 * @param {Object} props
 * @param {Object} props.hike
 */
const Hike = (props) => {
  // console.log(styles);
  return (
    <div className={[styles.hike].join(' ')}>
      <h2>Name: {props.hike.name}</h2>
      <p>Complete: {props.hike.completed ? '✅' : '❌'}</p>
      <Address address={props.hike.address} />
    </div>
  );
};

export default Hike;
