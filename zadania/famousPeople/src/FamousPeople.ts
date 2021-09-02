
export abstract class FamousPeople {
  name: string;
  domain: string;
  nationality: string;
  artefact: string;

  constructor(
    name: string,
    domain: string,
    nationality: string,
    artefact: string
  ) {
    this.name = name;
    this.domain = domain;
    this.artefact = artefact;
    this.nationality = nationality;
  }

  toString(): string {
    return `Osoba: ${this.name}, narodowość: ${this.nationality}, domena : ${this.domain}, artefakt: ${this.artefact}`;
  }
  gender(): string {
    return "";
  }
  shout() {}
}
