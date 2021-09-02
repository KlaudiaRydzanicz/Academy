import { Component, OnInit } from '@angular/core';
import {UsersServiceService} from '../users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {
  users!: string[];

  constructor(private usersService: UsersServiceService) { }

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
  }
  onSetActiveUsers(id: number): any{
    this.usersService.setToActiveUsers(id);
  }

}
