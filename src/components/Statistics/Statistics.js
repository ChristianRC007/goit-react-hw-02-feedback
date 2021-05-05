import React from 'react';
import PropTypes from 'prop-types';

import './Statistics.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className="stats-list">
      <li className="stats-list__item">
        Good: <span>{good}</span>
      </li>
      <li className="stats-list__item">
        Neutral: <span>{neutral}</span>
      </li>
      <li className="stats-list__item">
        Bad: <span>{bad}</span>
      </li>
      <li className="stats-list__item">
        Total: <span>{total}</span>
      </li>
      <li className="stats-list__item">
        Positive feedback:{' '}
        <span>{isNaN(positivePercentage) ? '0' : positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
