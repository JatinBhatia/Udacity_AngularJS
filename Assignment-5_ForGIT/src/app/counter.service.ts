export class CounterService{
activeToInactiveCounter = 0;
InactiveToActiveCounter = 0;

incermnentactiveToInactiveCounter(){
    this.activeToInactiveCounter++;
    console.log('activeToInactiveCounter '+this.activeToInactiveCounter);
}

incrementInactiveToActiveCounter(){
    this.InactiveToActiveCounter++;
    console.log('InactiveToActiveCounter '+this.InactiveToActiveCounter);
}

}