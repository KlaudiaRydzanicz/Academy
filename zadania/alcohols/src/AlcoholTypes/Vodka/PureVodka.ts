import { eHangover } from "../../Enums/eHangoverTypes";
import { Vodka } from "./Vodka";

export class PureVodka extends Vodka {
  
  nextDayEffect(): string {
    return `Kac typu: ${eHangover.grassIsGrowingToLoud}`;
  }
}
