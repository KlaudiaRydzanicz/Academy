import { Car } from "../Car";
import { eHistoryCar } from "../Enum/eHistoryCar";
export class Audi extends Car {
  carHistory(): string {
    return `Moja historia: ${eHistoryCar.secondowner}`;
  }
}
