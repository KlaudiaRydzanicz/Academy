import { iBeer } from "./iBeer";

export abstract class Alcohol implements iBeer {
  name: string;
  abv: number;
  flavors: string;

  constructor(name: string, percents: number, taste: string) {
    this.name = name, 
    this.abv = percents,
    this.flavors = taste
  }

  toString(): string {
    return `Nazwa: ${this.name} procenty: ${this.abv}, taste : ${this.flavors}`;
  }
  exciseTax(): string {
    return "";
  }
  nextDayEffect(): string {
    return "";
  }
}
