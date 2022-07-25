import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import s from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} style={{ backgroundColor: `#${randomColor()}` }}>
            <StatisticsItem label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
