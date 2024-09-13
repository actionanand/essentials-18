import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CardComponent } from '../../../shared/ui/card/card.component';

import { Task } from '../../../model/task-data.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) taskData!: Task;
  @Output() completeTask = new EventEmitter<string>();

  onComplete() {
    this.completeTask.emit(this.taskData.id);
  }
}
