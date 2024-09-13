import { Component, Input, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

import { capitalize1stLetter } from '../../shared/functions/capitalize1stLetter';
import { dummyTasks } from '../../shared/local-data/dummy-tasks';
import { type TaskData, type Task } from '../../model/task-data.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  name = input('Test User', {
    alias: 'peyar',
    transform: (value: string) => capitalize1stLetter(value),
  });

  @Input({ required: true }) id!: string;

  tasks: Task[] = dummyTasks;

  isAddingTask = false;

  get selectedTasks() {
    return this.tasks.filter(task => task.userId === this.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  OnAddNewTask(task: TaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
      userId: this.id,
    });

    this.isAddingTask = false;
  }

  onCloseDialog(isDialogOpen: boolean) {
    this.isAddingTask = isDialogOpen;
  }
}
