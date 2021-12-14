export class CounterServiceService {
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log("adding to inactive: " + this.activeToInactiveCounter);
  }


  incrementInactiveToactive() {
    this.inactiveToActiveCounter++;
    console.log("adding to active: " + this.inactiveToActiveCounter);
  }
}
