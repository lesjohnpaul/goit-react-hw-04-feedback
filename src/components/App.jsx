import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import styles from './App.module.css'; // Import CSS file
import { useState } from 'react';

export const App = () => {
  //add react hooks
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = type => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  // display the total number of collected reviews from all categories
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // display the percentage of positive reviews
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return ((good / total) * 100).toFixed(0) || 0;
  };

  const total = countTotalFeedback();
  const showStatistics = total > 0;
  const noFeedbackMessage = 'There is no feedback';

  return (
    <div className={styles.container}>
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section className={styles.sectionTitle} title="Statistics">
        {showStatistics ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={noFeedbackMessage} />
        )}
      </Section>
    </div>
  );
};
