import { Alcohol } from "../Alcohol";
import { Lager } from "../AlcoholTypes/Beer/Lager";
import { Porter } from "../AlcoholTypes/Beer/Porter";
import { PureVodka } from "../AlcoholTypes/Vodka/PureVodka";
import { WhiteWine } from "../AlcoholTypes/Wines/WhiteWine";

export class Render {
  displayAlcohol(alcohols: Alcohol[]) {
    // const beer1 = new Lager("Tyskie", 4, "");
    // const beer2 = new Porter("Porter", 6, "");
    // const wine = new WhiteWine("Liebfraumilch", 25, "");
    // const vodka = new PureVodka("Bols", 40, "");

    // const alkohols: Alcohol[] = [beer1, beer2, wine, vodka];

    for (let alcohol of alcohols) {
      console.log(alcohol.toString());
      console.log(alcohol.exciseTax());
      console.log(alcohol.nextDayEffect());
    }
  }
}
