export function parse(phrase: string): string {
  return (phrase.match(/(\b\w|(?<=[a-z])[A-Z])/g) || ['']).join('').toUpperCase();
}
