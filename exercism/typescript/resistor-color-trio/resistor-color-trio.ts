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

function formatOhmsValue(valueInOhms: number): string {
  let units = 'ohms';
  if (valueInOhms > 1000) {
    units = 'kiloohms';
    valueInOhms /= 1000;
  }

  return `${valueInOhms} ${units}`;
}

function getOhmsValue(colorOne: ColorCodes, colorTwo: ColorCodes, colorThree: ColorCodes): number {
  return (colorOne * 10 + colorTwo) * 10 ** colorThree; 
}

export function decodedResistorValue(colorsArray: string[]): string {
  if (Array.isArray(colorsArray)) {
    let considerThreeFirstColors = colorsArray.slice(0, 3).map<ColorCodes>(str => ColorCodes[str as keyof typeof ColorCodes]); 
    let valueInOhms = getOhmsValue(considerThreeFirstColors[0], considerThreeFirstColors[1], considerThreeFirstColors[2]);
    return formatOhmsValue(valueInOhms);
  }

  return '';
}
