import React from 'react';
import PropTypes from 'prop-types';

import Task from 'src/components/Task';

const Tasks = ({ tasks, onCheckTask }) => (
  <ul id="tasks">
    {tasks.map(task => (
      <Task onCheckTask={onCheckTask} key={task.id} {...task} />
    ))}
  </ul>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onCheckTask: PropTypes.func.isRequired,
};

export default Tasks;
