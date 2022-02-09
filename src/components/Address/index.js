import styles from './styles.module.css';

/** JSDoc: shortcut = /** then press enter when above a function.
 * @param {Object} props
 * @param {Object} props.hike
 */

const Address = (props) => {
    return (
        <div className={`${styles.addressContainer}`}>
            <h2>Address:</h2>
            <p>{Object.values(props.hike.address)}</p>
        </div>
    );
};

export default Address;