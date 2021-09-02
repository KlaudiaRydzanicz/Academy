import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const minutes: number = Math.floor(value / 60);
    const  temp = minutes * 60;
    const hours = Math.floor((temp/3600));
    const minutes2: number = Math.floor((temp / 60) / 60);
    return hours + ':' + minutes2;

  }

}
