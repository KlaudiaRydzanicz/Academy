export abstract class Alcohol {
  name: string;
  precents: number;

  constructor(name: string, precents: number) {
    this.name = name;
    this.precents = precents;
  }

  toString(): string {
    return `Nazwa alkoholu: ${this.name}, zawartośc alkoholu: ${this.precents}%.`;
  }

  exciseTax(): string {
    return "";
  }

  nextDayEffect(): string {
    return "";
  }
}
