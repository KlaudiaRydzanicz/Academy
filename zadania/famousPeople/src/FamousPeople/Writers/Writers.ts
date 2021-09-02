import { eGender } from "../../Enums/eGender";
import { FamousPeople } from "../../FamousPeople";

export class Writers extends FamousPeople {
  constructor(
    name: string,
    domain: string,
    artefact: string,
    nationality: string
  ) {
    super(name, domain, nationality, artefact);
  }
  shout(): string {
    return "Be or not to be";
  }
  gender(): string {
    return ` Płeć : ${eGender.woman}`;
  }
}
