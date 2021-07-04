import { CounterService } from './../counter.service';
import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: any[];

  constructor(
    private userService: UserService,
    private counterService: CounterService,
  ) {
    this.users = userService.getUsers();
   }

  onSetToActive(id: number) {
    this.userService.setUserActive({id});
    this.counterService.plusOne({type: 'inActive'});
  }
}
