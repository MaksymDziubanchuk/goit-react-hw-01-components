import PropTypes from 'prop-types';
import { FriendsListItem } from 'components/FriendListItem/FriendListItem';

import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friends_list}>
      {friends.map(friend => (
        <FriendsListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
