import styles from './styles.module.css';

/** JSDoc: shortcut = /** then press enter when above a function.
 * @param {Object} props
 * @param {string} props.name
 * @param {number} props.duration
 */
const Hike = (props) => {
  console.log('props: ', props);
  // console.log(styles);
  return (
    <div className={`${styles.containerBorder}`}>
      <h2>Name: {props.name}</h2>
      <p>Duration: {props.duration}</p>
    </div>
  );
};

export default Hike;
