export class Gigasecond {

  constructor(private moment: Date) {} 

  public date() {
    let newDate = new Date(this.moment);
    newDate.setSeconds(newDate.getSeconds() + 1_000_000_000);
    return newDate;
  }
}
