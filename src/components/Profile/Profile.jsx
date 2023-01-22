import styles from './profile.module.css';
import PropTypes from 'prop-types';

const Profile = props => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={props.avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{props.username}</p>
        <p className={styles.tag}>@{props.tag}</p>
        <p className={styles.location}>{props.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stats_item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{props.stats.followers}</span>
        </li>
        <li className={styles.stats_item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{props.stats.views}</span>
        </li>
        <li className={styles.stats_item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
