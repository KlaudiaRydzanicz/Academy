import { Component, OnInit } from '@angular/core';
import {UsersServiceService} from '../users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
users!: string[];

  constructor(private usersService: UsersServiceService) { }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }
  onSetInactiveUsers(id: number): any{
    this.usersService.setToInactiveUsers(id);
  }
}
