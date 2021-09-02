import { Car } from "../Car";
import {eHistoryCar} from "../Enum/eHistoryCar"
export class Bmw extends Car {

  carHistory(): string {
    return `Moja historia: ${eHistoryCar.new}`;
  }
}
