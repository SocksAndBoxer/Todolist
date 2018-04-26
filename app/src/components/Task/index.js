import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Task = ({ id, label, done, onCheckTask }) => (
  <li className={classNames(
    'task',
    { 'task--done': done },
  )}
  >
    <input type="checkbox" checked={done} onChange={onCheckTask(id)} />
    <span className="task-label">{label}</span>
  </li>
);

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onCheckTask: PropTypes.func.isRequired,
};

export default Task;
