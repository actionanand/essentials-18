import { Component } from '@angular/core';

import { DUMMY_USERS } from '../../shared/users-data/dummy-users';

const randUserInd = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randUserInd];

  get imagePath() {
    return 'users/' + this.selectedUser.avatar;
  }
}
