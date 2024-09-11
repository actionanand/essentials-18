import { Component, Input, input } from '@angular/core';

import { TaskComponent } from './task/task.component';

import { capitalize1stLetter } from '../../shared/functions/capitalize1stLetter';
import { dummyTasks } from '../../shared/local-data/dummy-tasks';
import { type Task } from '../../model/task-data.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
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

  get selectedTasks() {
    return this.tasks.filter(task => task.userId === this.id);
  }
}
