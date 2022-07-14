import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  const statusClasses = [css.status];

  if (isOnline) {
    statusClasses.push(css.online);
  }
  return (
    <li className={css.item}>
      <span className={statusClasses.join(' ')}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
