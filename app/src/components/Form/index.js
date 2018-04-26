import React from 'react';
import PropTypes from 'prop-types';


const Form = ({ onAddTask }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddTask();
  };
  return (
    <form
      id="form"
      onSubmit={handleSubmit}
    >
      <input type="text" id="input" placeholder="ajouter une tâche" />
    </form>
  );
};

Form.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default Form;
