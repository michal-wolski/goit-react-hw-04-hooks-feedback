import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsList, StatisticsListItem } from './StatisticsStyles';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <StatisticsListItem>
        <p>{good}</p>
        <p>Good</p>
      </StatisticsListItem>
      <StatisticsListItem>
        <p>{neutral}</p>
        <p>Neutral</p>
      </StatisticsListItem>
      <StatisticsListItem>
        <p>{bad}</p>
        <p>Bad</p>
      </StatisticsListItem>
      <StatisticsListItem>
        <p>{total}</p>
        <p>Total</p>
      </StatisticsListItem>
      <StatisticsListItem>
        <p>{positivePercentage}%</p>
        <p>Positive feadback</p>
      </StatisticsListItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
