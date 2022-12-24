export class Anagram {
  input: string;

  constructor(input: string) {
    this.input = input;
  }

  public matches(...potentials: string[]): string[] {
    let sortedWord: string = normalizeWord(this.input);
    return potentials.filter(word => normalizeWord(word) === sortedWord && word.toLocaleLowerCase() !== this.input.toLocaleLowerCase());
  }
}

function normalizeWord(input: string): string {
  return [...input.toLocaleLowerCase()].sort().join('');
}