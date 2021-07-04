import { CounterService } from './../counter.service';
import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: any[] = [];

  constructor(
    private userService: UserService,
    private counterService: CounterService,
  ) {
    this.users = userService.getUsers();
   }

  onSetToInactive(id: number) {
    this.userService.setUserInactive({id});
    this.counterService.plusOne({type: 'active'});
  }
}
