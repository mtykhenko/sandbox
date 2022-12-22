const dnaRnaMapping = new Map<string,string>([
  ["G", "C"],
  ["C", "G"],
  ["T", "A"],
  ["A", "U"]
]);

export function toRna(dnaChain: string): string {
    return dnaChain.split('').map(letter => {
                                      if (dnaRnaMapping.has(letter)) {
                                        return dnaRnaMapping.get(letter);
                                      } else {
                                        throw 'Invalid input DNA.';
                                      }
                                    }
                                  ).join('');
}
