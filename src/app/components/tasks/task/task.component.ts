import { Component, Input } from '@angular/core';

import { Task } from '../../../model/task-data.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) taskData!: Task;
}
