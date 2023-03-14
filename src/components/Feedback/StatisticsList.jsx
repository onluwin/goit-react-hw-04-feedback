import { StatisticsItems } from './StatisticsItems';

import { StatList } from './Feedback.styled';

export const StatisticsList = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatList>
      <StatisticsItems
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </StatList>
  );
};
