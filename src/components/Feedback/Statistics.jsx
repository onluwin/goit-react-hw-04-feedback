import { StatTitle } from './Feedback.styled';
import { StatisticsList } from './StatisticsList';

import { Notification } from './Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StatTitle>Statistics</StatTitle>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <StatisticsList
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </div>
  );
};
