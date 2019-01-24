import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {


    if (activar){
      value = '********'
    }else{
      value = value;

    }
    return value;
  }

}
