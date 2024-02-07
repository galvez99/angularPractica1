import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { differenceInDays } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  tasks: Array<Task> = [
    new Task(1, "Bootstrap", "Hacer responsivo", new Date("2023-10-22"), new Date("2023-11-23"), "Diseño de Interfaces", "Nicolás", 30, 150),
    new Task(2, "CSS", "Hacer estilos", new Date("2022-12-23"), new Date("2023-02-04"), "Diseño de Interfaces", "Toni", 10, 9),
    new Task(3, "DBeaver", "Montar base de datos", new Date("2022-09-29"), new Date("2022-09-30"), "Base de Datos", "César", 1, 2),
    new Task(4, "Debugear", "Buscar errores en el código", new Date("2022-11-16"), new Date("2022-11-18"), "Programación", "Álvaro", 8, 11),
    new Task(5, "GIT", "Subir código a GIT", new Date("2023-01-05"), new Date("2023-01-2"), "Entorno de Desarrollos", "Luis", 2, 1),
    new Task(6, "Angular", "Modificar web con Angular", new Date("2024-01-19"), new Date("2022-01-30"), "Entorno Cliente", "Alejandro", 26, 34)

  ];

  task: Task = new Task(0, '', '', new Date(), new Date(), '', '', 0, undefined);

  startTask(task: Task): void {
    task.startDate = new Date();
  }

  finishTask(task: Task): void {
    task.endDate = new Date();
    task.realTime = differenceInDays(task.endDate, task.startDate);
  }

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  private taskAlreadyExists(id: number): boolean {
    return this.tasks.find(task => task.id === id) !== undefined;
  }

  addTask(task: Task): void {
    if (!this.taskAlreadyExists(task.id)) {
      this.tasks.push(task);
    } else {
      alert("This id already exists. Please choose another one.");
    }
    this.task = new Task(0, '', '', new Date(), new Date(), '', '', 0, undefined); 
  }

  modifyTask(task: Task): void {
    const foundTask = this.tasks.find(t => t.id === task.id);
    if (foundTask) {
      const index = this.tasks.indexOf(foundTask);
      this.tasks[index] = { ...task };
    } else {
      alert("The provided ID does not exist.");
    }
  }

  selectTask(task: Task): void {
    this.task = { ...task };
  }
}
