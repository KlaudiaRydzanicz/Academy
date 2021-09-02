import { Candy } from "../Candy";
import { eHowToMakes } from "../Enum/eHowToMake";

export class IceCream extends Candy {
  howToMake(): string {
    return `Przepis: ${eHowToMakes.freezing}`;
  }
}
