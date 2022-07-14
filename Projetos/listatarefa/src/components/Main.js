import React, { Component } from 'react';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    const { novaTarefa } = this.state;

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    this.setState({
      tarefas: [...tarefas, novaTarefa],
    });
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleEdit = (index) => {
    console.log(index);
  };

  handleDelete = (index) => {
    const { tarefas } = this.state;
    tarefas.splice(index, 1);
    this.setState({
      tarefas: [...tarefas],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">

        <h1>Lista de tarefas</h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
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
            {tarefas.map((tarefa, index) => (
              <li key={tarefa}>
                {tarefa}
                <span>
                  <FaEdit
                    className="edit"
                    onClick={() => { this.handleEdit(index); }}
                  />
                  <FaWindowClose
                    className="delete"
                    onClick={() => { this.handleDelete(index); }}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    );
  }
}
