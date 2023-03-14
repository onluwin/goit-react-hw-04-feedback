import { Section } from './Section';

import { Statistics } from './Statistics';
import { OptionsList } from './OptionsList';

export const Feedback = ({ feedback, onLeaveFeedback }) => {
  const { good, neutral, bad } = feedback;

  function countTotalFeedback() {
    return good + neutral + bad;
  }
  function countPositiveFeedbackPercentage() {
    const total = good + neutral + bad;
    return (good / total) * 100;
  }

  return (
    <Section title="Please leave your feedback">
      <OptionsList
        options={['Good', 'Neutral', 'Bad']}
        onLeaveFeedback={onLeaveFeedback}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
};
