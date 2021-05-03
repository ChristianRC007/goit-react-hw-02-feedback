import PropTypes from 'prop-types';

import './FeedbackOptions.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="list">
      {Object.keys(options).map(key => (
        <li className="list__item" key={key}>
          <button
            className="list__button"
            name={key}
            type="button"
            onClick={onLeaveFeedback}
          >
            {key}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
