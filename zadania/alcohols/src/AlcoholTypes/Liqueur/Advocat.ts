import { eHangover } from "../../Enums/eHangoverTypes";
import { Liqueur } from "./Liqueur";

export class Advocat extends Liqueur{

    nextDayEffect(): string {
        return `Kac typu: ${eHangover.massiveHeadahe}`
    }
}