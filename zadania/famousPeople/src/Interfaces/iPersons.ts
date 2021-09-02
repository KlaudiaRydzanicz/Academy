import { iArtefact } from "./iArtefact";
import { iPerson } from "./iPerson";

export interface iPersons {
  class: string;
  value: iPerson;
  artefact: iArtefact;
}
