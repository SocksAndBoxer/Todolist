import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ count }) => {
  let message = '';
  switch (count) {
    case 0:
      message = 'Aucune tâche';
      break;
    case 1:
      message = 'Une tâche en cours';
      break;
    default:
      message = `${count} tâches en cours`;
  }

  return (
    <div id="form">
      {message}
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;
