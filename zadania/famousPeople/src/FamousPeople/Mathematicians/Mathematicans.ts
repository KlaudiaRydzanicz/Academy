import { Artefact } from "../../Artefact";
import { eGender } from "../../Enums/eGender";
import { FamousPeople } from "../../FamousPeople";

export class Mathematicians extends FamousPeople {
  constructor(
    name: string,
    domain: string,
    artefact: string,
    nationality: string
  ) {
    super(name, domain, nationality, artefact);
  }
  shout(): string {
    return "2+2 = 4";
  }
  gender(): string {
    return ` Płeć : ${eGender.man}`;
  }
}
