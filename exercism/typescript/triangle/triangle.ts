export class Triangle {
  private sidesSorted: number[];
  private valid: boolean;
  private uniqueSidesSet: Set<number>;

  constructor(...sides: number[]) {
    this.sidesSorted = sides.sort((a,b) => a - b);
    this.uniqueSidesSet = new Set(sides);
    this.valid = this.sidesSorted[0] > 0 && this.sidesSorted[0] + this.sidesSorted[1] > this.sidesSorted[2];
  }

  get isEquilateral(): boolean {
    return this.valid && this.uniqueSidesSet.size === 1;
  }

  get isIsosceles(): boolean {
    return this.valid && this.uniqueSidesSet.size <= 2; 
  }

  get isScalene(): boolean {
    return this.valid && this.uniqueSidesSet.size === 3;
  }

}
