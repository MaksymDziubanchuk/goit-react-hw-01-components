import PropTypes from 'prop-types';
import { getRandomColor } from 'components/helpers/getRandomColor';
import css from './StatisticsItem.module.css';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <li
      className={css.item}
      style={{
        backgroundColor: getRandomColor(),
      }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};
StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
