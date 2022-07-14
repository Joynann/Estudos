import React, { Component } from 'react';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [
      'Tomar café',
      'Lavar a louça',
      'Ir trabalhar',
    ],
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">

        <h1>Lista de tarefas</h1>
        <form action="#" className="form">
          <input
            type="text"
            onChange={this.handleChange}
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <div className="tarefas">
          <ul>
            {tarefas.map((tarefa) => (
              <li key={tarefa}>
                {tarefa}
                <span>
                  <FaEdit className="edit" />
                  <FaWindowClose className="delete" />
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    );
  }
}
