import { Component, EventEmitter, input, Input, Output } from '@angular/core';
// import { output } from '@angular/core';

import { capitalize1stLetter } from '../../shared/functions/capitalize1stLetter';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;

  name = input('Test User', {
    alias: 'peyar',
    transform: (value: string) => capitalize1stLetter(value),
  });

  id = input.required<string>();

  @Output() selectUser = new EventEmitter<string>();

  // selectUser = output<string>();

  onSelectUser() {
    this.selectUser.emit(this.id());
  }
}
