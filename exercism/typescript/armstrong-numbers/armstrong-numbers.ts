export function isArmstrongNumber(number: number): boolean {
  let numberString = number.toString();
  return numberString.split('').map(value => Number(value)).reduce((sum, value) => sum + (value ** numberString.length), 0) === number;
}
