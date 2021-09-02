export abstract class Alcohol {
  private _name: string;
  private _precents: number;

  constructor(name: string, precents: number) {
    this._name = name;
    this._precents = precents;
  }

  toString(): string {
    return `Nazwa alkoholu: ${this._name}, zawartośc alkoholu: ${this._precents}%.`;
  }

  exciseTax(): string {
    throw new Error("Method exciseTax not implemented");
  }

  nextDayEffect(): string {
    throw new Error("Method nextDayEffect not implemented");
  }
}
