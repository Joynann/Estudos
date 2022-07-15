import React from 'react';
import { FaPlus, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './Form.css';

export default function Form({
  handleChange, handleNoEdit, handleSubmit, classeAtivo, novaTarefa,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      action="#"
      className="form"
    >
      <button
        onClick={handleNoEdit}
        type="submit"
        className={classeAtivo}
      >
        <FaWindowClose
          onClick={handleNoEdit}
          className="noEdit"
        />
      </button>

      <input
        type="text"
        onChange={handleChange}
        value={novaTarefa}
      />

      <button
        type="submit"
        className="submit"
      >
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleNoEdit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  classeAtivo: PropTypes.string.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
