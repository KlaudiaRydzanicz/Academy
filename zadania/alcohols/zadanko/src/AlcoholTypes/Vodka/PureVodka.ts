import { eHangover } from "../../Enums/eHangoverTypes";
import { Vodka } from "./Vodka";

export class PureVodka extends Vodka {
  constructor(name: string, percent: number) {
    super(name, percent);
  }
  nextDayEffect(): string {
    return `Kac typu: ${eHangover.grassIsGrowingToLoud}`;
  }
}
