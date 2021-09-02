import { Car } from "../Car";
import { eHistoryCar } from "../Enum/eHistoryCar";
export class AstonMartin extends Car {
  carHistory(): string {
    return `Moja historia: ${eHistoryCar.afterleasing}`;
  }
}
