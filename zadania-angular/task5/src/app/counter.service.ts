import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInActiveCounter = 0;
  inActiveToActiveCounter = 0;
  constructor() { }
  incrementActiveToInActive(): void {
    this.activeToInActiveCounter++;
    console.log(this.activeToInActiveCounter);
  }
  incrementInActiveToActive(): void {
    this.inActiveToActiveCounter++;
    console.log(this.inActiveToActiveCounter);
  }
}
