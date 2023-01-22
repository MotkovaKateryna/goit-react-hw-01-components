import styles from './friendListItem.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span
      className={clsx(styles.status, {
        [styles.online]: isOnline,
        [styles.offline]: !isOnline,
      })}
    ></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
  isOnline: PropTypes.bool,
};
