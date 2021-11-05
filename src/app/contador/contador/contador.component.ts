import { Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  template: ` <div>
  <h1>SUMAS RESTAS</h1>
  <h2>El valor es:{{i}}</h2>
  <h3>La base es: {{base}}</h3>

  <button (click)="arg(base)">Sumar {{base}}</button>
  <button (click)="arg(- base)">Restar {{base}}</button>
  </div> `


})

export class ContadorComponent{

  i:number = 0;
  base:number = 5;

  arg(valor:number){
    this.i += valor;
  }

}


