import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utilsConvertTemperature'
})
export class UtilsConvertTemperaturePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let temperature = (value - 273.15) ;
    return temperature.toFixed(1);
  }

}
