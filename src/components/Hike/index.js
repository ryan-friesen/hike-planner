import styles from './styles.module.css';

/** JSDoc: shortcut = /** then press enter when above a function.
 * @param {Object} props
 * @param {Object} props.hike
 */
const Hike = (props) => {
  console.log('props: ', props);
  // console.log(styles);
  return (
    <div className={`${styles.containerBorder}`}>
      <h2>Name: {props.hike.name}</h2>
      <p>Complete: {props.hike.completed ? '✅' : '❌'}</p>
    </div>
  );
};

export default Hike;
