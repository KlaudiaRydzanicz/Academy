import {Injectable} from '@angular/core';
import {CounterServiceService} from "./counter-service.service";

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  activeUsers = ['Max', 'Klaudia', 'Dawid'];
  inactiveUsers = ['Oliwia', 'Piotrek', 'Sylwia'];

  constructor(private counterService: CounterServiceService) {
  }

  setToActiveUsers(id: number): void {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive();
  }

  setToInactiveUsers(id: number): void {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }
}
