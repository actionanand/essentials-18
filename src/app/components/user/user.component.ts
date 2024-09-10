import { Component, OnInit } from '@angular/core';

import { DUMMY_USERS } from '../../shared/users-data/dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  selectedUser = DUMMY_USERS[0];

  ngOnInit(): void {
    this.onSelectUser();
  }

  get imagePath() {
    return 'users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    const randUserInd = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randUserInd];
  }
}
