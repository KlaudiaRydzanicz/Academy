import { eGender } from "../../Enums/eGender";
import { FamousPeople } from "../../FamousPeople";

export class Generals extends FamousPeople {
  constructor(
    name: string,
    domain: string,
    artefact: string,
    nationality: string
  ) {
    super(name, domain, nationality, artefact);
  }
  shout(): string {
    return "Go!! Don`t give Up";
  }
  gender(): string {
    return ` Płeć : ${eGender.another}`;
  }
}
