export function encode(clearData: string): string {
  return clearData.replace(/(\w| )\1+/g, (match, matchedChar: string) => match.length + matchedChar);
}

export function decode(encodedData: string): string {
  return encodedData.replace(/(\d+)(\w| )/g, (match, repeatNumber: number, charToRepeat: string) => charToRepeat.repeat(repeatNumber));
}
