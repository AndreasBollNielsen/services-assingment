import { Injectable } from '@angular/core';
import { CounterServiceService } from './CounterService.service';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  //service injected into current service
  constructor(private myCounterService: CounterServiceService) {}

  AddToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.myCounterService.incrementActiveToInactive();
  }

  AddToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.myCounterService.incrementInactiveToactive();
  }
}
