import React, { Component } from "react";

import Task from "../Task/Task";
import Button from "../Button/Button";

import "./ToDo.css";

export default class ToDo extends Component {
  state = {
    tasks: []
  };

  componentDidMount = () => {
    this.listTasks();
  };

  listTasks = () => {
    let localTasks = localStorage.getItem("tasks");

    if (localTasks === null) localStorage.setItem("tasks", JSON.stringify([]));
    else this.setState({ tasks: JSON.parse(localTasks) });
  };

  addTask = evt => {
    evt.preventDefault();

    let typedTask = evt.target.firstElementChild.value;

    if (typedTask === "")
      return alert("Não é possível adicionar uma tarefa sem conteúdo");

    let jsonLocal = localStorage.getItem("tasks");

    let tasks = JSON.parse(jsonLocal);

    tasks.push({
      content: typedTask,
      status: "Fazendo"
    });
    evt.target.firstElementChild.value = "";
    evt.target.firstElementChild.focus();
    localStorage.setItem("tasks", JSON.stringify(tasks));

    this.setState({ tasks });
  };

  removeTasks = () => {
    localStorage.setItem("tasks", JSON.stringify([]));
    this.setState({ tasks: [] });
  };

  updateTask = index => {
    let jsonLocal = localStorage.getItem("tasks");

    let tasks = JSON.parse(jsonLocal);

    if (tasks[index].status === "Fazendo") tasks[index].status = "Feito";
    else tasks[index].status = "Fazendo";

    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.setState({ tasks });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTask}>
          <input placeholder="Digite a tarefa" />
          <Button type="submit" className="add" title="Adicionar Tarefa" />
        </form>
        <Button
          type="button"
          className="removeAll"
          title="Remover todas as tarefas"
          onClick={this.removeTasks}
        />
        {this.state.tasks.map((task, index) => {
          return (
            <Task
              className="tarefa"
              title={task.content}
              status={task.status}
              statusClick={() => {
                this.updateTask(index);
              }}
              statusClassName={task.status}
            />
          );
        })}
      </div>
    );
  }
}
