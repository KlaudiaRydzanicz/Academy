export abstract class Candy {
  name: string;
  percents: number;
  constructor(name: string, percents: number) {
    this.name = name;
    this.percents = percents;
  }

  toString(): string {
    return `Nazwa: ${this.name}, zawartość kakao: ${this.percents}%`;
  }
  howToMake(): string {
    return "";
  }
}
