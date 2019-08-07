import React, { Component } from "react";

import Task from "../Task/Task";
import Button from "../Button/Button";
import Input from "../Input/Input";

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

  checkDate = date => {
    let currentDate = new Date();
    let day = String(currentDate.getDay());
    let month = String(currentDate.getMonth() + 1);
    let year = String(currentDate.getFullYear());
    let formattedDate = `
      ${year}-${month.padStart(2, 0)}-${day.padStart(2, "0")}
    `;

    return Date.parse(date) > Date.parse(formattedDate);
  };

  addTask = evt => {
    evt.preventDefault();

    let typedDate = evt.target.firstElementChild.nextElementSibling.value;
    let splittedDate = typedDate.split("-");
    let formattedDate = splittedDate.reverse().join("/");

    if (!this.checkDate(typedDate))
      return alert("Adicione uma data que seja superior ou igual a data atual");

    let typedTask = evt.target.firstElementChild.value;

    if (typedTask === "")
      return alert("Não é possível adicionar uma tarefa sem conteúdo");

    let jsonLocal = localStorage.getItem("tasks");

    let tasks = JSON.parse(jsonLocal);

    tasks.push({
      content: typedTask,
      status: "Fazendo",
      date: formattedDate
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
      <div className="container">
        <form onSubmit={this.addTask}>
          <Input type="text" placeholder="Digite a tarefa" />
          <Input type="date" />
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
              key={index}
              className="tarefa"
              title={task.content}
              status={task.status}
              date={task.date}
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
