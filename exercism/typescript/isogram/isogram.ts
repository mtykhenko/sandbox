export function isIsogram(word: string): boolean {
  let lettersOnly = word.replace(/\W/g, '').toLocaleLowerCase();
  let uniqueLetters = new Set([...lettersOnly]);
  return lettersOnly.length === uniqueLetters.size;
}
