import React from 'react';
import PropTypes from 'prop-types';

// Icons
import { FaRegEdit, FaRegTrashAlt, FaCheck } from 'react-icons/fa';

// Css
import './Tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          <p
            onClick={(e) => {
              e.target.classList.toggle('done');
            }}
          >
            <FaCheck />
            {tarefa}
          </p>
          <div>
            <FaRegEdit onClick={(e) => handleEdit(e, index)} className="edit" />
            <FaRegTrashAlt
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
