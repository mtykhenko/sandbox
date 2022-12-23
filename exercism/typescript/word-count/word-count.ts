export function count(sentense: string): Map<string, number> {
  let wordCounts = new Map<string,number>();

  sentense
    .trim()
    .toLocaleLowerCase()
    .split(/\s+/)
    .forEach((word) => wordCounts.set(word, (wordCounts.get(word) ?? 0) + 1));

  return wordCounts;
}