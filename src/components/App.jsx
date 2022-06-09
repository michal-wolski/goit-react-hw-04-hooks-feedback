import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const options = Object.keys(feedback);

  const handleLeaveFeedback = option =>
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((value, acc) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedback.good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback options={options} handleLeaveFeedback={handleLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
};

export default App;
