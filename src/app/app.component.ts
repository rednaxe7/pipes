import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre:string = 'Alexander';
  arreglo:number[] = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  n:number = 0.234;
  salario:number = 1234.5;
  
  persona:Object = {
   nombre: 'Alexander',
   apellido: 'Piñero',
   edad: 33,
   direccion: {
     calle: "Sucre con Anzoategui",
     edif: "Res. Belen Blanco",
     piso: 7,
     apto: "7-A"
   }
  };

  valorDePromesa = new Promise((resolve,reject) => {
    setTimeout(()=>resolve('llego la data!'),3500);
  });

  fecha = new Date();
}
