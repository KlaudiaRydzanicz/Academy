import { Car } from "../Car";
import { eHistoryCar } from "../Enum/eHistoryCar";
export class Acura extends Car {
  carHistory(): string {
    return `Moja historia: ${eHistoryCar.afterleasing}`;
  }
}
