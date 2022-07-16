import user from 'user.json';
import stats from 'data.json';
import friends from 'friends.json';
import items from 'transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import css from 'components/App.module.css';

export const App = () => {
  return (
    <div className={css.app}>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};
