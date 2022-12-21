enum ColorCodes {
  black,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white
}

export function decodedValue(colorsArray: string[]): number {
  if (Array.isArray(colorsArray)) {
    const considerTwoFirstColors = colorsArray.slice(0, 2).map<ColorCodes>(str => ColorCodes[str as keyof typeof ColorCodes]);
    return Number(considerTwoFirstColors.join(''));
  }

  return 0;
}
