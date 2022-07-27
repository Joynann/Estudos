import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tarefas.css';

export default function Tarefas({ handleEdit, handleDelete, tarefas }) {
  return (
    <div className="tarefas">
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={tarefa}>
            {tarefa}
            <span>
              <FaEdit
                className="edit"
                onClick={() => { handleEdit(index); }}
              />
              <FaWindowClose
                className="delete"
                onClick={() => { handleDelete(index); }}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Tarefas.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
};
