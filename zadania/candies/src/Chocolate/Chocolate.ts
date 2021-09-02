import { Candy } from "../Candy";
import { eHowToMakes } from "../Enum/eHowToMake";

export class Chocolate extends Candy {
  howToMake(): string {
    return `Przepis: ${eHowToMakes.melting}`;
  }
}
