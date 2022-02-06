import styles from './styles.module.css';

/**
 * This mimics a Bootstrap container class (simplified)
 */
const Wrapper = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default Wrapper;

// function Wrapper(props) {

// }
