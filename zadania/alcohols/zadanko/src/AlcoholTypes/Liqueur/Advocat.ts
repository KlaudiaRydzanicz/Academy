import { eHangover } from "../../Enums/eHangoverTypes";
import { Liqueur } from "./Liqueur";

export class Advocat extends Liqueur{
    constructor(name: string, percent: number){
        super( name, percent);
    }

    nextDayEffect(): string {
        return `Kac typu: ${eHangover.massiveHeadahe}`
    }
}