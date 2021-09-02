import { FamousPeople } from "../FamousPeople";
import famousPeopleJSON from "../../famousPeople.json";
import { iPersons } from "../Interfaces/iPersons";
import { Writers } from "../FamousPeople/Writers/Writers";
import { Mathematicians } from "../FamousPeople/Mathematicians/Mathematicans";
import { Generals } from "../FamousPeople/Generals/Generals";

export class Render {
  peoples: FamousPeople[] = [];

  display() {
    famousPeopleJSON.forEach((person) => this.createPeples(person));
    for (let person of this.peoples) {
      console.log(
        `${person.toString()}, ${person.shout()}, ${person.gender()}`
      );
    }
  }

  createPeples(data: iPersons) {
    let person;
    switch (data.class) {
      case "Writers":
        person = new Writers(
          data.value.name,
          data.value.domain,
          data.artefact.artefact,
          data.value.nationality
        );
        break;
      case "Mathematicans":
        person = new Mathematicians(
          data.value.name,
          data.value.domain,
          data.artefact.artefact,
          data.value.nationality
        );
        break;
      case "Generals":
        person = new Generals(
          data.value.name,
          data.value.domain,
          data.artefact.artefact,
          data.value.nationality
        );
        break;
      default:
        throw new Error("There is not such a person");
    }
    this.peoples.push(person);
  }
}
