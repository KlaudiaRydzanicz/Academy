import {Injectable} from '@angular/core';
import {CounterService} from "./counter.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inActiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {
  }

  setToActive(id: number): void {
    this.activeUsers.push(this.inActiveUsers[id]);
    this.inActiveUsers.splice(id, 1);
    this.counterService.incrementInActiveToActive();
  }

  setToInActive(id: number): void {
    this.inActiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInActive();
  }
}
