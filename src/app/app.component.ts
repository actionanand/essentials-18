import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';

import { DUMMY_USERS } from './shared/users-data/dummy-users';
import { User } from './model/user-data.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, NgFor, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUser: User = DUMMY_USERS[0];

  onSelectUser(id: string) {
    this.users.forEach(user => {
      if (user.id === id) {
        this.selectedUser = user;
      }
    });
  }
}
