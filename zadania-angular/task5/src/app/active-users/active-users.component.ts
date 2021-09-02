import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {

 users: string[] = [];


  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }
  onSetToInActive(id: number): void{
this.usersService.setToInActive(id);
  }
}
