import { Component, OnInit } from '@angular/core';
import {UserInterface, UserService} from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserInterface[] = [];
  constructor(
    private readonly usersService: UserService
  ) {
    usersService.getAllUsers()
      .subscribe(
        u => this.users = u,
        e => console.error(e)
      );
  }

  ngOnInit(): void {

  }

}
