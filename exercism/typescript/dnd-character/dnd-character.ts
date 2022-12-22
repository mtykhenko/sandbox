export class DnDCharacter {

  hitpoints: number;

  constitution: number;
  strength: number;
  dexterity: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  constructor() {
    this.constitution = DnDCharacter.generateAbilityScore();
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    let min = Math.ceil(3);
    let max = Math.floor(18);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
