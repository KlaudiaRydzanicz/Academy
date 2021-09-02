import { Alcohol } from "../Alcohol";
import { Ipa } from "../AlcoholTypes/Beer/Ipa";
import { Lager } from "../AlcoholTypes/Beer/Lager";
import { Advocat } from "../AlcoholTypes/Liqueur/Advocat";
import { Coconat } from "../AlcoholTypes/Liqueur/Coconat";
import { PureVodka } from "../AlcoholTypes/Vodka/PureVodka";
import { RedWine } from "../AlcoholTypes/Wines/RedWine";
import { WhiteWine } from "../AlcoholTypes/Wines/WhiteWine";
import { iAlcohols } from "../Interfaces/iAlcohols";
import alcoholsJSON from "../../alcohols.json";

export class Render {
  alcohols: Alcohol[] = [];

  display() {
    alcoholsJSON.forEach((alcohol) => this.createAlcohol(alcohol));
    for (let alcohol of this.alcohols) {
      console.log(
        `${alcohol.toString()}, ${alcohol.exciseTax()}, ${alcohol.nextDayEffect()}`
      );
    }
  }

  createAlcohol(data: iAlcohols) {
    let alcohol: Alcohol;
    switch (data.class) {
      case "Lager":
        alcohol = new Lager(data.value.name, data.value.percents);
        break;
      case "Liqueur":
        alcohol = new Advocat(data.value.name, data.value.percents);
        break;
      case "IPA":
        alcohol = new Coconat(data.value.name, data.value.percents);
        break;
      case "PureVodka":
        alcohol = new PureVodka(data.value.name, data.value.percents);
        break;
      case "WhiteWine":
        alcohol = new WhiteWine(data.value.name, data.value.percents);
        break;
      case "RedWine":
        alcohol = new RedWine(data.value.name, data.value.percents);
        break;
      default:
        throw new Error("There is not such an alcohol");
    }
    this.alcohols.push(alcohol);
  }
}
