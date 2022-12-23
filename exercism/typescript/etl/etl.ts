export function transform(input: { [key: string]: string[] }): { [key: string]: number } {
  const transformed: { [key: string]: number } = {};

  Object.entries(input).map(value => value[1].forEach(item => transformed[`${item.toLocaleLowerCase()}`] = Number(value[0])))

  return transformed;
}
