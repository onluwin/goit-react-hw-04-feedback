import PropTypes from 'prop-types';

import { Text } from './Feedback.styled';

export const Notification = ({ message }) => <Text>{message}</Text>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
