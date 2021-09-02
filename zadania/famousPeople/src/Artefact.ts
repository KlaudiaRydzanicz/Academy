import { iArtefact } from "./Interfaces/iArtefact";

export class Artefact implements iArtefact {
  artefact: string;
  constructor(artefact: string) {
    this.artefact = artefact;
  }
}
