import { Candy } from "../Candy";
import { eHowToMakes } from "../Enum/eHowToMake";

export class Cakes extends Candy {
  howToMake(): string {
    return `Przepis: ${eHowToMakes.baking}`;
  }
}
