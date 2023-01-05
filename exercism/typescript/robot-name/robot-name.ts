export class Robot {
  private static ROBOTS_INVENTORY:Set<String> = new Set();
  name:string;

  constructor() {
    this.name = Robot.generateUniqueName();
  }

  public resetName(): void {
    this.name = Robot.generateUniqueName();
  }

  public static releaseNames(): void {
    Robot.ROBOTS_INVENTORY.clear();
  }

  private static generateUniqueName(): string {
    let uniqueName:string = '';
    do {
      uniqueName = Robot.randomItemFromSequence('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 2) + Robot.randomItemFromSequence('0123456789', 3);
    } while (Robot.ROBOTS_INVENTORY.has(uniqueName));
    Robot.ROBOTS_INVENTORY.add(uniqueName);
    return uniqueName; 
  }

  private static randomItemFromSequence(sequence: string, length: number): string {
    let result = '';
    let sequenceLength = sequence.length;
    for (let i = 0; i < length; i++) {
        result += sequence.charAt(Math.floor(Math.random() * sequenceLength));
    }
    return result;
  }
}
