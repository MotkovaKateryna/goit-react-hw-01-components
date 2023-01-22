import styles from './statistics.module.css';
import PropTypes from 'prop-types';
import { getRandomHexColor } from '../help/getRandomBgColor';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {/* <h2 className={styles.title}>{title}</h2> */}
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      <ul className={styles.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            className={styles.stats_item}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      // или PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
