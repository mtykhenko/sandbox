const factorMap = new Map<number,string>([
  [3, 'Pling'],
  [5, 'Plang'],
  [7, 'Plong']
]);

export function convert(num: number): string {
  let raindropSound: string = '';
  for (let factor of factorMap.keys()) {
    raindropSound += num % factor === 0 ? factorMap.get(factor) : '';
  }

  return raindropSound || num.toString();
}
