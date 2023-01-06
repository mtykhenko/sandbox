export function commands(secretCommands: number): string[] {
  let secretCommandsReversedBinary: string = secretCommands.toString(2).split('').reverse().join('');
  let resultCommands: string[] = ['wink', 'double blink', 'close your eyes', 'jump', 'reverse']
                                 .filter((element: string, index: number) => secretCommandsReversedBinary.charAt(index) === '1');

  if (resultCommands.indexOf('reverse') >= 0) {
    resultCommands.pop();
    resultCommands.reverse();
  }

  return resultCommands;
}
