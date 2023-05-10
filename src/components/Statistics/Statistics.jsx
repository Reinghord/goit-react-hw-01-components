import PropTypes from 'prop-types';
import {
  StatisticsBox,
  Title,
  StatList,
  StatListItem,
  Label,
  Percentage,
} from './Statistics.styled';
import { randomColor } from 'utils';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsBox>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatListItem
            key={id}
            style={{ backgroundColor: `#${randomColor()}` }}
          >
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </StatListItem>
        ))}
      </StatList>
    </StatisticsBox>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
