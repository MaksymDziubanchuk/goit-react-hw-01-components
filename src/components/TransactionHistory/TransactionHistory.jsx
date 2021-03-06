import PropTypes from 'prop-types';
import { TransactionHistoryItem } from 'components/TransactionHistoryItem/TransactionHistoryItem';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={css.transaction_history}>
        <thead>
          <tr className={css.colums}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={css.items}>
          {items.map(item => (
            <TransactionHistoryItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
