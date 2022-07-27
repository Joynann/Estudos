import React, { Component } from 'react';

import Form from './Form';
import Tarefas from './Tarefas';

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
    classeAtivo: 'desativado',
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({
      tarefas,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

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
        <Form
          handleChange={this.handleChange}
          handleNoEdit={this.handleNoEdit}
          handleSubmit={this.handleSubmit}
          classeAtivo={classeAtivo}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tarefas={tarefas}
        />

      </div>
    );
  }
}
