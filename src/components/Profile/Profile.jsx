import PropTypes from 'prop-types';
import { ProfileDescr } from 'components/ProfileDescr/ProfileDescr';
import { ProfileStats } from 'components/ProfileStats/ProfileStats';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <ProfileDescr
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileStats stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
