import React, { Component } from 'react';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
    classeAtivo: 'desativado',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1 || !novaTarefa) return;

    if (index === -1) {
      this.setState({
        tarefas: [...tarefas, novaTarefa],
      });
    } else {
      tarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...tarefas],
        index: -1,
        classeAtivo: 'desativado',
      });
    }

    this.setState({
      novaTarefa: '',
    });
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleEdit = (index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
      classeAtivo: 'ativo',
    });
  };

  handleNoEdit = (e) => {
    e.preventDefault();
    this.setState({
      novaTarefa: '',
      index: -1,
      classeAtivo: 'desativado',
    });
  };

  handleDelete = (index) => {
    const { tarefas } = this.state;
    tarefas.splice(index, 1);
    this.setState({
      tarefas: [...tarefas],
      novaTarefa: '',
      index: -1,
      classeAtivo: 'desativado',
    });
  };

  render() {
    const { novaTarefa, tarefas, classeAtivo } = this.state;

    return (
      <div className="main">

        <h1>Lista de tarefas</h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <button
            onClick={this.handleNoEdit}
            type="submit"
            className={classeAtivo}
          >
            <FaWindowClose
              onClick={this.handleNoEdit}
              className="noEdit"
            />
          </button>

          <input
            type="text"
            onChange={this.handleChange}
            value={novaTarefa}
          />
          <button type="submit" className="submit">
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
