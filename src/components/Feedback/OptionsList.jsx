import PropTypes from 'prop-types';

import { List } from './Feedback.styled';

import { Item } from './Feedback.styled';
import { FeedbackBtn } from './Feedback.styled';

export const OptionsList = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((item, index) => {
        return (
          <Item key={item}>
            <FeedbackBtn
              name={options[index].toLowerCase()}
              type="button"
              onClick={onLeaveFeedback}
            >
              {item}
            </FeedbackBtn>
          </Item>
        );
      })}
    </List>
  );
};

OptionsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
