import { Beer } from "./AlcoholTypes/Beer/Beer";
import { iBeer } from "./iBeer";
import { Render } from "./Render/Render";

(function () {
  const fetchBeer = async (): Promise<void> =>{
    const response = await fetch ('./Beer.json');
    const alcohols = await response.json();
    console.log(alcohols.value);
    
    const render = new Render();
    render.displayAlcohol(alcohols.value.map((b:iBeer)=>new Beer(b.name, b.abv, b.flavors)));
   }
   fetchBeer();
  
})();
