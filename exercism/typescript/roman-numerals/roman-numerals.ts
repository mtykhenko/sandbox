const romanArabicMapping = new Map<string, number> ([
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1]
]);

export const toRoman = (num: number): string => {
  let roman: string = '';

  for (let entry of romanArabicMapping.entries()) {
    while (num >= entry[1]) {
      roman += entry[0];
      num -= entry[1];
    }
  }

  return roman;
}
