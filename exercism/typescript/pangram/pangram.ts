export function isPangram(input: string): boolean {
  const normalizedInput = input.toLocaleLowerCase();
  return [..."abcdefghijklmnopqrstuvwxyz"].every(char => normalizedInput.includes(char));
}
