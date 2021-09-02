import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
activeToInactiveCounter = 0;
inactiveToActiveCounter = 0;
  constructor() { }
  incrementActiveToInactive(): void{
    this.activeToInactiveCounter++;
    console.log('Active: ', this.activeToInactiveCounter);
  }
  incrementInactiveToActive(): void{
    this.inactiveToActiveCounter++;
    console.log('Inactive: ', this.inactiveToActiveCounter);
  }
}
