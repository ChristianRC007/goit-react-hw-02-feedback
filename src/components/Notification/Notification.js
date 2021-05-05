import React from 'react';
import PropTypes from 'prop-types';

import './Notification.scss';

const Notification = ({ message }) => <p>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
