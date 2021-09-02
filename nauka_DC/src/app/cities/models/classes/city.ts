import {City as CityInterface} from '../interfaces/city';

export class City implements CityInterface {

  constructor(public id: string, public location: string,
              public name: string,
              public description: string,
              public url: string) {
  }
}
