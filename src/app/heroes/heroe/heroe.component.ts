import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent{
  nombre:string = 'Ironman';
  edad:number = 45;

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }

  obtenerNombre(){
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(){
    let n = 'spiderman';
    this.nombre = n;
  }

  cambiarEdad(){
    let e = 30;
    this.edad = e;
  }

}



