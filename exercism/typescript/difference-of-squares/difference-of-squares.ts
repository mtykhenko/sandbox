export class Squares {
  sumOfSquares: number;
  squareOfSum: number; 
  difference: number;

  constructor(n: number) {
    const sumToN = n * (n + 1) / 2;
    this.sumOfSquares = n * (n + 1) * (2 * n + 1) / 6;
    this.squareOfSum = Math.pow(sumToN , 2);
    this.difference = this.squareOfSum - this.sumOfSquares;
  }

}
