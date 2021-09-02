export abstract class Animal {
  gatunek: string;
  nazwa: string;
  nogi: number;
  odglosy: string;


  constructor(gatunek: string, nazwa: string, nogi: number, odglosy: string) {
    this.gatunek = gatunek;
    this.nazwa = nazwa;
    this.nogi = nogi;
    this.odglosy = odglosy;
   
  }
  toString(): string {
    return `Gatunek: ${this.gatunek}, nazwa : ${this.nazwa}, liczba nóg: ${this.nogi}, wydawane odgłosy: ${this.odglosy}`;
  }
  howDangerous(): string {
    throw new Error ("Method howDangerous not implemented");
  }
  whatType(): string{
    throw new Error ("Method whatType not implemented");
  }
static getVoices(): string[]{
  throw new Error ("Method getVoices not implemented");
}
}
