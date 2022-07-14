import { ProfileDescr } from 'components/ProfileDescr/ProfileDescr';
import { ProfileStats } from 'components/ProfileStats/ProfileStats';
import css from './Profile.module.css';

export const Profile = ({ user }) => {
  return (
    <div className={css.profile}>
      <ProfileDescr user={user} />
      <ProfileStats stats={user.stats} />
    </div>
  );
};
