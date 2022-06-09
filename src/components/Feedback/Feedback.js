import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackButtonList, FeedbackButtonListItem } from './FeedbackStyles';

const Feedback = ({ options, handleLeaveFeedback }) => {
  return (
    <FeedbackButtonList>
      {options.map(option => (
        <li key={option}>
          <FeedbackButtonListItem
            type="button"
            value={option}
            onClick={() => handleLeaveFeedback(option)}
          >
            {option}
          </FeedbackButtonListItem>
        </li>
      ))}
    </FeedbackButtonList>
  );
};

Feedback.propTypes = {
  handleLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
};

export default Feedback;
