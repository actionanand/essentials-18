import { Component, Input } from '@angular/core';

// import { DUMMY_USERS } from '../../shared/users-data/dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input()
  userData!: {
    id: string;
    name: string;
    avatar: string;
  };

  onSelectUser() {
    return;
  }
}
