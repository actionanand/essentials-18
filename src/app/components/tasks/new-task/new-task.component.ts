import { Component, output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  closeDialog = output<boolean>();

  onCancelNewTask() {
    this.closeDialog.emit(false);
  }

  dummyFn() {
    return;
  }
}
