import { useState } from 'react';
import { Feedback } from './Feedback';

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = e => {
    const name = e.target.name;
    setFeedback(prevState => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };
  return <Feedback feedback={feedback} onLeaveFeedback={onLeaveFeedback} />;
}
